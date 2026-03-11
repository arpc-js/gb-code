<template>
  <div class="vvc-player" :style="containerStyle" @mouseenter="showBar = true" @mouseleave="showBar = false">
    <!-- 16:9 比例容器 -->
    <div class="vvc-aspect" :style="aspectStyle">
      <!-- 画布 -->
      <canvas ref="canvasRef" class="vvc-canvas"></canvas>
      
      <!-- 海报图/大播放按钮 -->
      <div v-if="ready && !hasPlayed" class="vvc-overlay" :style="poster ? { backgroundImage: `url(${poster})` } : {}" @click="playVideo">
        <div class="vvc-play-big">&#9658;</div>
      </div>
      
      <!-- 加载中 -->
      <div v-if="!ready" class="vvc-overlay vvc-loading">
        <div class="vvc-spinner"></div>
      </div>
      
      <!-- 控制栏 -->
      <div class="vvc-bar" :class="{ show: showBar || !playing }" v-if="showControls">
        <!-- 播放按钮 -->
        <button class="vvc-btn-play" @click="togglePlay" :disabled="!ready">
          <span v-if="playing">&#10074;&#10074;</span>
          <span v-else>&#9658;</span>
        </button>
        
        <!-- 进度条 -->
        <div class="vvc-progress">
          <div class="vvc-progress-bar"></div>
        </div>
        
        <!-- 时间 -->
        <span class="vvc-time">{{ timeText }}</span>
        
        <!-- 音量 -->
        <button class="vvc-btn" @click="toggleMute">
          <span v-if="muted">&#128263;</span>
          <span v-else>&#128266;</span>
        </button>
        
        <!-- 全屏 -->
        <button class="vvc-btn" @click="toggleFullScreen">&#x26F6;</button>
      </div>
    </div>
    
    <!-- 错误 -->
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
  height: '',
  aspectRatio: '16/9',
  sdkPath: '/sdk/',
  showControls: true,
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
const error = ref<string | null>(null);
const videoUrl = ref(props.src);
const showBar = ref(false);
const timeText = ref('0:00');

// Computed
const containerStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
}));

const aspectStyle = computed(() => {
  if (props.height) {
    return { height: typeof props.height === 'number' ? `${props.height}px` : props.height };
  }
  return { aspectRatio: props.aspectRatio };
});

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
    const sdkUrl = props.sdkPath.endsWith('/') ? props.sdkPath : props.sdkPath + '/';
    const { default: VVCPlayer } = await import(/* @vite-ignore */ sdkUrl + 'VVCPlayer.mjs');
    
    player.value = new VVCPlayer(canvasRef.value, sdkUrl, {
      workerPath: sdkUrl + 'decoderWorker.js',
      libPath: sdkUrl,
    });
    player.value.numDecoderThreads = props.threads;
    
    player.value.onReady = () => {
      ready.value = true;
      emit('ready');
      if (props.autoPlay && props.src) play(props.src);
    };
    
    player.value.onStatusChange = (status: string) => {
      playing.value = status === 'play';
      if (status === 'stop') emit('stop');
    };
    
    player.value.onDrawFrame = (frame: FrameInfo) => emit('frame', frame);
    player.value.onMetadata = (data: MetadataInfo) => {
      hasAudio.value = data.hasAudio || false;
      emit('metadata', data);
    };
    
    player.value.onErrorMsg = (msg: string) => {
      error.value = msg;
      emit('error', msg);
    };
    
    player.value.onEOF = () => {
      playing.value = false;
      emit('ended');
      if (props.loop && videoUrl.value) play(videoUrl.value);
    };
    
  } catch (e: any) {
    error.value = e.message;
    emit('error', e.message);
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
    // 调用 destroy 方法终止 Worker
    if (typeof player.value.destroy === 'function') {
      player.value.destroy();
    } else {
      player.value.stop();
    }
    player.value = null;
  }
}

// 页面刷新/关闭时清理资源
function handleBeforeUnload() {
  destroy();
}

// Lifecycle
onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload);
  initPlayer();
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
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
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.vvc-aspect {
  position: relative;
  width: 100%;
  background: #1a1a1a;
}

.vvc-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* 覆盖层 */
.vvc-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111 no-repeat center/cover;
  cursor: pointer;
}

.vvc-play-big {
  width: 60px;
  height: 60px;
  background: rgba(0,0,0,0.7);
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4px;
  transition: transform 0.2s, background 0.2s;
}

.vvc-play-big:hover {
  transform: scale(1.1);
  background: rgba(0,0,0,0.9);
}

/* 加载 */
.vvc-loading {
  background: #000;
}

.vvc-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255,255,255,0.2);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 控制栏 */
.vvc-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 36px;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s;
}

.vvc-bar.show {
  opacity: 1;
}

/* 播放按钮 */
.vvc-btn-play {
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.vvc-btn-play:hover {
  background: rgba(255,255,255,0.2);
}

.vvc-btn-play:disabled {
  opacity: 0.4;
}

/* 进度条 */
.vvc-progress {
  flex: 1;
  height: 4px;
  background: rgba(255,255,255,0.3);
  border-radius: 2px;
  cursor: pointer;
}

.vvc-progress-bar {
  height: 100%;
  background: #fff;
  border-radius: 2px;
  width: 0;
}

/* 时间 */
.vvc-time {
  color: #fff;
  font-size: 12px;
  font-family: monospace;
  min-width: 36px;
}

/* 按钮 */
.vvc-btn {
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.vvc-btn:hover {
  background: rgba(255,255,255,0.2);
}

/* 错误 */
.vvc-error {
  position: absolute;
  bottom: 40px;
  left: 8px;
  right: 8px;
  background: rgba(200,0,0,0.9);
  color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
}
</style>
