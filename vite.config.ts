import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import arpc from './src/core/plugin'
import { existsSync, mkdirSync, copyFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 自动复制 vue-vvc-player SDK 文件到 public/sdk
function copyVvcSdk() {
  return {
    name: 'copy-vvc-sdk',
    buildStart() {
      const sdkSrc = join(__dirname, 'packages/vue-vvc-player/sdk')
      const sdkDest = join(__dirname, 'public/sdk')
      
      if (!existsSync(sdkSrc)) {
        console.warn('[vvc-sdk] SDK source not found:', sdkSrc)
        return
      }
      
      if (!existsSync(sdkDest)) {
        mkdirSync(sdkDest, { recursive: true })
      }
      
      const files = readdirSync(sdkSrc)
      for (const file of files) {
        const src = join(sdkSrc, file)
        const dest = join(sdkDest, file)
        copyFileSync(src, dest)
        console.log(`[vvc-sdk] Copied: ${file}`)
      }
    }
  }
}

export default defineConfig(() => ({
  plugins: [
    copyVvcSdk(),
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
