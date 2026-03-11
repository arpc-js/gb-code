import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import arpc from './src/core/plugin'
import { fileURLToPath, URL } from 'node:url'

// CSS 优先加载插件
const cssPriorityPlugin = () => ({
  name: 'css-priority',
  transformIndexHtml(html: string) {
    // 提取所有 link 和 script 标签
    const cssLinks: string[] = [];
    const scripts: string[] = [];
    
    html = html.replace(/<link[^>]*rel="stylesheet"[^>]*>/g, (match) => {
      cssLinks.push(match);
      return '<!--CSS_PLACEHOLDER-->';
    });
    
    html = html.replace(/<script[^>]*type="module"[^>]*><\/script>/g, (match) => {
      scripts.push(match);
      return '<!--SCRIPT_PLACEHOLDER-->';
    });
    
    // 先插入 CSS，再插入 JS
    html = html.replace('<!--CSS_PLACEHOLDER-->', cssLinks.join('\n    '));
    html = html.replace('<!--SCRIPT_PLACEHOLDER-->', scripts.join('\n    '));
    
    return html;
  }
});

export default defineConfig(() => ({
  plugins: [
    arpc({ mode: 'http' }),  // 'http' | 'ws'
    vue(),
    cssPriorityPlugin()  // CSS 优先加载
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // CSS 优先：生成的 HTML 中 CSS link 排在 script 前面
    cssCodeSplit: false,  // 合并所有 CSS 为单个文件
    rollupOptions: {
      output: {
        // 自定义资源注入顺序（CSS 优先）
        manualChunks: undefined
      }
    }
  }
}))
