import { createSSRApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
//创建app(CSR/SSR共用）
export function createApp() {
    const app = createSSRApp(App).use(router)
    app.config.errorHandler = (err: any) => {
        alert(err?.message);  //全局异常处理
    };
    return app
}