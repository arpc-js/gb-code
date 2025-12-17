// 跨域处理 - Bun.js 版本
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400'
};

// 处理 CORS——返回 Response 则表示已处理，返回 null 则继续
export function handleCors(req) {
    // 处理预检请求
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: corsHeaders
        });
    }
    return null;
}

// 获取 CORS 头（用于其他响应）
export function getCorsHeaders() {
    return corsHeaders;
}

export default handleCors;
