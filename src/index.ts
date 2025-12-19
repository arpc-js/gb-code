import Arpc from './core/Arpc';
import {errorHandler, ssr } from './core/middlewares';
import { jwtAuth } from './middleware/jwt';

// JWT 密钥（生产环境应从环境变量读取）
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key-change-in-production';

Arpc()
    .use(errorHandler)
    // JWT 鉴权中间件
    .use(jwtAuth({
        secret: JWT_SECRET,
        exclude: ['/User/login', '/course/'],  // 排除课程接口
        skipNonRpc: true  // 跳过 GET 请求（页面路由）
    }))
    .use(ssr)
    .listen(3000);
