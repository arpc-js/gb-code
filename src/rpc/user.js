// 用户 RPC 类
export default class User {
    constructor() {
        this.id = null;
        this.name = null;
    }
    
    async get() {
        return { id: this.id, name: this.name || '默认用户' };
    }
    
    async list() {
        return [
            { id: 1, name: '张三' },
            { id: 2, name: '李四' }
        ];
    }
    
    async create() {
        return { id: Date.now(), name: this.name, created: true };
    }
}
