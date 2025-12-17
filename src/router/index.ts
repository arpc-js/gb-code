import { createMemoryHistory, createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";

// 自动扫描 views 目录生成路由
const modules = import.meta.glob('../views/**/*.vue', { eager: true }) as Record<string, { default: any }>;

// 文件路径 -> 路由路径
// views/Home.vue -> /
// views/About.vue -> /about
// views/course/Detail.vue -> /course/detail
// views/course/[id].vue -> /course/:id
function pathToRoute(filePath: string): string {
    // 移除前缀和后缀: ../views/course/Detail.vue -> course/Detail
    let route = filePath
        .replace('../views/', '')
        .replace('.vue', '');
    
    // Home 特殊处理
    if (route === 'Home' || route === 'index') return '/';
    
    // 处理动态参数: [id] -> :id
    route = route.replace(/\[(\w+)\]/g, ':$1');
    
    // 转小写
    route = route.toLowerCase();
    
    // 处理 index 文件
    route = route.replace(/\/index$/, '');
    
    return '/' + route;
}

// 生成路由配置
export const routes: RouteRecordRaw[] = Object.entries(modules).map(([path, module]) => {
    const routePath = pathToRoute(path);
    const name = path.split('/').pop()?.replace('.vue', '') || '';
    
    return {
        path: routePath,
        component: module.default,
        meta: { title: name }
    };
});

// 环境检测
const isServer = typeof window === 'undefined';

// 自动选择 history 模式
const createHistory = () => isServer ? createMemoryHistory() : createWebHistory();

// 工厂函数
export function createRouterInstance(): Router {
    const router = createRouter({
        history: createHistory(),
        routes
    });
    
    router.beforeEach((to, _from, next) => {
        if (to.meta.title && !isServer) {
            document.title = `${to.meta.title} - My App`;
        }
        next();
    });
    
    return router;
}

export const router = createRouterInstance();