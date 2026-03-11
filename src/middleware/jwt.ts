import type { Context, Middleware } from '../core/Arpc';
import * as jose from 'jose';

// JWT 配置
export interface JwtOptions {
    secret: string;
    exclude?: string[];  // 排除路径，如 ['/User/login', '/User/register']
    getToken?: (ctx: Context) => string | null;  // 自定义获取 token
    skipNonRpc?: boolean;  // 跳过非 RPC 请求（GET 请求等页面路由）
}

// 将 secret 转换为密钥
function getSecretKey(secret: string): Uint8Array {
    return new TextEncoder().encode(secret);
}

// JWT 工具（基于 jose）
export const jwt = {
    // 签发 token
    async sign(payload: Record<string, unknown>, secret: string, expiresIn = '24h'): Promise<string> {
        const key = getSecretKey(secret);
        return await new jose.SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime(expiresIn)
            .sign(key);
    },
    
    // 验证 token
    async verify(token: string, secret: string): Promise<Record<string, unknown> | null> {
        try {
            const key = getSecretKey(secret);
            const { payload } = await jose.jwtVerify(token, key);
            return payload as Record<string, unknown>;
        } catch {
            return null;
        }
    }
};

// JWT 中间件
export function jwtAuth(options: JwtOptions): Middleware {
    const { secret, exclude = [], getToken, skipNonRpc = false } = options;
    
    return async (ctx: Context, next: () => Promise<void>) => {
        // 跳过非 RPC 请求（GET 请求等页面路由）
        if (skipNonRpc && ctx.method !== 'POST') {
            return next();
        }
        
        // 检查排除路径（大小写不敏感）
        const pathLower = ctx.path.toLowerCase();
        if (exclude.some(p => pathLower.startsWith(p.toLowerCase()))) {
            return next();
        }
        
        // 获取 token
        let token: string | null = null;
        
        if (getToken) {
            token = getToken(ctx);
        } else {
            // 默认从 Authorization 头获取
            const auth = ctx.req.headers.get('Authorization');
            if (auth?.startsWith('Bearer ')) {
                token = auth.slice(7);
            }
        }
        
        if (!token) {
            ctx.info('JWT: No token provided, path:', ctx.path);
            ctx.json({ error: 'Unauthorized', message: 'No token provided' }, 401);
            return;
        }
        
        // 验证 token
        const payload = await jwt.verify(token, secret);
        
        if (!payload) {
            ctx.info('JWT: Invalid or expired token');
            ctx.json({ error: 'Unauthorized', message: 'Invalid or expired token' }, 401);
            return;
        }
        
        // 保存用户信息到 ctx
        ctx.userId = payload.userId as number;
        ctx.user = payload;
        ctx.info('JWT: Authenticated user', ctx.userId);
        
        await next();
    };
}

export default jwtAuth;
