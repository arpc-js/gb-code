<template>
  <div class="demo-page">
    <h1>H.266 播放器</h1>
    <h2>全球首次vue播放h266</h2>
    <h2>视频压缩5倍，web无损观看</h2>
    <!-- URL 输入 -->
    <div class="url-bar">
      <input type="text" v-model="videoUrl" placeholder="输入 H.266 视频地址" />
      <button @click="playVideo">播放</button>
    </div>
    
    <!-- 播放器 -->
    <VvcPlayer 
      ref="playerRef"
      :src="videoUrl"
      width="640"
      aspect-ratio="16/9"
      :show-controls="true"
      @ready="onReady"
      @play="onPlay"
      @error="onError"
    />
    
    <!-- 日志 -->
    <div class="log-box">
      <div v-for="(log, i) in logs" :key="i">{{ log }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VvcPlayer } from 'vue-vvc-player';

const playerRef = ref<InstanceType<typeof VvcPlayer> | null>(null);
const logs = ref<string[]>([]);
const videoUrl = ref('http://156.238.240.143:8080/output.mp4');

function log(msg: string) {
  logs.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`);
  if (logs.value.length > 10) logs.value.pop();
}

function onReady() { log('播放器就绪'); }
function onPlay(url: string) { log(`播放: ${url}`); }
function onError(msg: string) { log(`错误: ${msg}`); }
function playVideo() { playerRef.value?.play(videoUrl.value); }
</script>

<style scoped>
.demo-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.url-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.url-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.url-bar button {
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.url-bar button:hover {
  background: #0056b3;
}

.log-box {
  margin-top: 20px;
  background: #1a1a1a;
  color: #0f0;
  padding: 10px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  max-height: 150px;
  overflow-y: auto;
}
</style>