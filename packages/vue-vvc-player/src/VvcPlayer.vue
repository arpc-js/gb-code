<template>
  <div class="vvc-player" :style="containerStyle">
    <!-- URL 输入框 -->
    <div v-if="showUrlInput" class="vvc-url-bar">
      <input 
        type="text" 
        v-model="videoUrl" 
        placeholder="输入 H.266 视频 URL"
        class="vvc-url-input"
        @keyup.enter="playVideo"
      />
      <button class="vvc-play-btn" @click="playVideo" :disabled="!ready || !videoUrl">
        播放
      </button>
    </div>
    
    <!-- 海报图 -->
    <div v-if="poster && !playing && !hasPlayed" class="vvc-poster" :style="{ backgroundImage: `url(${poster})` }">
      <button v-if="ready" class="vvc-poster-play" @click="playVideo">▶</button>
    </div>
    
    <!-- 播放器画布 -->
    <div class="vvc-wrapper" :style="wrapperStyle">
      <canvas ref="canvasRef" class="vvc-canvas"></canvas>
      
      <!-- 控制栏 -->
      <div class="vvc-controls" v-if="showControls && hasPlayed">
        <button class="vvc-btn" @click="togglePlay" :disabled="!ready">
          {{ playing ? '⏸' : '▶' }}
        </button>
        <button class="vvc-btn" @click="stop" :disabled="!ready">⏹</button>
        
        <!-- 音量 -->
        <div class="vvc-volume" v-if="hasAudio">
          <button class="vvc-btn" @click="toggleMute">
            {{ muted ? '🔇' : '🔊' }}
          </button>
          <input type="range" min="0" max="100" v-model="volume" @input="updateVolume" />
        </div>
        
        <!-- 状态 -->
        <span class="vvc-status">{{ statusText }}</span>
        
        <!-- 全屏 -->
        <button class="vvc-btn vvc-fullscreen" @click="toggleFullScreen">⛶</button>
      </div>
    </div>
    
    <!-- 加载中 -->
    <div v-if="!ready" class="vvc-loading">加载中...</div>
    
    <!-- 错误提示 -->
    <div v-if="error" class="vvc-error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import type { VvcPlayerProps, FrameInfo, MetadataInfo } from './types';

// Props
const props = withDefaults(defineProps<VvcPlayerProps>(), {
  src: '',
  width: '100%',
  height: 'auto',
  sdkPath: '/sdk/',
  showControls: true,
  showUrlInput: false,
  threads: 2,
  autoPlay: false,
  loop: false,
  poster: '',
});

// Emits
const emit = defineEmits<{
  ready: [];
  play: [url: string];
  pause: [];
  stop: [];
  ended: [];
  error: [message: string];
  frame: [info: FrameInfo];
  metadata: [info: MetadataInfo];
}>();

// Refs
const canvasRef = ref<HTMLCanvasElement | null>(null);

// State
const player = ref<any>(null);
const ready = ref(false);
const playing = ref(false);
const hasPlayed = ref(false);
const hasAudio = ref(false);
const muted = ref(false);
const volume = ref(100);
const statusText = ref('初始化中...');
const error = ref<string | null>(null);
const videoUrl = ref(props.src);

// Computed
const containerStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
}));

const wrapperStyle = computed(() => ({
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
}));

// Watch
watch(() => props.src, (newUrl) => {
  videoUrl.value = newUrl;
  if (newUrl && ready.value && props.autoPlay) {
    play(newUrl);
  }
});

// Methods
async function initPlayer() {
  if (!canvasRef.value) return;
  
  try {
    // 动态导入 SDK（从 public/sdk/ 加载）
    const sdkUrl = props.sdkPath.endsWith('/') ? props.sdkPath : props.sdkPath + '/';
    const { default: VVCPlayer } = await import(/* @vite-ignore */ sdkUrl + 'VVCPlayer.mjs');
    
    const playerOptions = {
      workerPath: sdkUrl + 'decoderWorker.js',
      libPath: sdkUrl,
    };
    
    player.value = new VVCPlayer(canvasRef.value, sdkUrl, playerOptions);
    player.value.numDecoderThreads = props.threads;
    
    // 绑定事件
    player.value.onReady = () => {
      ready.value = true;
      statusText.value = '就绪';
      emit('ready');
      
      if (props.autoPlay && props.src) {
        play(props.src);
      }
    };
    
    player.value.onStatusChange = (status: string) => {
      playing.value = status === 'play';
      if (status === 'stop') {
        statusText.value = '已停止';
        emit('stop');
      }
    };
    
    player.value.onDrawFrame = (frame: FrameInfo) => {
      statusText.value = `${frame.width}x${frame.height}`;
      emit('frame', frame);
    };
    
    player.value.onMetadata = (data: MetadataInfo) => {
      hasAudio.value = data.hasAudio || false;
      emit('metadata', data);
    };
    
    player.value.onErrorMsg = (msg: string) => {
      error.value = msg;
      emit('error', msg);
    };
    
    player.value.onEOF = () => {
      statusText.value = '播放结束';
      playing.value = false;
      emit('ended');
      
      if (props.loop && videoUrl.value) {
        play(videoUrl.value);
      }
    };
    
  } catch (e: any) {
    error.value = '初始化失败: ' + e.message;
    statusText.value = '初始化失败';
    console.error(e);
  }
}

function play(url?: string) {
  if (!player.value || !ready.value) return;
  
  const targetUrl = url || videoUrl.value || props.src;
  if (!targetUrl) {
    error.value = '请提供视频 URL';
    return;
  }
  
  error.value = null;
  hasPlayed.value = true;
  player.value.play(targetUrl);
  playing.value = true;
  emit('play', targetUrl);
}

function pause() {
  if (!player.value) return;
  player.value.pause();
  playing.value = false;
  emit('pause');
}

function resume() {
  if (!player.value) return;
  player.value.continue();
  playing.value = true;
}

function stop() {
  if (!player.value) return;
  player.value.stop();
  playing.value = false;
}

function togglePlay() {
  if (playing.value) {
    pause();
  } else if (player.value?.playingStatus === 'pause') {
    resume();
  } else if (videoUrl.value) {
    play(videoUrl.value);
  }
}

function playVideo() {
  if (videoUrl.value && ready.value) {
    play(videoUrl.value);
  }
}

function toggleMute() {
  muted.value = !muted.value;
  player.value?.setMuted(muted.value);
}

function updateVolume() {
  player.value?.setVolume(volume.value / 100);
}

function toggleFullScreen() {
  player.value?.toggleFullScreen();
}

function setVolume(v: number) {
  volume.value = Math.max(0, Math.min(100, v * 100));
  updateVolume();
}

function setMuted(m: boolean) {
  muted.value = m;
  player.value?.setMuted(m);
}

function destroy() {
  if (player.value) {
    player.value.stop();
    player.value = null;
  }
}

// Lifecycle
onMounted(() => {
  initPlayer();
});

onBeforeUnmount(() => {
  destroy();
});

// Expose
defineExpose({
  play,
  pause,
  resume,
  stop,
  toggleFullScreen,
  setVolume,
  setMuted,
  ready,
  playing,
});
</script>

<style scoped>
.vvc-player {
  position: relative;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.vvc-url-bar {
  display: flex;
  gap: 8px;
  padding: 8px;
  background: #1a1a1a;
}

.vvc-url-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #333;
  border-radius: 4px;
  background: #222;
  color: #fff;
  font-size: 14px;
}

.vvc-url-input:focus {
  outline: none;
  border-color: #007bff;
}

.vvc-play-btn {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.vvc-play-btn:hover:not(:disabled) {
  background: #0056b3;
}

.vvc-play-btn:disabled {
  background: #555;
  cursor: not-allowed;
}

.vvc-poster {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.vvc-poster-play {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 32px;
  border: 2px solid white;
  cursor: pointer;
  transition: transform 0.2s;
}

.vvc-poster-play:hover {
  transform: scale(1.1);
}

.vvc-wrapper {
  position: relative;
  min-height: 200px;
}

.vvc-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.vvc-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.vvc-btn {
  background: #444;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.vvc-btn:hover {
  background: #666;
}

.vvc-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vvc-volume {
  display: flex;
  align-items: center;
  gap: 4px;
}

.vvc-volume input {
  width: 60px;
}

.vvc-status {
  color: #aaa;
  font-size: 12px;
  margin-left: auto;
}

.vvc-fullscreen {
  margin-left: 8px;
}

.vvc-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #aaa;
  font-size: 14px;
}

.vvc-error {
  color: #ff6b6b;
  padding: 8px;
  background: #2a1515;
  font-size: 12px;
}
</style>
