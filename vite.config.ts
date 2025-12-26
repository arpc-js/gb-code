import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import arpc from './src/core/plugin'

export default defineConfig(() => ({
  plugins: [
    arpc({ mode: 'http' }),  // 'http' | 'ws'
    vue()
  ],
  server: {
    headers: {
      // H.266 解码器 (vvdec.wasm) 需要 SharedArrayBuffer
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'credentialless',
    }
  }
}))
