// Vite 插件：arpc + 自动水合
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
        
        // 加载虚拟 arpc 模块
        load(id) {
            if (!id.startsWith('\0virtual:arpc-')) return null;
            
            const name = id.replace('\0virtual:arpc-', '');
            const className = name.charAt(0).toUpperCase() + name.slice(1);
            
            return generateRpcClass(name, className);
        },
        
        // 自动注入客户端水合代码
        transform(code, id) {
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

// 生成 RPC 类代码
function generateRpcClass(name, className) {
    return `
import { reactive } from 'vue';

const __rpc = async (method, properties = {}, params = []) => {
    const res = await fetch('/${name}/' + method, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ properties, params })
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    if (Array.isArray(data)) return reactive(data);
    if (data && typeof data === 'object') return reactive(data);
    return data;
};

class __${className}Base {
    constructor(data = {}) {
        Object.assign(this, data);
        const self = this;
        
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
