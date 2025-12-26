import { join, extname } from 'path';
import { renderToString } from 'vue/server-renderer';
import { gzipSync, brotliCompressSync } from 'zlib';
import type { App } from 'vue';
import type { Router } from 'vue-router';
import type { Middleware } from './Arpc';

// 压缩缓存 (key: path+encoding, value: compressed buffer)
const compressionCache = new Map<string, { data: Buffer; mtime: number }>();

// 可压缩的 MIME 类型
const compressibleTypes = new Set([
    'text/html', 'text/css', 'text/plain', 'text/xml',
    'application/javascript', 'application/json', 'application/xml',
    'application/wasm',  // WASM 压缩效果好
    'image/svg+xml'
]);

// 压缩工具函数
function compress(data: Buffer | Uint8Array, encoding: 'br' | 'gzip'): Buffer {
    if (encoding === 'br') {
        return brotliCompressSync(data);
    }
    return gzipSync(data);
}

// 获取客户端支持的压缩方式
function getAcceptedEncoding(acceptEncoding: string | null): 'br' | 'gzip' | null {
    if (!acceptEncoding) return null;
    if (acceptEncoding.includes('br')) return 'br';
    if (acceptEncoding.includes('gzip')) return 'gzip';
    return null;
}

// 是否可压缩
function isCompressible(contentType: string): boolean {
    const type = contentType.split(';')[0].trim();
    return compressibleTypes.has(type);
}

// CORS 中间件
export const cors: Middleware = async (ctx, next) => {
    ctx.headers['Access-Control-Allow-Origin'] = '*';
    ctx.headers['Access-Control-Allow-Methods'] = '*';
    ctx.headers['Access-Control-Allow-Headers'] = '*';
    ctx.headers['Access-Control-Allow-Credentials'] = 'true';
    ctx.headers['Access-Control-Max-Age'] = '86400';
    // H.266 解码器 (vvdec.wasm) 需要 SharedArrayBuffer
    ctx.headers['Cross-Origin-Opener-Policy'] = 'same-origin';
    ctx.headers['Cross-Origin-Embedder-Policy'] = 'credentialless';
    
    if (ctx.method === 'OPTIONS') {
        ctx.res = new Response(null, { status: 204, headers: ctx.headers });
        return;
    }
    
    await next();
};

// 全局异常处理中间件
export const errorHandler: Middleware = async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        const err = e as Error;
        console.error('[Error]', err.message, err.stack);
        
        ctx.headers['Content-Type'] = 'application/json';
        ctx.res = new Response(JSON.stringify({
            error: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
        }), { 
            status: 500, 
            headers: ctx.headers 
        });
    }
};

// MIME 类型映射
const mimeTypes: Record<string, string> = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.wasm': 'application/wasm',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
};

// SSR 中间件（懒加载初始化）
export const ssr: Middleware = (() => {
    const clientDir = join(import.meta.dir, '../../dist/client');
    let createApp: () => App;
    let template: string;
    let initialized = false;
    
    const init = async () => {
        if (initialized) return;
        const mod = await import('../../dist/server/main.js') as { createApp: () => App };
        createApp = mod.createApp;
        template = await Bun.file(join(clientDir, 'index.html')).text();
        initialized = true;
        console.log('[SSR] Production mode');
    };
    
    return async (ctx, next) => {
        // 非 GET 跳过（RPC 是 POST）
        if (ctx.method !== 'GET') return await next();
        
        // 静态文件
        const filePath = join(clientDir, ctx.path);
        const file = Bun.file(filePath);
        if (await file.exists()) {
            const ext = extname(filePath);
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            ctx.headers['Content-Type'] = contentType;
            
            // 获取客户端支持的压缩方式
            const acceptEncoding = ctx.req.headers.get('accept-encoding');
            const encoding = getAcceptedEncoding(acceptEncoding);
            
            // 不压缩或不支持压缩
            if (!encoding || !isCompressible(contentType)) {
                ctx.res = new Response(file, { headers: ctx.headers });
                return;
            }
            
            // 检查缓存
            const cacheKey = `${ctx.path}:${encoding}`;
            const fileMtime = file.lastModified;
            const cached = compressionCache.get(cacheKey);
            
            if (cached && cached.mtime === fileMtime) {
                // 缓存命中
                ctx.headers['Content-Encoding'] = encoding;
                ctx.headers['Vary'] = 'Accept-Encoding';
                ctx.res = new Response(cached.data, { headers: ctx.headers });
                return;
            }
            
            // 实时压缩并缓存
            const raw = Buffer.from(await file.arrayBuffer());
            const compressed = compress(raw, encoding);
            compressionCache.set(cacheKey, { data: compressed, mtime: fileMtime });
            
            ctx.headers['Content-Encoding'] = encoding;
            ctx.headers['Vary'] = 'Accept-Encoding';
            ctx.res = new Response(compressed, { headers: ctx.headers });
            return;
        }
        
        // favicon
        if (ctx.path === '/favicon.ico') {
            ctx.res = new Response(null, { status: 404 });
            return;
        }
        
        // 跳过 API 和静态资源
        if (ctx.path.startsWith('/api/') || (extname(ctx.path) && !ctx.path.endsWith('.html'))) {
            return await next();
        }
        
        // 懒加载初始化
        await init();
        
        // SSR 渲染
        const app = createApp();
        const router = app.config.globalProperties.$router as Router;
        
        await router.push(ctx.path);
        await router.isReady();
        
        app.config.errorHandler = (err) => console.error('[SSR] Vue Error:', err);
        
        const appHtml = await renderToString(app);
        const html = template.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`);
        
        ctx.headers['Content-Type'] = 'text/html';
        
        // SSR 页面也压缩
        const acceptEncoding = ctx.req.headers.get('accept-encoding');
        const encoding = getAcceptedEncoding(acceptEncoding);
        
        if (encoding) {
            const compressed = compress(Buffer.from(html), encoding);
            ctx.headers['Content-Encoding'] = encoding;
            ctx.headers['Vary'] = 'Accept-Encoding';
            ctx.res = new Response(compressed, { headers: ctx.headers });
        } else {
            ctx.res = new Response(html, { headers: ctx.headers });
        }
    };
})();
