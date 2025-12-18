import { join } from 'path';
import { AsyncLocalStorage } from 'async_hooks';

// 生成 traceId
function genTraceId(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// 格式化时间
function formatTime(): string {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

// 中间件上下文
export interface Context {
    req: Request;
    res?: Response;
    url: URL;
    path: string;
    method: string;
    params: Record<string, string>;
    query: Record<string, string>;
    body?: unknown;
    state: Record<string, unknown>;
    headers: Record<string, string>;
    
    // 追踪 & 日志
    traceId: string;
    startTime: number;
    info: (...args: unknown[]) => void;
    err: (...args: unknown[]) => void;
    
    // 用户信息（JWT 鉴权后填充）
    userId?: number;
    user?: Record<string, unknown>;
    
    // 快捷方法
    json(data: unknown, status?: number): void;
    text(data: string, status?: number): void;
    html(data: string, status?: number): void;
}

// AsyncLocalStorage 存储上下文
const ctxStorage = new AsyncLocalStorage<Context>();

// 获取当前上下文（在 RPC 方法中使用）
function useCtx(): Context {
    const ctx = ctxStorage.getStore();
    if (!ctx) throw new Error('useCtx must be called within a request context');
    return ctx;
}

// 全局 ctx 代理（更简洁的访问方式）
const ctx = new Proxy({} as Context & { get: (key: string) => unknown }, {
    get(_target, prop: string) {
        const store = ctxStorage.getStore();
        if (!store) throw new Error('ctx must be accessed within a request context');
        
        // ctx.get('userId') 等便捷方法
        if (prop === 'get') {
            return (key: string) => {
                if (key === 'userId') return store.userId;
                if (key === 'user') return store.user;
                if (key === 'traceId') return store.traceId;
                return store.state[key];
            };
        }
        
        return (store as any)[prop];
    },
    set(_target, prop: string, value: unknown) {
        const store = ctxStorage.getStore();
        if (!store) throw new Error('ctx must be accessed within a request context');
        (store as any)[prop] = value;
        return true;
    }
});

// 中间件类型
export type Middleware = (ctx: Context, next: () => Promise<void>) => Promise<void> | void;

// 路由中间件
interface RouteMiddleware {
    path?: string;
    fn: Middleware;
}

// Active Record 基类导入
import Base from './Base';

// 类缓存
const classCache = new Map<string, typeof Base>();

// Arpc 框架
class ArpcServer {
    private middlewares: RouteMiddleware[] = [];
    private arpcDir: string;
    
    constructor(arpcDir: string) {
        this.arpcDir = arpcDir;
    }
    
    // 注册中间件（支持全局和路径）
    use(pathOrMiddleware: string | Middleware, middleware?: Middleware): this {
        if (typeof pathOrMiddleware === 'string') {
            this.middlewares.push({ path: pathOrMiddleware, fn: middleware! });
        } else {
            this.middlewares.push({ fn: pathOrMiddleware });
        }
        return this;
    }
    
    // 动态加载 arpc 类
    private async loadClass(className: string): Promise<typeof Base> {
        const name = className.charAt(0).toUpperCase() + className.slice(1);
        if (classCache.has(name)) return classCache.get(name)!;
        
        const classPath = join(this.arpcDir, `${name}.ts`);
        const module = await import(classPath);
        const ARClass = module[name] as typeof Base;
        classCache.set(name, ARClass);
        return ARClass;
    }
    
    // RPC 处理
    private async handleRpc(ctx: Context): Promise<Response | null> {
        if (ctx.method !== 'POST') return null;
        
        const parts = ctx.path.slice(1).split('/');
        if (parts.length !== 2) return null;
        
        const [className, methodName] = parts;
        if (className.startsWith('src') || className.startsWith('@') || className.includes('.')) {
            return null;
        }
        
        try {
            const body = await ctx.req.json().catch(() => ({})) as { properties?: Record<string, unknown>; params?: unknown[] };
            const { properties = {}, params = [] } = body;
            
            const ARClass = await this.loadClass(className);
            let result: unknown;
            
            if (Object.keys(properties).length > 0) {
                const instance = new ARClass(properties) as Base & Record<string, unknown>;
                if (typeof instance[methodName] !== 'function') {
                    return new Response(`Method ${methodName} not found`, { status: 404 });
                }
                result = (instance[methodName] as (...args: unknown[]) => unknown)(...params);
            } else if (typeof (ARClass as unknown as Record<string, unknown>)[methodName] === 'function') {
                result = ((ARClass as unknown as Record<string, unknown>)[methodName] as (...args: unknown[]) => unknown)(...params);
            } else {
                return new Response(`Method ${methodName} not found`, { status: 404 });
            }
            
            if (result instanceof Promise) result = await result;
            
            // 根据返回值类型处理响应
            return this.formatResponse(result, ctx);
        } catch (e) {
            ctx.err('RPC Error:', (e as Error).message);
            return new Response(JSON.stringify({ error: (e as Error).message }), { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
    
    // 格式化响应（支持多种返回类型）
    private formatResponse(result: unknown, ctx: Context): Response {
        // 1. Response 对象：直接返回
        if (result instanceof Response) {
            return result;
        }
        
        // 2. null/undefined：返回 204 No Content
        if (result === null || result === undefined) {
            return new Response(null, { status: 204 });
        }
        
        // 3. 字符串：返回 text/plain
        if (typeof result === 'string') {
            return new Response(result, {
                status: 200,
                headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            });
        }
        
        // 4. Buffer/Uint8Array：返回二进制
        if (result instanceof Uint8Array || result instanceof ArrayBuffer) {
            return new Response(result, {
                status: 200,
                headers: { 'Content-Type': 'application/octet-stream' }
            });
        }
        
        // 5. 对象/数组：返回 JSON
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    
    // 执行中间件链
    private async compose(ctx: Context, middlewares: RouteMiddleware[]): Promise<void> {
        let index = -1;
        
        const dispatch = async (i: number): Promise<void> => {
            if (i <= index) throw new Error('next() called multiple times');
            index = i;
            
            if (i >= middlewares.length) return;
            
            const { path, fn } = middlewares[i];
            
            // 路径匹配
            if (path && !ctx.path.startsWith(path)) {
                return dispatch(i + 1);
            }
            
            await fn(ctx, () => dispatch(i + 1));
        };
        
        await dispatch(0);
    }
    
    // 创建上下文
    private createContext(req: Request): Context {
        const url = new URL(req.url);
        const query: Record<string, string> = {};
        url.searchParams.forEach((v, k) => query[k] = v);
        
        const headers: Record<string, string> = {};
        const traceId = genTraceId();
        const startTime = Date.now();
        
        const ctx: Context = {
            req,
            url,
            path: url.pathname,
            method: req.method,
            params: {},
            query,
            state: {},
            headers,
            traceId,
            startTime,
            // 带追踪的日志
            info: (...args: unknown[]) => {
                console.log(`[${formatTime()}] [${traceId}]`, ...args);
            },
            err: (...args: unknown[]) => {
                console.error(`[${formatTime()}] [${traceId}]`, ...args);
            },
            json(data: unknown, status = 200) {
                ctx.headers['Content-Type'] = 'application/json';
                ctx.res = new Response(JSON.stringify(data), { status, headers: ctx.headers });
            },
            text(data: string, status = 200) {
                ctx.headers['Content-Type'] = 'text/plain';
                ctx.res = new Response(data, { status, headers: ctx.headers });
            },
            html(data: string, status = 200) {
                ctx.headers['Content-Type'] = 'text/html';
                ctx.res = new Response(data, { status, headers: ctx.headers });
            }
        };
        
        return ctx;
    }
    
    // 处理请求
    private async handleRequest(req: Request): Promise<Response> {
        const ctx = this.createContext(req);
        
        // 使用 AsyncLocalStorage 包裹整个请求处理
        return ctxStorage.run(ctx, async () => {
            try {
                // 执行中间件链
                await this.compose(ctx, this.middlewares);
                
                // 如果中间件已设置响应
                if (ctx.res) return ctx.res;
                
                // RPC 处理
                const rpcRes = await this.handleRpc(ctx);
                if (rpcRes) {
                    // 合并头
                    Object.entries(ctx.headers).forEach(([k, v]) => rpcRes.headers.set(k, v));
                    // 日志
                    ctx.info(`${ctx.method} ${ctx.path} ${rpcRes.status} ${Date.now() - ctx.startTime}ms`);
                    return rpcRes;
                }
                
                // 404
                return new Response('Not Found', { status: 404, headers: ctx.headers });
            } catch (e) {
                ctx.err('Error:', (e as Error).message);
                return new Response((e as Error).message, { status: 500, headers: ctx.headers });
            }
        });
    }
    
    // 启动服务
    listen(port: number, callback?: () => void): this {
        Bun.serve({
            port,
            fetch: (req) => this.handleRequest(req)
        });
        
        callback?.() || console.log(`Arpc server running at http://localhost:${port}`);
        return this;
    }
}

// 工厂函数
function Arpc(dir: string='arpc'): ArpcServer {
    // 自动拼接路径
    const arpcDir = dir.startsWith('/') ? dir : join(import.meta.dir, '..', dir);
    return new ArpcServer(arpcDir);
}

export default Arpc;
export { Base, ArpcServer, useCtx, ctx };
