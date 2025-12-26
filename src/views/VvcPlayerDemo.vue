<template>
  <div class="demo-page">
    <h1>VVC Player 组件演示</h1>
    
    <!-- 方式1: 直接使用组件 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <VvcPlayer 
        ref="playerRef"
        :threads="2"
        :show-controls="true"
        @ready="onReady"
        @play="onPlay"
        @error="onError"
        @ended="onEnded"
      />
    </section>
    
    <!-- 控制按钮 -->
    <section class="demo-section">
      <h2>外部控制</h2>
      <div class="button-group">
        <button @click="playExternal">播放指定视频</button>
        <button @click="pausePlayer">暂停</button>
        <button @click="stopPlayer">停止</button>
      </div>
    </section>
    
    <!-- 事件日志 -->
    <section class="demo-section">
      <h2>事件日志</h2>
      <div class="log-box">
        <div v-for="(log, i) in logs" :key="i" class="log-item">
          {{ log }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 使用 npm 安装的 vue-vvc-player 组件
import { VvcPlayer } from 'vue-vvc-player';

const playerRef = ref<InstanceType<typeof VvcPlayer> | null>(null);
const logs = ref<string[]>([]);

function addLog(msg: string) {
  const time = new Date().toLocaleTimeString();
  logs.value.unshift(`[${time}] ${msg}`);
  if (logs.value.length > 20) logs.value.pop();
}

function onReady() {
  addLog('播放器就绪');
}

function onPlay(url: string) {
  addLog(`开始播放: ${url}`);
}

function onError(msg: string) {
  addLog(`错误: ${msg}`);
}

function onEnded() {
  addLog('播放结束');
}

function playExternal() {
  playerRef.value?.play('http://156.238.240.143:8080/output.mp4');
}

function pausePlayer() {
  playerRef.value?.pause();
  addLog('已暂停');
}

function stopPlayer() {
  playerRef.value?.stop();
  addLog('已停止');
}
</script>

<style scoped>
.demo-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

.demo-section {
  margin: 30px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
}

.demo-section h2 {
  margin-top: 0;
  color: #444;
  font-size: 18px;
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.button-group button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-group button:hover {
  background: #0056b3;
}

.log-box {
  background: #1a1a1a;
  color: #0f0;
  padding: 15px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  max-height: 200px;
  overflow-y: auto;
}

.log-item {
  padding: 2px 0;
}
</style>
