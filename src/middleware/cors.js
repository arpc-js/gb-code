// 跨域中间件 - 最宽松配置
export function cors() {
    return (req, res, next) => {
        // 允许所有来源
        res.setHeader('Access-Control-Allow-Origin', '*');
        // 允许所有方法
        res.setHeader('Access-Control-Allow-Methods', '*');
        // 允许所有请求头
        res.setHeader('Access-Control-Allow-Headers', '*');
        // 允许携带凭证
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        // 预检请求缓存时间
        res.setHeader('Access-Control-Max-Age', '86400');
        
        // 处理预检请求
        if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            res.end();
            return;
        }
        
        next();
    };
}

export default cors;
