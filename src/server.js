import { handleCors } from './middleware/cors.js';
import { handleRpc } from './middleware/rpc.js';
import { createSsrHandler } from './middleware/ssr.js';

async function startServer() {
    // 创建 SSR 处理器
    const ssrHandler = await createSsrHandler();

    // 创建 Bun HTTP 服务器
    Bun.serve({
        port: 3000,
        async fetch(req) {
            // 1. CORS 处理
            const corsResponse = handleCors(req);
            if (corsResponse) return corsResponse;

            // 2. RPC 处理
            const rpcResponse = await handleRpc(req);
            if (rpcResponse) return rpcResponse;

            // 3. SSR 处理
            return await ssrHandler(req);
        }
    });

    console.log('Bun.js Server with SSR: http://localhost:3000');
}

startServer();