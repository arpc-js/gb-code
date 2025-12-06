import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createBrotliCompress, brotliCompressSync, constants } from 'node:zlib';
import { pipeline } from 'node:stream';
import { renderToString } from 'vue/server-renderer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(__dirname, '../../dist/client');

// 检查客户端是否支持 brotli
function acceptsBrotli(req) {
    const encoding = req.headers['accept-encoding'] || '';
    return encoding.includes('br');
}

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

// 静态文件服务中间件（支持 brotli）
function staticMiddleware(req, res, next) {
    const filePath = path.join(clientDir, req.url);
    
    // 检查文件是否存在
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        
        res.setHeader('Content-Type', contentType);
        res.statusCode = 200;
        
        // 对文本文件启用 brotli 压缩
        const compressible = ['.js', '.css', '.html', '.json', '.svg'].includes(ext);
        if (compressible && acceptsBrotli(req)) {
            res.setHeader('Content-Encoding', 'br');
            pipeline(fs.createReadStream(filePath), createBrotliCompress(), res, () => {});
        } else {
            fs.createReadStream(filePath).pipe(res);
        }
    } else {
        next();
    }
}

// 读取模板
function getTemplate() {
    return fs.readFileSync(path.resolve(__dirname, '../../dist/client/index.html'), 'utf-8');
}

// SSR 中间件
function ssrMiddleware(render, getSSRData) {
    const template = getTemplate();
    
    return async (req, res, next) => {
        const url = req.url;

        if (req.method !== 'GET') return next();
        if (url === '/favicon.ico') return next();
        if (url.startsWith('/api/') || (path.extname(url) && !url.endsWith('.html'))) return next();

        try {
            const { app, router } = render();
            
            await router.push(url);
            await router.isReady();
            
            // 添加错误处理器捕获渲染过程中的错误
            app.config.errorHandler = (err) => {
                console.error('[SSR] Vue Error:', err);
            };
            
            const appHtml = await renderToString(app);
            console.log('[SSR] Rendered HTML length:', appHtml.length);
            const ssrData = getSSRData();
            console.log('[SSR] SSR Data:', ssrData);

            let html = template.replace(`<div id="app"></div>`, `<div id="app">${appHtml}</div>`);
            const ssrDataScript = `<script>window.__SSR_DATA__ = ${JSON.stringify(ssrData)};</script>`;
            html = html.replace('</head>', `${ssrDataScript}</head>`);

            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            
            // HTML 压缩（brotli）
            if (acceptsBrotli(req)) {
                res.setHeader('Content-Encoding', 'br');
                res.end(brotliCompressSync(Buffer.from(html)));
            } else {
                res.end(html);
            }
        } catch (e) {
            console.error('SSR Error:', e);
            next(e);
        }
    };
}

// 封装函数：创建 SSR 中间件
export async function ssr(app) {
    const { createApp } = await import('../../dist/server/main.js');
    const { getSSRData } = await import('../rpc/index.js');  // 直接从源码导入
    
    // 封装 render 函数
    const render = () => {
        return createApp();  // createApp 已返回 { app, router }
    };
    
    // 静态资源服务
    app.use(staticMiddleware);
    app.use(ssrMiddleware(render, getSSRData));
    
    console.log('[SSR] Production mode');
}

export default ssr;
