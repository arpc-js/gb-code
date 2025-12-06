import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CourseDetail from "../views/CourseDetail.vue";
import { createMemoryHistory, createRouter, createWebHistory, type Router } from "vue-router";

// 路由配置 - 和CSR完全一样的写法
export const routes = [
    { 
        path: '/', 
        component: Home,
        meta: { title: 'Home' } 
    },
    { 
        path: '/about', 
        component: About,
        meta: { title: 'About' } 
    },
    { 
        path: '/course/:id', 
        component: CourseDetail,
        meta: { title: 'Course Detail' } 
    }
];

// 内部：环境检测
const isServer = typeof window === 'undefined';

// 内部：自动选择history模式
const createHistory = () => isServer ? createMemoryHistory() : createWebHistory();

// 工厂函数 - 对外接口和CSR一样简洁
export function createRouterInstance(): Router {
    const router = createRouter({
        history: createHistory(),
        routes
    });
    
    // 导航守卫（自动跳过服务端不支持的操作）
    router.beforeEach((to, _from, next) => {
        if (to.meta.title && !isServer) {
            document.title = `${to.meta.title} - My App`;
        }
        next();
    });
    
    return router;
}

// 默认导出 - CSR直接用，SSR通过工厂函数创建新实例
export const router = createRouterInstance();