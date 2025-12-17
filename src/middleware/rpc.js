import { join } from 'path';
import { getCorsHeaders } from './cors.js';

// 类缓存
const classCache = new Map();

// 动态加载 arpc 类
async function loadClass(className) {
    const name = className.charAt(0).toUpperCase() + className.slice(1);
    if (classCache.has(name)) {
        return classCache.get(name);
    }
    
    const classPath = join(import.meta.dir, `../arpc/${name}.js`);
    const module = await import(classPath);
    const ARClass = module.default;
    classCache.set(name, ARClass);
    return ARClass;
}

// ARPC 处理器 - /course/get -> Course.get(...params)
export async function handleRpc(req) {
    if (req.method !== 'POST') return null;
    
    const url = new URL(req.url);
    const pathParts = url.pathname.slice(1).split('/');
    
    if (pathParts.length !== 2) return null;
    
    const [className, methodName] = pathParts;
    
    // 跳过非 RPC 请求
    if (className.startsWith('src') || className.startsWith('@') || className.includes('.')) {
        return null;
    }
    
    try {
        // 解析请求体: { properties?: {}, params?: [] }
        const body = await req.json().catch(() => ({}));
        const { properties = {}, params = [] } = body;
        
        // 加载类
        const ARClass = await loadClass(className);
        
        let result;
        const hasProperties = Object.keys(properties).length > 0;
        
        // 如果有 properties，说明是实例方法调用
        if (hasProperties) {
            const instance = new ARClass(properties);
            
            if (typeof instance[methodName] !== 'function') {
                return new Response(`Instance method ${methodName} not found`, {
                    status: 404,
                    headers: getCorsHeaders()
                });
            }
            
            result = instance[methodName](...params);
        } else if (typeof ARClass[methodName] === 'function') {
            // 静态方法调用: Course.get(...params)
            result = ARClass[methodName](...params);
        } else {
            return new Response(`Method ${methodName} not found`, {
                status: 404,
                headers: getCorsHeaders()
            });
        }
        
        // 处理 Promise
        if (result instanceof Promise) {
            result = await result;
        }
        
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                ...getCorsHeaders()
            }
        });
    } catch (e) {
        console.error('[RPC Error]', e);
        return new Response(e.message, {
            status: 500,
            headers: getCorsHeaders()
        });
    }
}

export default handleRpc;