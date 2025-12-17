import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import arpc from './src/plugins/arpc.js'

export default defineConfig(() => ({
  plugins: [
    arpc(),
    vue()
  ],
}))
