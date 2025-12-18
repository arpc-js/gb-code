<template>
  <div class="chat-container">
    <h2>WebSocket RPC 测试</h2>
    
    <div class="status" :class="{ connected }">
      {{ connected ? '已连接' : '未连接' }} | 在线: {{ onlineCount }}
    </div>
    
    <!-- 添加课程表单 -->
    <div class="form-section">
      <h3>添加课程 (WS RPC)</h3>
      <div class="form-row">
        <input v-model="courseForm.title" placeholder="课程标题" />
        <input v-model.number="courseForm.price" type="number" placeholder="价格" />
        <button @click="addCourse" :disabled="!connected">添加</button>
      </div>
    </div>
    
    <div class="messages" ref="messagesRef">
      <div v-for="(msg, i) in messages" :key="i" class="message" :class="msg.type">
        <span class="time">{{ msg.time }}</span>
        <span class="text">{{ msg.text }}</span>
      </div>
    </div>
    
    <div class="input-area">
      <input 
        v-model="inputText" 
        @keyup.enter="send" 
        placeholder="输入消息..."
        :disabled="!connected"
      />
      <button @click="send" :disabled="!connected">发送</button>
    </div>
    
    <div class="actions">
      <button @click="joinRoom">加入房间</button>
      <button @click="getCourses">查询课程</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, reactive } from 'vue';

const connected = ref(false);
const onlineCount = ref(0);
const messages = ref<{ type: string; text: string; time: string }[]>([]);
const inputText = ref('');
const messagesRef = ref<HTMLElement>();

const courseForm = reactive({
  title: '',
  price: 0
});

// WS 工具（仅客户端）
let wsTools: { connect: Function; rpc: Function; onMessage: Function; close: Function } | null = null;

const addMessage = (type: string, text: string) => {
  const time = new Date().toLocaleTimeString();
  messages.value.push({ type, text, time });
  nextTick(() => {
    if (messagesRef.value) {
      messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
    }
  });
};

// 连接 WebSocket
const init = async () => {
  if (typeof window === 'undefined') return;
  
  // 动态导入（仅客户端）
  wsTools = await import('arpc/ws');
  
  try {
    await wsTools.connect();
    connected.value = true;
    addMessage('system', '连接成功');
    
    // 监听广播消息
    wsTools.onMessage((data: any) => {
      if (data.type === 'chat') {
        addMessage('chat', `${data.userId}: ${data.message}`);
      } else if (data.type === 'online') {
        onlineCount.value = data.count;
      } else {
        addMessage('info', JSON.stringify(data));
      }
    });
  } catch (e) {
    addMessage('error', '连接失败');
  }
};

// 添加课程
const addCourse = async () => {
  if (!courseForm.title || !wsTools) {
    alert('请输入课程标题');
    return;
  }
  
  try {
    const result = await wsTools.rpc('/Course/add', { 
      title: courseForm.title, 
      price: courseForm.price,
      description: 'WS RPC 添加'
    });
    
    alert('添加成功！ID: ' + result.id);
    addMessage('rpc', `添加课程成功: ${result.title}`);
    
    courseForm.title = '';
    courseForm.price = 0;
  } catch (e) {
    throw e;
  }
};

// 发送聊天消息
const send = async () => {
  if (!inputText.value.trim() || !wsTools) return;
  
  try {
    await wsTools.rpc('/Chat/send', {}, [inputText.value]);
    addMessage('self', inputText.value);
    inputText.value = '';
  } catch (e) {
    throw e;
  }
};

// 加入房间
const joinRoom = async () => {
  if (!wsTools) return;
  const room = prompt('输入房间名:', 'room1');
  if (room) {
    try {
      const result = await wsTools.rpc('/Chat/joinRoom', {}, [room]);
      addMessage('system', `已加入房间: ${result.joined}`);
    } catch (e) {
      throw e;
    }
  }
};

// 查询课程
const getCourses = async () => {
  if (!wsTools) return;
  try {
    const result = await wsTools.rpc('/Course/get', {}, [{ limit: 3 }, 'id,title,price']);
    addMessage('rpc', `课程列表: ${JSON.stringify(result)}`);
  } catch (e) {
    throw e;
  }
};

// 全局异常处理
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (e) => {
    alert('操作失败: ' + e.reason?.message);
    e.preventDefault();
  });
}

onMounted(() => {
  init();
});

onUnmounted(() => {
  wsTools?.close();
});
</script>

<style scoped>
.chat-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h2 {
  margin: 0 0 10px;
  text-align: center;
}

.status {
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  background: #ffebee;
  color: #c62828;
  margin-bottom: 10px;
}

.status.connected {
  background: #e8f5e9;
  color: #2e7d32;
}

.messages {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #eee;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: #fafafa;
}

.message {
  margin: 5px 0;
  padding: 5px 10px;
  border-radius: 4px;
}

.message .time {
  color: #999;
  font-size: 12px;
  margin-right: 8px;
}

.message.system { background: #e3f2fd; }
.message.error { background: #ffebee; color: #c62828; }
.message.self { background: #e8f5e9; text-align: right; }
.message.chat { background: #fff; }
.message.rpc { background: #fff3e0; }
.message.info { background: #f5f5f5; }

.input-area {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.input-area input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.input-area button,
.actions button {
  padding: 10px 20px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.input-area button:disabled {
  background: #ccc;
}

.actions {
  display: flex;
  gap: 10px;
}

.actions button {
  flex: 1;
  background: #757575;
}

.form-section {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.form-section h3 {
  margin: 0 0 10px;
  font-size: 14px;
  color: #666;
}

.form-row {
  display: flex;
  gap: 10px;
}

.form-row input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-row button {
  padding: 8px 16px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-row button:disabled {
  background: #ccc;
}
</style>
