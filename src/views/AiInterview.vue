<template>
  <div class="ai-interview">
    <!-- 顶栏 -->
    <div class="top-bar">
      <span class="back" @click="goBack">← 返回</span>
      <span class="title">AI模拟面试</span>
      <span class="clear-btn" @click="clearHistory">清空</span>
    </div>

    <!-- 对话区域 -->
    <div class="chat-container" ref="chatContainer">
      <div class="welcome" v-if="!messages.length">
        <div class="welcome-icon">🤖</div>
        <div class="welcome-title">AI面试官准备就绪</div>
        <div class="welcome-desc">点击下方麦克风按钮，说出你的面试问题</div>
        <div class="welcome-tips">
          <div class="tip-item">💡 支持Java基础、集合、多线程等八股文</div>
          <div class="tip-item">💡 支持Spring、MyBatis、MySQL、Redis</div>
          <div class="tip-item">💡 支持项目相关问题</div>
        </div>
      </div>

      <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.role]">
        <div class="avatar">{{ msg.role === 'user' ? '👤' : '🤖' }}</div>
        <div class="content">
          <div class="text" v-html="formatAnswer(msg.content)"></div>
        </div>
      </div>

      <div v-if="loading" class="message assistant">
        <div class="avatar">🤖</div>
        <div class="content">
          <div class="loading-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- 录音状态 -->
    <div class="recording-status" v-if="isRecording">
      <div class="recording-wave">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      <div class="recording-text">正在录音...</div>
    </div>

    <!-- 错误提示 -->
    <div class="error-toast" v-if="errorMsg" @click="errorMsg = ''">
      ⚠️ {{ errorMsg }}
    </div>

    <!-- 底部输入区 -->
    <div class="input-area">
      <input 
        v-model="inputText" 
        type="text" 
        placeholder="输入问题或点击麦克风语音提问" 
        @keyup.enter="sendText"
        :disabled="loading"
      />
      <button class="mic-btn" :class="{ recording: isRecording }" @click="toggleRecording" :disabled="loading">
        {{ isRecording ? '⏹' : '🎙️' }}
      </button>
      <button class="send-btn" @click="sendText" :disabled="loading || !inputText.trim()">
        发送
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const chatContainer = ref<HTMLElement | null>(null)

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const messages = ref<Message[]>([])
const inputText = ref('')
const loading = ref(false)
const isRecording = ref(false)

const errorMsg = ref('')
const streamingContent = ref('')

// 音频录制
let mediaRecorder: MediaRecorder | null = null
let audioChunks: Blob[] = []

async function toggleRecording() {
  if (isRecording.value) {
    // 停止录音
    mediaRecorder?.stop()
    isRecording.value = false
  } else {
    // 开始录音
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' })
      audioChunks = []
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunks.push(e.data)
      }
      
      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach(t => t.stop())
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' })
        await sendAudio(audioBlob)
      }
      
      mediaRecorder.start()
      isRecording.value = true
      errorMsg.value = ''
    } catch (err) {
      errorMsg.value = '请允许麦克风权限'
    }
  }
}

// 发送音频给qwen-audio
async function sendAudio(audioBlob: Blob) {
  loading.value = true
  messages.value.push({ role: 'user', content: '🎙️ [语音提问]' })
  await scrollToBottom()
  
  try {
    // 转 base64
    const base64 = await blobToBase64(audioBlob)
    await callQianwenAudioStream(base64)
  } catch (err) {
    messages.value.push({ role: 'assistant', content: 'AI服务暂时不可用' })
  } finally {
    loading.value = false
  }
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64 = (reader.result as string).split(',')[1]
      resolve(base64)
    }
    reader.readAsDataURL(blob)
  })
}

async function sendText() {
  const question = inputText.value.trim()
  if (!question || loading.value) return
  
  messages.value.push({ role: 'user', content: question })
  inputText.value = ''
  loading.value = true
  
  await scrollToBottom()
  
  try {
    await callQianwenStream(question)
  } catch (error) {
    messages.value.push({ role: 'assistant', content: '抱歉，AI服务暂时不可用。' })
  } finally {
    loading.value = false
    await scrollToBottom()
  }
}

const API_KEY = 'sk-6fa05ca1c2c248b0b75e86a7a7325567'
const API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions'
const AUDIO_API_URL = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation'

const systemPrompt = `你是一个Java面试官助手。用户会问你Java相关的面试题，请给出简洁、专业的回答。
回答要求：
1. 先给出核心答案（1-2句话）
2. 再补充关键要点（用要点列表）
3. 控制在150字内`

// 调用qwen-audio（语音输入）- 使用原生API
async function callQianwenAudioStream(audioBase64: string) {
  const aiMsgIndex = messages.value.length
  messages.value.push({ role: 'assistant', content: '' })
  
  try {
    const response = await fetch(AUDIO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'X-DashScope-SSE': 'enable'
      },
      body: JSON.stringify({
        model: 'qwen-audio-turbo',
        input: {
          messages: [
            { 
              role: 'user', 
              content: [
                { audio: `data:audio/webm;base64,${audioBase64}` },
                { text: '请用中文回答这个面试问题，简洁专业' }
              ]
            }
          ]
        }
      })
    })
    
    await processAudioStream(response, aiMsgIndex)
  } catch (err) {
    console.error('Audio API error:', err)
    messages.value[aiMsgIndex].content = '语音识别失败，请输入文字提问'
  }
}

// 处理原生API的SSE流
async function processAudioStream(response: Response, msgIndex: number) {
  const reader = response.body?.getReader()
  const decoder = new TextDecoder()
  let content = ''
  
  while (reader) {
    const { done, value } = await reader.read()
    if (done) break
    
    const chunk = decoder.decode(value)
    const lines = chunk.split('\n')
    
    for (const line of lines) {
      if (line.startsWith('data:')) {
        try {
          const json = JSON.parse(line.slice(5))
          const text = json.output?.choices?.[0]?.message?.content?.[0]?.text || ''
          if (text) {
            content = text
            messages.value[msgIndex].content = content
            await scrollToBottom()
          }
        } catch (e) {}
      }
    }
  }
  
  if (!content) {
    messages.value[msgIndex].content = '请再说一遍问题'
  }
}

// 流式调用qwen-turbo（文字输入）
async function callQianwenStream(question: string) {
  const aiMsgIndex = messages.value.length
  messages.value.push({ role: 'assistant', content: '' })
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: 'qwen-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question }
      ],
      stream: true
    })
  })
  
  await processStream(response, aiMsgIndex)
}

// 处理SSE流
async function processStream(response: Response, msgIndex: number) {
  const reader = response.body?.getReader()
  const decoder = new TextDecoder()
  let content = ''
  
  while (reader) {
    const { done, value } = await reader.read()
    if (done) break
    
    const chunk = decoder.decode(value)
    const lines = chunk.split('\n')
    
    for (const line of lines) {
      if (line.startsWith('data: ') && line !== 'data: [DONE]') {
        try {
          const json = JSON.parse(line.slice(6))
          const delta = json.choices?.[0]?.delta?.content || ''
          content += delta
          messages.value[msgIndex].content = content
          await scrollToBottom()
        } catch (e) {}
      }
    }
  }
  
  if (!content) {
    messages.value[msgIndex].content = getLocalAnswer('')
  }
}

// 本地模拟答案（API不可用时的备用）
function getLocalAnswer(question: string): string {
  const q = question.toLowerCase()
  
  if (q.includes('hashmap') || q.includes('哈希')) {
    return `**HashMap底层原理：**

HashMap是基于哈希表实现的Map接口。

**核心要点：**
• JDK1.8采用 数组+链表+红黑树 结构
• 默认初始容量16，负载因子0.75
• 链表长度>8且数组长度>=64时转红黑树
• 扩容时容量翻倍，重新计算hash位置`
  }
  
  if (q.includes('线程池') || q.includes('threadpool')) {
    return `**线程池核心参数：**

线程池通过ThreadPoolExecutor创建，有7个核心参数。

**核心要点：**
• corePoolSize：核心线程数
• maximumPoolSize：最大线程数
• keepAliveTime：空闲线程存活时间
• workQueue：任务队列
• handler：拒绝策略（AbortPolicy/CallerRunsPolicy等）`
  }
  
  if (q.includes('spring') && q.includes('ioc')) {
    return `**Spring IOC是什么：**

IOC（控制反转）是将对象的创建和管理交给Spring容器。

**核心要点：**
• 不再手动new对象，而是通过依赖注入获取
• 降低类之间的耦合度
• 通过@Autowired或构造器注入依赖
• 容器负责管理Bean的生命周期`
  }
  
  if (q.includes('redis') && (q.includes('穿透') || q.includes('击穿') || q.includes('雪崩'))) {
    return `**Redis缓存问题：**

缓存穿透、击穿、雪崩是Redis常见问题。

**核心要点：**
• 穿透：查询不存在数据 → 布隆过滤器/缓存空值
• 击穿：热点key过期 → 互斥锁/永不过期
• 雪崩：大量key同时过期 → 过期时间加随机值`
  }
  
  if (q.includes('mysql') && q.includes('索引')) {
    return `**MySQL索引原理：**

索引是提高查询效率的数据结构，MySQL使用B+树实现。

**核心要点：**
• B+树叶子节点存数据，非叶子只存索引
• 叶子节点有链表连接，范围查询高效
• 主键索引是聚簇索引，数据和索引在一起
• 二级索引需要回表查询`
  }
  
  return `这是一个好问题！

**回答要点：**
• 请确保问题清晰具体
• 可以尝试问Java基础、集合、多线程相关问题
• 也可以问Spring、MyBatis、MySQL、Redis相关问题

试试问："HashMap的底层原理是什么？"`
}

function formatAnswer(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
    .replace(/• /g, '&nbsp;&nbsp;• ')
}

async function scrollToBottom() {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

function clearHistory() {
  messages.value = []
}

function goBack() {
  router.back()
}
</script>

<style scoped>
.ai-interview {
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.top-bar {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}
.back { cursor: pointer; color: #666; font-size: 14px; }
.back:hover { color: #333; }
.title { flex: 1; text-align: center; font-weight: bold; font-size: 18px; color: #333; }
.clear-btn { color: #999; font-size: 14px; cursor: pointer; }
.clear-btn:hover { color: #666; }

.chat-container {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  padding-bottom: 140px;
}

.welcome {
  text-align: center;
  padding: 60px 20px;
}
.welcome-icon { font-size: 64px; margin-bottom: 16px; }
.welcome-title { font-size: 20px; font-weight: bold; color: #333; margin-bottom: 8px; }
.welcome-desc { color: #666; margin-bottom: 24px; }
.welcome-tips { text-align: left; max-width: 300px; margin: 0 auto; }
.tip-item { color: #888; font-size: 14px; margin-bottom: 8px; }

.message {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  max-width: 85%;
}
.message.user {
  flex-direction: row-reverse;
  margin-left: auto;
}
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e8f4fc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.message.user .avatar { background: #4A90D9; }
.content {
  background: #fff;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.message.user .content {
  background: #4A90D9;
  color: #fff;
}
.text { font-size: 14px; line-height: 1.6; }

.loading-dots {
  display: flex;
  gap: 4px;
}
.loading-dots span {
  width: 8px;
  height: 8px;
  background: #4A90D9;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}
.loading-dots span:nth-child(1) { animation-delay: -0.32s; }
.loading-dots span:nth-child(2) { animation-delay: -0.16s; }
@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

.recording-status {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: 12px 24px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.recording-wave {
  display: flex;
  gap: 3px;
  align-items: center;
}
.recording-wave span {
  width: 4px;
  background: #4A90D9;
  border-radius: 2px;
  animation: wave 0.5s ease-in-out infinite alternate;
}
.recording-wave span:nth-child(1) { height: 8px; animation-delay: 0s; }
.recording-wave span:nth-child(2) { height: 16px; animation-delay: 0.1s; }
.recording-wave span:nth-child(3) { height: 24px; animation-delay: 0.2s; }
.recording-wave span:nth-child(4) { height: 16px; animation-delay: 0.3s; }
.recording-wave span:nth-child(5) { height: 8px; animation-delay: 0.4s; }
@keyframes wave {
  from { transform: scaleY(1); }
  to { transform: scaleY(1.5); }
}
.recording-text { font-size: 14px; }

.error-toast {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff3cd;
  color: #856404;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  cursor: pointer;
  z-index: 100;
}

.input-area {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 12px 16px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 12px;
  align-items: center;
}
.input-area input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
}
.input-area input:focus { border-color: #4A90D9; }
.mic-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #4A90D9;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s;
}
.mic-btn:hover { background: #3a7bc8; }
.mic-btn.recording {
  background: #e74c3c;
  animation: pulse 1s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
.send-btn {
  padding: 12px 20px;
  background: #4A90D9;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  cursor: pointer;
}
.send-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.send-btn:not(:disabled):hover { background: #3a7bc8; }
</style>
