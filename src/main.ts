import { createSSRApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
//创建app(CSR/SSR共用）
export function createApp() {
    return createSSRApp(App).use(router)
}