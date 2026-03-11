import Base from '../core/Base';
import { jwt } from '../middleware/jwt';
import {ctx} from "../core/Arpc.ts";

// JWT 密钥（生产环境应从环境变量读取）
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key-change-in-production';

// 用户 Active Record 类
// 表名自动从类名推断：User -> users
export class User extends Base {
    name: string = '';
    email: string = '';
    password: string = '';
    
    constructor(data: Partial<User> = {}) {
        super(data as Record<string, unknown>);
        if (data.name !== undefined) this.name = data.name;
        if (data.email !== undefined) this.email = data.email;
        if (data.password !== undefined) this.password = data.password;
    }
    
    // 登录接口
    static async login(email: string, password: string): Promise<{ token: string; user: Partial<User> }> {
        // 查找用户
        ctx.info('登录')
        const users = await this.get({ email }, 'id,name,email,password');
        const user = users[0] as User | undefined;
        
        if (!user) {
            throw new Error('用户不存在');
        }
        
        // 验证密码（生产环境应使用 bcrypt 等）
        if (user.password !== password) {
            throw new Error('密码错误');
        }
        
        // 签发 token
        const token = await jwt.sign(
            { userId: user.id, email: user.email, name: user.name },
            JWT_SECRET,
            '7d'  // 7天过期
        );
        
        // 返回（不返回密码）
        return {
            token,
            user: { id: user.id, name: user.name, email: user.email }
        };
    }
    
    // 注册接口
    static async register(name: string, email: string, password: string): Promise<{ token: string; user: Partial<User> }> {
        // 检查邮箱是否已存在
        const existing = await this.get({ email }, 'id');
        if (existing.length > 0) {
            throw new Error('邮箱已被注册');
        }
        
        // 创建用户
        const user = new User({ name, email, password });
        await user.save();
        
        // 签发 token
        const token = await jwt.sign(
            { userId: user.id, email: user.email, name: user.name },
            JWT_SECRET,
            '7d'
        );
        
        return {
            token,
            user: { id: user.id, name: user.name, email: user.email }
        };
    }
    
    // 获取当前用户信息（需要登录）
    static async getProfile(): Promise<Partial<User> | null> {
        // 通过 useCtx 获取当前用户 ID
        const { useCtx } = await import('../core/Arpc');
        const ctx = useCtx();
        
        if (!ctx.userId) {
            throw new Error('未登录');
        }
        
        const users = await this.get({ id: ctx.userId }, 'id,name,email');
        return users[0] as Partial<User> || null;
    }
}
