import type { Plugin, ResolveIdResult } from 'vite';

// Vite 插件：arpc + 自动水合
// SSR 构建时不替换，保持原始类直接访问数据库
// CSR 客户端构建时替换成 RPC 代理
export default function arpcPlugin(): Plugin {
    return {
        name: 'vite-plugin-arpc',
        enforce: 'pre',
        
        // 拦截 arpc 模块解析
        resolveId(source: string, _importer: string | undefined, options?: { ssr?: boolean }): ResolveIdResult {
            // ws 工具模块
            if (source === 'arpc/ws') {
                return options?.ssr ? '\0virtual:arpc-ws-ssr' : '\0virtual:arpc-ws';
            }
            
            const match = source.match(/arpc\/(\w+)/);
            if (match) {
                // SSR 时返回 stub，CSR 时返回 RPC 代理
                return options?.ssr 
                    ? `\0virtual:arpc-ssr-${match[1]}`
                    : `\0virtual:arpc-${match[1]}`;
            }
            return null;
        },
        
        // 加载虚拟 arpc 模块
        load(id: string, options?: { ssr?: boolean }): string | null {
            // SSR ws stub
            if (id === '\0virtual:arpc-ws-ssr') {
                return `export const connect = () => Promise.resolve(); export const rpc = () => Promise.resolve(); export const onMessage = () => {}; export const close = () => {}; export const isConnected = () => false;`;
            }
            
            // SSR 类 stub
            if (id.startsWith('\0virtual:arpc-ssr-')) {
                const name = id.replace('\0virtual:arpc-ssr-', '');
                const className = name.charAt(0).toUpperCase() + name.slice(1);
                return `export class ${className} { constructor(data = {}) { Object.assign(this, data); } static get() { return []; } static add() { return {}; } static async onMessage() {} async save() { return this; } }`;  
            }
            
            // CSR WebSocket RPC 工具
            if (id === '\0virtual:arpc-ws') {
                return generateWsRpc();
            }
            
            // CSR RPC 类
            if (!id.startsWith('\0virtual:arpc-')) return null;
            
            const name = id.replace('\0virtual:arpc-', '');
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

// 生成 RPC 类代码（完全无感 WS）
function generateRpcClass(name: string, className: string): string {
    return `
import { reactive, ref } from 'vue';

// === WS 连接管理（全局单例） ===
const __wsKey = '__arpc_ws__';
function __getWs() {
    if (typeof window === 'undefined') return { ws: null, ready: false, pending: new Map(), subscribers: new Map() };
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
                    // RPC 响应
                    if (data.__id !== undefined) {
                        const p = state.pending.get(data.__id);
                        state.pending.delete(data.__id);
                        if (data.error) p?.reject(new Error(data.error));
                        else p?.resolve(data.result);
                        return;
                    }
                    // 广播消息 - 分发给订阅者
                    const channel = data.__channel || data.type || 'default';
                    const subs = state.subscribers.get(channel) || [];
                    subs.forEach(cb => cb(data));
                    // 全局订阅者
                    const allSubs = state.subscribers.get('*') || [];
                    allSubs.forEach(cb => cb(data));
                } catch {}
            };
        };
        setTimeout(connect, 0);
    }
    return window[__wsKey];
}

// === RPC 调用 ===
async function __rpc(method, properties = {}, params = []) {
    const state = __getWs();
    
    // WS 可用时优先 WS
    if (state.ready && state.ws?.readyState === WebSocket.OPEN) {
        const id = ++state.reqId;
        return new Promise((resolve, reject) => {
            state.pending.set(id, { resolve, reject });
            setTimeout(() => { if (state.pending.has(id)) { state.pending.delete(id); reject(new Error('超时')); } }, 30000);
            state.ws.send(JSON.stringify({ path: '/${name}/' + method, properties, params, __id: id }));
        });
    }
    
    // HTTP 回退
    const headers = { 'Content-Type': 'application/json' };
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) headers['Authorization'] = 'Bearer ' + token;
    
    const res = await fetch('/${name}/' + method, { method: 'POST', headers, body: JSON.stringify({ properties, params }) });
    if (res.status === 401) { if (typeof window !== 'undefined' && location.pathname !== '/login') { localStorage.removeItem('token'); location.href = '/login'; } throw new Error('未登录'); }
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return Array.isArray(data) ? reactive(data) : (data && typeof data === 'object') ? reactive(data) : data;
}

// === 订阅管理 ===
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

// === 响应式列表（无感接收推送） ===
function __liveList(channel = '${name.toLowerCase()}') {
    const list = reactive([]);
    __subscribe(channel, (data) => {
        if (data.action === 'add' || data.type === 'add') list.push(data.item || data);
        else if (data.action === 'update' && data.item?.id) {
            const idx = list.findIndex(i => i.id === data.item.id);
            if (idx >= 0) Object.assign(list[idx], data.item);
        }
        else if (data.action === 'delete' && data.id) {
            const idx = list.findIndex(i => i.id === data.id);
            if (idx >= 0) list.splice(idx, 1);
        }
        else list.push(data); // 默认追加
    });
    return list;
}

const __dataFields = ['id', 'title', 'description', 'price', 'name', 'email', 'duration', 'lessons', 'createdAt', 'updatedAt', 'message', 'userId', 'content'];

class __${className}Base {
    constructor(data = {}) {
        Object.assign(this, data);
        const self = this;
        const proxy = new Proxy(this, {
            get(target, prop) {
                if (prop in target) return target[prop];
                if (prop === 'toJSON') return () => {
                    const d = {};
                    for (const k in target) if (typeof target[k] !== 'function') d[k] = target[k];
                    return d;
                };
                if (__dataFields.includes(prop)) return undefined;
                return async (...args) => {
                    const result = await __rpc(prop, self.toJSON ? self.toJSON() : self, args);
                    if (result && typeof result === 'object' && !Array.isArray(result)) Object.assign(target, result);
                    return result;
                };
            },
            set(target, prop, value) { target[prop] = value; return true; }
        });
        return reactive(proxy);
    }
}

const ${className} = new Proxy(__${className}Base, {
    get(target, prop) {
        if (prop === 'prototype' || prop === 'name' || prop === 'length') return target[prop];
        // 无感订阅列表
        if (prop === 'list') return (channel) => __liveList(channel || '${name.toLowerCase()}');
        // 订阅消息
        if (prop === 'subscribe') return __subscribe;
        return (...args) => __rpc(prop, {}, args);
    },
    construct(target, args) { return new target(...args); }
});

export { ${className} };
`;
}

// 生成 WebSocket RPC 客户端工具
function generateWsRpc(): string {
    return `
let __ws = null;
let __reqId = 0;
const __pending = new Map();
let __reconnectTimer = null;
let __messageHandler = null;

// 连接 WebSocket
function connect(url) {
    if (__ws && __ws.readyState === WebSocket.OPEN) return Promise.resolve(__ws);
    
    return new Promise((resolve, reject) => {
        const wsUrl = url || (location.protocol === 'https:' ? 'wss:' : 'ws:') + '//' + location.host + '/ws';
        __ws = new WebSocket(wsUrl);
        
        __ws.onopen = () => {
            console.log('[WS] 已连接');
            resolve(__ws);
        };
        
        __ws.onclose = () => {
            console.log('[WS] 已断开');
            __ws = null;
            // 自动重连
            if (!__reconnectTimer) {
                __reconnectTimer = setTimeout(() => {
                    __reconnectTimer = null;
                    connect(url).catch(() => {});
                }, 3000);
            }
        };
        
        __ws.onerror = (e) => {
            console.error('[WS] 错误', e);
            reject(new Error('WebSocket 连接失败'));
        };
        
        __ws.onmessage = (e) => {
            try {
                const data = JSON.parse(e.data);
                
                // RPC 响应（有 __id 字段）
                if (data.__id !== undefined) {
                    const { resolve, reject } = __pending.get(data.__id) || {};
                    __pending.delete(data.__id);
                    if (data.error) {
                        reject?.(new Error(data.error));
                    } else {
                        resolve?.(data.result);
                    }
                    return;
                }
                
                // 广播消息
                __messageHandler?.(data);
            } catch {}
        };
    });
}

// 发送 RPC 请求（await 风格）
async function rpc(path, properties = {}, params = []) {
    await connect();
    
    const id = ++__reqId;
    
    return new Promise((resolve, reject) => {
        __pending.set(id, { resolve, reject });
        
        // 超时处理
        setTimeout(() => {
            if (__pending.has(id)) {
                __pending.delete(id);
                reject(new Error('RPC 超时'));
            }
        }, 30000);
        
        __ws.send(JSON.stringify({ path, properties, params, __id: id }));
    });
}

// 监听广播消息
function onMessage(handler) {
    __messageHandler = handler;
}

// 关闭连接
function close() {
    if (__reconnectTimer) {
        clearTimeout(__reconnectTimer);
        __reconnectTimer = null;
    }
    __ws?.close();
    __ws = null;
}

// 获取连接状态
function isConnected() {
    return __ws && __ws.readyState === WebSocket.OPEN;
}

export { connect, rpc, onMessage, close, isConnected };
`;
}
