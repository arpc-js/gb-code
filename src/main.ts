import { createSSRApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouterInstance } from './router'

// 客户端水合（等待路由就绪后再挂载）
if (typeof window !== 'undefined') {
    const { app, router } = createApp()
    router.isReady().then(() => {
        app.mount('#app')
        console.log('[Client] Hydrated')
    })
}

// 导出创建应用的函数（CSR/SSR 共用）
export function createApp() {
    const router = createRouterInstance()
    const app = createSSRApp(App).use(router)
    return { app, router }
}