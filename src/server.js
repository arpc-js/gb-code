import connect from 'connect';
import http from 'node:http';
import { ssr } from './middleware/ssr.js';
import rpc from './middleware/rpc.js';
import cors from './middleware/cors.js';

async function startServer() {
    // 创建 Connect 应用
    const app = connect();
    
    // 跨域中间件（放在最前面）
    app.use(cors());
    
    // RPC 中间件（POST /{class}/{method}）
    app.use(rpc());
    
    // SSR 中间件（放在最后）
    await ssr(app);

    // 创建 HTTP 服务器
    const server = http.createServer(app);

    // 启动 HTTP 服务器
    server.listen(3000, () => {
        console.log('Native Node.js Server with Vite Middlewares: http://localhost:3000');
    });
}

startServer();