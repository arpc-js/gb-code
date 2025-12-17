// Vite 插件：将 arpc 类转换为前端 RPC 调用
export default function arpcPlugin() {
    return {
        name: 'vite-plugin-arpc',
        enforce: 'pre',
        
        // 拦截 arpc 模块解析
        resolveId(source) {
            const match = source.match(/arpc\/(\w+)/);
            if (match) {
                return `\0virtual:arpc-${match[1].toLowerCase()}`;
            }
            return null;
        },
        
        // 加载虚拟模块 - 纯 RPC 类
        load(id) {
            if (!id.startsWith('\0virtual:arpc-')) return null;
            
            const name = id.replace('\0virtual:arpc-', '');
            const className = name.charAt(0).toUpperCase() + name.slice(1);
            
            return `
import { reactive } from 'vue';

// ${className} - 前端 RPC Proxy 类
const __rpc = async (method, properties = {}, params = []) => {
    const res = await fetch('/${name}/' + method, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ properties, params })
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    // 返回结果自动 reactive
    if (Array.isArray(data)) {
        return reactive(data);
    } else if (data && typeof data === 'object') {
        return reactive(data);
    }
    return data;
};

class __${className}Base {
    constructor(data = {}) {
        Object.assign(this, data);
        
        const self = this;
        
        // 用 Proxy 代理实例，任意方法调用都走 RPC
        const proxy = new Proxy(this, {
            get(target, prop) {
                if (prop in target) return target[prop];
                
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
        
        // 返回 reactive 包装的 proxy
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

// 用 Proxy 代理类本身，支持任意静态方法调用
const ${className} = new Proxy(__${className}Base, {
    get(target, prop) {
        if (prop === 'prototype' || prop === 'name' || prop === 'length') {
            return target[prop];
        }
        return (...args) => __rpc(prop, {}, args);
    },
    construct(target, args) {
        return new target(...args);
    }
});

export { ${className} };
`;
        }
    };
}
