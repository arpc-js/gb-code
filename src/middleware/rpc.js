import { join } from 'path';
import { getCorsHeaders } from './cors.js';

// 类缓存
const classCache = new Map();

// 动态加载类
async function loadClass(className) {
    if (classCache.has(className)) {
        return classCache.get(className);
    }
    
    const classPath = join(import.meta.dir, `../rpc/${className}.js`);
    const module = await import(classPath);
    const RpcClass = module.default;
    classCache.set(className, RpcClass);
    return RpcClass;
}

// RPC 处理器 - Bun.js 版本
export async function handleRpc(req) {
    // 只处理 POST 请求
    if (req.method !== 'POST') {
        return null;
    }
    
    // 解析 URL
    const url = new URL(req.url);
    const pathParts = url.pathname.slice(1).split('/');
    
    if (pathParts.length !== 2) {
        return null;
    }
    
    const [className, methodName] = pathParts;
    
    // 跳过非 RPC 请求
    if (className.startsWith('src') || className.startsWith('@') || className.includes('.')) {
        return null;
    }
    
    try {
        // 解析请求体
        const properties = await req.json().catch(() => ({}));
        
        // 加载类
        const RpcClass = await loadClass(className);
        
        // 创建实例
        const instance = new RpcClass();
        
        // 设置属性
        Object.assign(instance, properties);
        
        // 检查方法是否存在
        if (typeof instance[methodName] !== 'function') {
            return new Response(`Method ${methodName} not found`, {
                status: 500,
                headers: getCorsHeaders()
            });
        }
        
        // 调用方法
        const result = await instance[methodName]();
        
        // 返回 JSON 响应（Bun 自动处理压缩）
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                ...getCorsHeaders()
            }
        });
    } catch (e) {
        return new Response(e.message, {
            status: 500,
            headers: getCorsHeaders()
        });
    }
}

export default handleRpc;