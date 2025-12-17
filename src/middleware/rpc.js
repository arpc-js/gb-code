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

// ARPC 处理器 - /course/get -> Course.get()
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
        const body = await req.json().catch(() => ({}));
        const ARClass = await loadClass(className);
        
        let result;
        
        // 调用静态方法
        if (methodName === 'get') {
            result = ARClass.get(body);
        } else if (methodName === 'add') {
            result = ARClass.add(body);
        } else if (methodName === 'update') {
            result = ARClass.update(body.where, body.data);
        } else if (methodName === 'del') {
            result = ARClass.del(body);
        } else {
            return new Response(`Method ${methodName} not found`, {
                status: 404,
                headers: getCorsHeaders()
            });
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