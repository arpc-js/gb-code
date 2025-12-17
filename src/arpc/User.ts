import Base from '../core/Base';

// 用户 Active Record 类
// 表名自动从类名推断：User -> users
export class User extends Base {
    name: string = '';
    email: string = '';
    
    constructor(data: Partial<User> = {}) {
        super(data as Record<string, unknown>);
        if (data.name !== undefined) this.name = data.name;
        if (data.email !== undefined) this.email = data.email;
    }
}
