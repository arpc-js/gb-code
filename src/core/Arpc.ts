import { join } from 'path';

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
    // 响应头
    headers: Record<string, string>;
    // 快捷方法
    json(data: unknown, status?: number): void;
    text(data: string, status?: number): void;
    html(data: string, status?: number): void;
}

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
            
            return new Response(JSON.stringify(result), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (e) {
            console.error('[RPC Error]', e);
            return new Response((e as Error).message, { status: 500 });
        }
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
        
        const ctx: Context = {
            req,
            url,
            path: url.pathname,
            method: req.method,
            params: {},
            query,
            state: {},
            headers,
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
                return rpcRes;
            }
            
            // 404
            return new Response('Not Found', { status: 404, headers: ctx.headers });
        } catch (e) {
            console.error('[Arpc Error]', e);
            return new Response((e as Error).message, { status: 500, headers: ctx.headers });
        }
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
export { Base, ArpcServer };
