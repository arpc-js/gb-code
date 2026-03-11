<template>
  <div class="chat-container">
    <h2>ARPC 无感测试</h2>
    
    <!-- 添加课程 -->
    <div class="form-section">
      <h3>添加课程 (new Course 双向绑定)</h3>
      <div class="form-row">
        <input v-model="course.title" placeholder="课程标题" />
        <input v-model.number="course.price" type="number" placeholder="价格" />
        <button @click="addCourse">添加</button>
      </div>
    </div>
    
    <!-- 聊天消息（无感订阅！） -->
    <div class="messages" ref="messagesRef">
      <div v-for="(msg, i) in chatMessages" :key="i" class="message chat">
        <span class="user">{{ msg.userId || '匿名' }}:</span>
        <span class="text">{{ msg.message }}</span>
      </div>
      <div v-if="!chatMessages.length" class="empty">暂无消息，发送第一条吧！</div>
    </div>
    
    <!-- 发送消息 -->
    <div class="input-area">
      <input v-model="inputText" @keyup.enter="send" placeholder="输入消息..." />
      <button @click="send">发送</button>
    </div>
    
    <div class="actions">
      <button @click="joinRoom">加入房间</button>
      <button @click="getCourses">查询课程</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue';
import { Course } from 'arpc/Course';
import { Chat } from 'arpc/Chat';

const inputText = ref('');
const messagesRef = ref<HTMLElement>();

// 直接 new Course 双向绑定
const course = new Course({ title: '', price: 0 });

// 聊天消息列表
const chatMessages = reactive<any[]>([]);

// 订阅 topic，收到后追加
Chat.subscribe('chat', (msg: any) => {
  chatMessages.push(msg);
  nextTick(() => {
    if (messagesRef.value) messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
  });
});

// 添加课程
const addCourse = async () => {
  if (!course.title) {
    alert('请输入课程标题');
    return;
  }
  await course.add();
  alert('添加成功！ID: ' + course.id);
  course.title = '';
  course.price = 0;
};

// 发送消息
const send = async () => {
  if (!inputText.value.trim()) return;
  await Chat.send(inputText.value);
  inputText.value = '';
};

// 加入房间
const joinRoom = async () => {
  const room = prompt('输入房间名:', 'room1');
  if (room) await Chat.joinRoom(room);
};

// 查询课程
const getCourses = async () => {
  const list = await Course.get({ limit: 5 }, 'id,title,price');
  alert('课程: ' + JSON.stringify(list));
};

// 全局异常处理
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (e) => {
    alert('操作失败: ' + e.reason?.message);
    e.preventDefault();
  });
}
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
