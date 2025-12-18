import type { Plugin, ResolveIdResult } from 'vite';

// Vite 插件：arpc + 自动水合
// SSR 构建时不替换，保持原始类直接访问数据库
// CSR 客户端构建时替换成 RPC 代理
export default function arpcPlugin(): Plugin {
    return {
        name: 'vite-plugin-arpc',
        enforce: 'pre',
        
        // 拦截 arpc 模块解析（仅 CSR）
        resolveId(source: string, _importer: string | undefined, options?: { ssr?: boolean }): ResolveIdResult {
            // SSR 构建时不拦截，使用原始模块
            if (options?.ssr) return null;
            
            const match = source.match(/arpc\/(\w+)/);
            if (match) {
                // 保持原始大小写
                return `\0virtual:arpc-${match[1]}`;
            }
            return null;
        },
        
        // 加载虚拟 arpc 模块（仅 CSR）
        load(id: string, options?: { ssr?: boolean }): string | null {
            // SSR 构建时不加载虚拟模块
            if (options?.ssr) return null;
            
            if (!id.startsWith('\0virtual:arpc-')) return null;
            
            const name = id.replace('\0virtual:arpc-', '');
            // className 和 name 保持一致（首字母大写）
            const className = name.charAt(0).toUpperCase() + name.slice(1);
            
            return generateRpcClass(className, className);
        },
        
        // 自动注入客户端水合代码（仅 CSR）
        transform(code: string, id: string, options?: { ssr?: boolean }): { code: string; map: null } | null {
            // SSR 构建时不注入水合代码
            if (options?.ssr) return null;
            
            // 只处理 main.ts/main.js
            if (!id.endsWith('main.ts') && !id.endsWith('main.js')) return null;
            if (id.includes('node_modules')) return null;
            
            // 检查是否已有水合代码
            if (code.includes('app.mount')) return null;
            
            // 在文件末尾添加水合代码
            const hydrateCode = `
// 自动水合 (arpc 插件生成)
if (typeof window !== 'undefined') {
    createApp().mount('#app');
}
`;
            return { code: code + hydrateCode, map: null };
        }
    };
}

// 生成 RPC 类代码（注意：生成的是纯 JavaScript，不能包含 TypeScript 类型注解）
function generateRpcClass(name: string, className: string): string {
    return `
import { reactive } from 'vue';

const __rpc = async (method, properties = {}, params = []) => {
    // 自动携带 token
    const headers = { 'Content-Type': 'application/json' };
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) headers['Authorization'] = 'Bearer ' + token;
    
    const res = await fetch('/${name}/' + method, {
        method: 'POST',
        headers,
        body: JSON.stringify({ properties, params })
    });
    
    // 401 未授权，跳转登录页
    if (res.status === 401) {
        if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        throw new Error('未登录，请先登录');
    }
    
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    if (Array.isArray(data)) return reactive(data);
    if (data && typeof data === 'object') return reactive(data);
    return data;
};

// 已知的数据字段名（返回值而非 RPC 函数）
const __dataFields = ['id', 'title', 'description', 'price', 'name', 'email', 'duration', 'lessons', 'createdAt', 'updatedAt'];

class __${className}Base {
    constructor(data = {}) {
        Object.assign(this, data);
        const self = this;
        //csr的rpc代理
        const proxy = new Proxy(this, {
            get(target, prop) {
                // 已存在的属性直接返回
                if (prop in target) return target[prop];
                // 已知数据字段返回 undefined
                if (__dataFields.includes(prop)) return undefined;
                // 其他属性当作 RPC 方法
                return async (...args) => {
                    const result = await __rpc(prop, self.toJSON(), args);
                    if (result && typeof result === 'object' && !Array.isArray(result)) {
                        Object.assign(target, result);
                    }
                    return result;
                };
            },
            set(target, prop, value) {
                target[prop] = value;
                return true;
            }
        });
        return reactive(proxy);
    }
    
    toJSON() {
        const data = {};
        for (const key in this) {
            if (typeof this[key] !== 'function') data[key] = this[key];
        }
        return data;
    }
}

const ${className} = new Proxy(__${className}Base, {
    get(target, prop) {
        if (prop === 'prototype' || prop === 'name' || prop === 'length') return target[prop];
        return (...args) => __rpc(prop, {}, args);
    },
    construct(target, args) {
        return new target(...args);
    }
});

export { ${className} };
`;
}
