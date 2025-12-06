import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { gzipSync, brotliCompressSync } from 'node:zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 检查客户端支持的压缩格式（br > gzip）
function getAcceptedEncoding(req) {
    const encoding = req.headers['accept-encoding'] || '';
    if (encoding.includes('br')) return 'br';
    if (encoding.includes('gzip')) return 'gzip';
    return null;
}

// 类缓存
const classCache = new Map();

// 动态加载类
async function loadClass(className) {
    if (classCache.has(className)) {
        return classCache.get(className);
    }
    
    const classPath = path.resolve(__dirname, `../rpc/${className}.js`);
    const classUrl = pathToFileURL(classPath).href;
    const module = await import(classUrl);
    const RpcClass = module.default;
    classCache.set(className, RpcClass);
    return RpcClass;
}

// 解析请求体
function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (e) {
                reject(new Error('Invalid JSON'));
            }
        });
        req.on('error', reject);
    });
}

// RPC 中间件 - POST /{class}/{method} 风格
export function rpc() {
    return async (req, res, next) => {
        // 只处理 POST 请求
        if (req.method !== 'POST') {
            return next();
        }
        
        // 解析路径: /course/list -> ['course', 'list']
        const pathParts = req.url.slice(1).split('/');
        if (pathParts.length !== 2) {
            return next();
        }
        
        const [className, methodName] = pathParts;
        
        // 跳过非 RPC 请求
        if (className.startsWith('src') || className.startsWith('@') || className.includes('.')) {
            return next();
        }
        
        try {
            // 解析请求体（直接作为属性）
            const properties = await parseBody(req);
            
            // 加载类
            const RpcClass = await loadClass(className);
            
            // 创建实例
            const instance = new RpcClass();
            
            // 设置属性
            Object.assign(instance, properties);
            
            // 检查方法是否存在
            if (typeof instance[methodName] !== 'function') {
                res.statusCode = 500;
                res.end(`Method ${methodName} not found`);
                return;
            }
            
            // 调用方法
            const result = await instance[methodName]();
            
            // 返回结果（br > gzip）
            const json = JSON.stringify(result);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            
            const encoding = getAcceptedEncoding(req);
            if (encoding === 'br') {
                res.setHeader('Content-Encoding', 'br');
                res.end(brotliCompressSync(json));
            } else if (encoding === 'gzip') {
                res.setHeader('Content-Encoding', 'gzip');
                res.end(gzipSync(json));
            } else {
                res.end(json);
            }
        } catch (e) {
            res.statusCode = 500;
            res.end(e.message);
        }
    };
}

export default rpc;