import type { Plugin, ResolveIdResult } from 'vite';
import { resolve } from 'path';

type ArpcMode = 'http' | 'ws';

interface ArpcPluginOptions {
    mode?: ArpcMode;  // 默认 'http'
}

// Vite 插件：arpc
// SSR 构建时解析到后端文件
// CSR 客户端构建时生成 RPC 代理
export default function arpcPlugin(options: ArpcPluginOptions = {}): Plugin {
    const mode: ArpcMode = options.mode || 'http';
    let root = '';
    
    return {
        name: 'vite-plugin-arpc',
        enforce: 'pre',
        
        configResolved(config) {
            root = config.root;
        },
        
        // 拦截 arpc 类导入
        resolveId(source: string, importer: string | undefined, opts?: { ssr?: boolean }): ResolveIdResult {
            // 匹配 ../arpc/Xxx.ts 或 ../arpc/Xxx 格式
            const relativeMatch = source.match(/[\/\\]arpc[\/\\]([\w]+)(?:\.ts)?$/i);
            if (relativeMatch && importer && importer.includes('views')) {
                const name = relativeMatch[1].toLowerCase();
                const className = name.charAt(0).toUpperCase() + name.slice(1);
                
                // SSR: 返回后端文件绝对路径
                if (opts?.ssr) {
                    return resolve(root, 'src/arpc', `${className}.ts`);
                }
                // CSR: 返回虚拟模块
                return `\0arpc-${mode}:${name}`;
            }
            
            // 匹配 arpc/Xxx 格式
            const match = source.match(/^arpc\/([\w]+)$/i);
            if (match) {
                const name = match[1].toLowerCase();
                const className = name.charAt(0).toUpperCase() + name.slice(1);
                
                if (opts?.ssr) {
                    return resolve(root, 'src/arpc', `${className}.ts`);
                }
                return `\0arpc-${mode}:${name}`;
            }
            return null;
        },
        
        // 加载虚拟模块（仅 CSR）
        load(id: string): string | null {
            // HTTP RPC
            if (id.startsWith('\0arpc-http:')) {
                const name = id.slice('\0arpc-http:'.length);
                const className = name.charAt(0).toUpperCase() + name.slice(1);
                return generateHttpClass(name, className);
            }
            
            // WS RPC
            if (id.startsWith('\0arpc-ws:')) {
                const name = id.slice('\0arpc-ws:'.length);
                const className = name.charAt(0).toUpperCase() + name.slice(1);
                return generateWsClass(name, className);
            }
            
            return null;
        },
        
        // 客户端水合注入
        transform(code: string, id: string, opts?: { ssr?: boolean }): { code: string; map: null } | null {
            // 仅 CSR 构建
            if (opts?.ssr) return null;
            // 仅 main.ts
            if (!id.endsWith('main.ts')) return null;
            // 跳过 node_modules
            if (id.includes('node_modules')) return null;
            // 已经有 mount 则跳过
            if (code.includes('.mount(')) return null;
            
            const hydrateCode = `
// 客户端水合 (arpc 插件自动注入)
if (typeof window !== 'undefined') {
    const app = createApp();
    const router = app.config.globalProperties.$router;
    router.isReady().then(() => app.mount('#app'));
}
`;
            return { code: code + hydrateCode, map: null };
        }
    };
}

// HTTP RPC 类
function generateHttpClass(name: string, className: string): string {
    return `
import { reactive } from 'vue';

async function __rpc(method, properties = {}, params = []) {
    const headers = { 'Content-Type': 'application/json' };
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) headers['Authorization'] = 'Bearer ' + token;
    
    const res = await fetch('/${name}/' + method, { 
        method: 'POST', 
        headers, 
        body: JSON.stringify({ properties, params }) 
    });
    if (res.status === 401) { 
        if (typeof window !== 'undefined' && location.pathname !== '/login') { 
            localStorage.removeItem('token'); 
            location.href = '/login'; 
        } 
        throw new Error('未登录'); 
    }
    if (!res.ok) throw new Error(await res.text());
    if (res.status === 204) return {};
    return await res.json();
}

class __${className}Base {
    constructor(data = {}) {
        Object.assign(this, data);
    }
    
    async save() {
        const data = {};
        for (const k in this) if (typeof this[k] !== 'function') data[k] = this[k];
        const result = await __rpc('save', data, []);
        if (result && typeof result === 'object') Object.assign(this, Array.isArray(result) ? result[0] : result);
        return this;
    }
    
    async del() {
        if (this.id) await __rpc('del', { id: this.id }, []);
        return this;
    }
    
    async reload() {
        if (this.id) {
            const list = await __rpc('get', {}, [{ id: this.id }]);
            if (list?.length) Object.assign(this, list[0]);
        }
        return this;
    }
    
    toJSON() {
        const d = {};
        for (const k in this) if (typeof this[k] !== 'function') d[k] = this[k];
        return d;
    }
}

function __wrap(data) {
    return reactive(new __${className}Base(data));
}

const ${className} = new Proxy(__${className}Base, {
    get(target, prop) {
        if (prop === 'prototype' || prop === 'name' || prop === 'length') return target[prop];
        if (prop === 'get') return async (...args) => {
            const result = await __rpc('get', {}, args);
            return reactive(Array.isArray(result) ? result.map(__wrap) : result);
        };
        if (prop === 'save') return async (data) => {
            const result = await __rpc('save', {}, [data]);
            return reactive(Array.isArray(result) ? result.map(__wrap) : result);
        };
        if (prop === 'del') return async (cond) => __rpc('del', {}, [cond]);
        return (...args) => __rpc(String(prop), {}, args);
    },
    construct(target, args) { return __wrap(args[0] || {}); }
});

export { ${className} };
`;
}

// WS RPC 类
function generateWsClass(name: string, className: string): string {
    return `
import { reactive } from 'vue';

const __wsKey = '__arpc_ws__';
function __getWs() {
    if (typeof window === 'undefined') return { ws: null, ready: false, pending: new Map(), subscribers: new Map(), reqId: 0 };
    if (!window[__wsKey]) {
        const state = { ws: null, ready: false, pending: new Map(), reqId: 0, subscribers: new Map() };
        window[__wsKey] = state;
        
        const connect = () => {
            if (state.ws) return;
            const wsUrl = (location.protocol === 'https:' ? 'wss:' : 'ws:') + '//' + location.host + '/ws';
            state.ws = new WebSocket(wsUrl);
            state.ws.onopen = () => { state.ready = true; };
            state.ws.onclose = () => { state.ready = false; state.ws = null; setTimeout(connect, 3000); };
            state.ws.onmessage = (e) => {
                try {
                    const data = JSON.parse(e.data);
                    if (data.__id !== undefined) {
                        const p = state.pending.get(data.__id);
                        state.pending.delete(data.__id);
                        if (data.error) p?.reject(new Error(data.error));
                        else p?.resolve(data.result ?? {});
                        return;
                    }
                    const channel = data.__channel || data.type || 'default';
                    (state.subscribers.get(channel) || []).forEach(cb => cb(data));
                    (state.subscribers.get('*') || []).forEach(cb => cb(data));
                } catch {}
            };
        };
        setTimeout(connect, 0);
    }
    return window[__wsKey];
}

function __rpc(method, properties = {}, params = []) {
    const state = __getWs();
    if (!state.ready || !state.ws) {
        return Promise.reject(new Error('WebSocket 未连接'));
    }
    const id = ++state.reqId;
    return new Promise((resolve, reject) => {
        state.pending.set(id, { resolve, reject });
        setTimeout(() => { if (state.pending.has(id)) { state.pending.delete(id); reject(new Error('超时')); } }, 30000);
        state.ws.send(JSON.stringify({ path: '/${name}/' + method, properties, params, __id: id }));
    });
}

function __subscribe(channel, callback) {
    const state = __getWs();
    if (!state.subscribers.has(channel)) state.subscribers.set(channel, []);
    state.subscribers.get(channel).push(callback);
    return () => {
        const subs = state.subscribers.get(channel);
        const idx = subs?.indexOf(callback);
        if (idx >= 0) subs.splice(idx, 1);
    };
}

class __${className}Base {
    constructor(data = {}) {
        Object.assign(this, data);
    }
    
    async save() {
        const data = {};
        for (const k in this) if (typeof this[k] !== 'function') data[k] = this[k];
        const result = await __rpc('save', data, []);
        if (result && typeof result === 'object') Object.assign(this, Array.isArray(result) ? result[0] : result);
        return this;
    }
    
    async del() {
        if (this.id) await __rpc('del', { id: this.id }, []);
        return this;
    }
    
    async reload() {
        if (this.id) {
            const list = await __rpc('get', {}, [{ id: this.id }]);
            if (list?.length) Object.assign(this, list[0]);
        }
        return this;
    }
    
    toJSON() {
        const d = {};
        for (const k in this) if (typeof this[k] !== 'function') d[k] = this[k];
        return d;
    }
}

function __wrap(data) {
    return reactive(new __${className}Base(data));
}

const ${className} = new Proxy(__${className}Base, {
    get(target, prop) {
        if (prop === 'prototype' || prop === 'name' || prop === 'length') return target[prop];
        if (prop === 'subscribe') return __subscribe;
        if (prop === 'get') return async (...args) => {
            const result = await __rpc('get', {}, args);
            return reactive(Array.isArray(result) ? result.map(__wrap) : result);
        };
        if (prop === 'save') return async (data) => {
            const result = await __rpc('save', {}, [data]);
            return reactive(Array.isArray(result) ? result.map(__wrap) : result);
        };
        if (prop === 'del') return async (cond) => __rpc('del', {}, [cond]);
        return (...args) => __rpc(String(prop), {}, args);
    },
    construct(target, args) { return __wrap(args[0] || {}); }
});

export { ${className} };
`;
}
