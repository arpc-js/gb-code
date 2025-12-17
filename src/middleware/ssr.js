import { join, extname } from 'path';
import { renderToString } from 'vue/server-renderer';
import { getCorsHeaders } from './cors.js';

const clientDir = join(import.meta.dir, '../../dist/client');

// MIME 类型映射
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
};

// 读取模板
function getTemplate() {
    return Bun.file(join(clientDir, 'index.html')).text();
}

// 创建 SSR 处理器
export async function createSsrHandler() {
    const { createApp } = await import('../../dist/server/main.js');
    const template = await getTemplate();
    
    console.log('[SSR] Production mode');
    
    return async (req) => {
        const url = new URL(req.url);
        const pathname = url.pathname;
        
        // 1. 尝试提供静态文件
        const filePath = join(clientDir, pathname);
        const file = Bun.file(filePath);
        
        if (await file.exists()) {
            const ext = extname(filePath);
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            
            return new Response(file, {
                headers: {
                    'Content-Type': contentType,
                    ...getCorsHeaders()
                }
            });
        }
        
        // 2. SSR 渲染
        if (req.method !== 'GET') {
            return new Response('Method Not Allowed', { status: 405 });
        }
        
        if (pathname === '/favicon.ico') {
            return new Response(null, { status: 404 });
        }
        
        // 跳过 API 请求和静态资源
        if (pathname.startsWith('/api/') || (extname(pathname) && !pathname.endsWith('.html'))) {
            return new Response('Not Found', { status: 404 });
        }
        
        try {
            const { app, router } = createApp();
            
            await router.push(pathname);
            await router.isReady();
            
            app.config.errorHandler = (err) => {
                console.error('[SSR] Vue Error:', err);
            };
            
            const appHtml = await renderToString(app);
            
            let html = template.replace(`<div id="app"></div>`, `<div id="app">${appHtml}</div>`);
            
            return new Response(html, {
                headers: {
                    'Content-Type': 'text/html',
                    ...getCorsHeaders()
                }
            });
        } catch (e) {
            console.error('SSR Error:', e);
            return new Response(`SSR Error: ${e.message}`, { status: 500 });
        }
    };
}

export default createSsrHandler;
