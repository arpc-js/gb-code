import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import arpc from './src/core/plugin'

export default defineConfig(() => ({
  plugins: [
    arpc({ mode: 'http' }),  // 'http' | 'ws'
    vue()
  ],
}))
