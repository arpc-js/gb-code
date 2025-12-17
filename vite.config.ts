import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import arpc from './src/core/plugin'

export default defineConfig(() => ({
  plugins: [
    arpc(),//前端会rpc代理，后端不代理
    vue()
  ],
}))
