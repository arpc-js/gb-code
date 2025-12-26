<template>
  <div class="h266-player">
    <h2>H.266 (VVC) 播放器 - vvdec.wasm</h2>
    
    <div class="status">
      <span :class="statusClass">{{ status }}</span>
    </div>

    <div class="player-container">
      <canvas ref="canvas" width="1280" height="720"></canvas>
    </div>

    <div class="controls">
      <button @click="loadAndPlay" :disabled="loading">
        {{ loading ? '加载中...' : '播放 H.266 视频' }}
      </button>
      <button @click="stop" :disabled="!playing">停止</button>
    </div>

    <div class="info">
      <p>视频路径: http://156.238.240.143:8080/output.266 (H.266裸流)</p>
      <p>解码方式: <strong>vvdec.wasm</strong> (Fraunhofer 官方)</p>
      <p v-if="fps">帧率: {{ fps }} fps</p>
      <p v-if="frameCount">已解码帧数: {{ frameCount }}</p>
      <p v-if="videoWidth">分辨率: {{ videoWidth }}x{{ videoHeight }}</p>
    </div>

    <div class="warning">
      <p>⚠️ 使用说明:</p>
      <ul>
        <li>需要下载 vvdec.wasm 到 public/vvdec/ 目录</li>
        <li>视频需要是 .266 裸流格式（不是 MP4 封装）</li>
        <li>建议使用低分辨率视频 (720p 30fps)</li>
      </ul>
    </div>
    
    <div class="extract-tip">
      <p>📝 提取裸流命令:</p>
      <code>ffmpeg -i output.mp4 -c:v copy -bsf:v vvc_mp4toannexb output.266</code>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, onMounted } from 'vue'

const canvas = ref<HTMLCanvasElement>()
const status = ref('就绪')
const loading = ref(false)
const playing = ref(false)
const fps = ref(0)
const frameCount = ref(0)
const videoWidth = ref(0)
const videoHeight = ref(0)

let decoder: any = null
let animationId: number | null = null
let frames: ImageData[] = []
let currentFrameIndex = 0

const statusClass = computed(() => ({
  'status-ready': status.value === '就绪',
  'status-loading': status.value.includes('加载') || status.value.includes('解码'),
  'status-playing': status.value === '播放中',
  'status-error': status.value.includes('错误')
}))

// 加载 vvdec wasm 模块
async function loadVVdec() {
  if (decoder) return decoder
  
  status.value = '加载 vvdec.wasm...'
  
  // 加载 vvdec wasm 模块
  const script = document.createElement('script')
  script.src = '/vvdec/vvdec.js'
  document.head.appendChild(script)
  
  await new Promise((resolve, reject) => {
    script.onload = resolve
    script.onerror = () => reject(new Error('vvdec.js 加载失败'))
  })
  
  // 初始化 vvdec
  // @ts-ignore
  decoder = await window.createVVdeC({
    locateFile: (path: string) => `/vvdec/${path}`
  })
  
  status.value = 'vvdec.wasm 已加载'
  return decoder
}

async function loadAndPlay() {
  if (loading.value || playing.value) return
  
  loading.value = true
  frameCount.value = 0
  frames = []
  
  try {
    await loadVVdec()
    
    status.value = '下载 H.266 裸流...'
    const response = await fetch('http://156.238.240.143:8080/output.266')
    if (!response.ok) throw new Error('视频文件不存在，请先提取裸流')
    
    const vvcData = new Uint8Array(await response.arrayBuffer())
    console.log(`下载完成: ${vvcData.length} 字节`)
    
    status.value = '解码中...'
    
    // 创建解码器实例
    const dec = new decoder.Decoder()
    
    // 解码所有帧
    const result = dec.decode(vvcData)
    
    if (!result || result.frames.length === 0) {
      throw new Error('解码失败，无有效帧')
    }
    
    videoWidth.value = result.width
    videoHeight.value = result.height
    canvas.value!.width = result.width
    canvas.value!.height = result.height
    
    const ctx = canvas.value?.getContext('2d')
    if (!ctx) throw new Error('Canvas 不可用')
    
    // 转换所有帧为 ImageData
    for (const frame of result.frames) {
      const imageData = ctx.createImageData(result.width, result.height)
      // YUV 转 RGB
      yuv2rgb(frame.y, frame.u, frame.v, imageData.data, result.width, result.height)
      frames.push(imageData)
    }
    
    frameCount.value = frames.length
    console.log(`解码完成: ${frames.length} 帧`)
    
    // 开始播放
    status.value = '播放中'
    playing.value = true
    loading.value = false
    currentFrameIndex = 0
    
    let lastTime = performance.now()
    let frameCounter = 0
    
    function renderFrame() {
      if (!playing.value || frames.length === 0) return
      
      ctx.putImageData(frames[currentFrameIndex], 0, 0)
      currentFrameIndex = (currentFrameIndex + 1) % frames.length
      frameCounter++
      
      const now = performance.now()
      if (now - lastTime >= 1000) {
        fps.value = frameCounter
        frameCounter = 0
        lastTime = now
      }
      
      // 30fps
      setTimeout(() => {
        animationId = requestAnimationFrame(renderFrame)
      }, 33)
    }
    
    renderFrame()
    
  } catch (error: any) {
    status.value = `错误: ${error.message}`
    console.error(error)
  } finally {
    loading.value = false
  }
}

// YUV420 转 RGB
function yuv2rgb(y: Uint8Array, u: Uint8Array, v: Uint8Array, rgb: Uint8ClampedArray, width: number, height: number) {
  let rgbIndex = 0
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      const yIndex = j * width + i
      const uvIndex = Math.floor(j / 2) * Math.floor(width / 2) + Math.floor(i / 2)
      
      const Y = y[yIndex]
      const U = u[uvIndex] - 128
      const V = v[uvIndex] - 128
      
      rgb[rgbIndex++] = Math.max(0, Math.min(255, Y + 1.402 * V))
      rgb[rgbIndex++] = Math.max(0, Math.min(255, Y - 0.344 * U - 0.714 * V))
      rgb[rgbIndex++] = Math.max(0, Math.min(255, Y + 1.772 * U))
      rgb[rgbIndex++] = 255 // Alpha
    }
  }
}

function stop() {
  playing.value = false
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
  status.value = '已停止'
  fps.value = 0
}

onUnmounted(() => {
  stop()
})
</script>

<style scoped>
.h266-player {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  font-family: sans-serif;
}

h2 {
  text-align: center;
  color: #333;
}

.status {
  text-align: center;
  margin: 15px 0;
  font-size: 16px;
}

.status-ready { color: #666; }
.status-loading { color: #f90; }
.status-playing { color: #0a0; }
.status-error { color: #f00; }

.player-container {
  display: flex;
  justify-content: center;
  background: #000;
  padding: 10px;
  border-radius: 8px;
}

canvas {
  max-width: 100%;
  height: auto;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

button {
  padding: 10px 24px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #007bff;
  color: white;
  transition: background 0.2s;
}

button:hover:not(:disabled) {
  background: #0056b3;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.info {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
}

.info p {
  margin: 5px 0;
  color: #555;
}

.warning {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #ffc107;
}

.warning p {
  margin: 0 0 10px 0;
  font-weight: bold;
  color: #856404;
}

.warning ul {
  margin: 0;
  padding-left: 20px;
  color: #856404;
}

.warning li {
  margin: 5px 0;
}

.extract-tip {
  background: #e7f3ff;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #007bff;
  margin-top: 15px;
}

.extract-tip p {
  margin: 0 0 10px 0;
  font-weight: bold;
  color: #004085;
}

.extract-tip code {
  display: block;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 13px;
  color: #333;
  word-break: break-all;
}
</style>
