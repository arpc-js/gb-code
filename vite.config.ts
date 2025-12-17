import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import arpc from './src/plugins/arpc.js'

export default defineConfig(() => ({
  plugins: [
    // arpc 插件只在客户端构建时启用，SSR 构建使用原始 arpc 类
    arpc(),
    vue()
  ].filter(Boolean),
}))
