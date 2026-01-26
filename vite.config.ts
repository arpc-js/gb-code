import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import arpc from './src/core/plugin'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(() => ({
  plugins: [
    arpc({ mode: 'http' }),  // 'http' | 'ws'
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}))
