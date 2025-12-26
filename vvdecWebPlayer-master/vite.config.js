import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  // 配置开发服务器支持 SharedArrayBuffer
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  
  // 预览服务器也需要配置
  preview: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  
  // 优化 WASM 和大文件
  optimizeDeps: {
    exclude: ['@anthropic-ai/sdk'],
  },
  
  // 资源处理
  assetsInclude: ['**/*.wasm'],
  
  build: {
    // 配置大文件警告阈值
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 SDK 单独打包
          'vvc-sdk': ['./sdk/VVCPlayerSDK.mjs'],
        },
      },
    },
  },
});
