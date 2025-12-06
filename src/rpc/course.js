// 课程 RPC 类
export default class Course {
    constructor() {
        this.id = null;
        this.title = null;
        this.description = null;
        this.price = null;
    }
    
    // 获取课程列表
    async list() {
        return [
            { id: 1, title: 'Vue3 入门到精通', description: 'Vue3 全面教程', price: 99 },
            { id: 2, title: 'React 实战开发', description: 'React 项目实战', price: 129 },
            { id: 3, title: 'Node.js 后端开发', description: 'Node.js 服务端编程', price: 149 },
            { id: 4, title: 'TypeScript 高级教程', description: 'TS 类型体操', price: 79 },
        ];
    }
    
    // 获取课程详情
    async get() {
        const courses = {
            1: { id: 1, title: 'Vue3 入门到精通', description: 'Vue3 全面教程，从基础到高级', price: 99, duration: '20小时', lessons: 45 },
            2: { id: 2, title: 'React 实战开发', description: 'React 项目实战，掌握核心技能', price: 129, duration: '25小时', lessons: 52 },
            3: { id: 3, title: 'Node.js 后端开发', description: 'Node.js 服务端编程，构建高性能后端', price: 149, duration: '30小时', lessons: 60 },
            4: { id: 4, title: 'TypeScript 高级教程', description: 'TS 类型体操，进阶必备', price: 79, duration: '15小时', lessons: 35 },
        };
        return courses[this.id] || null;
    }
    
    // 新增课程
    async create() {
        return { 
            id: Date.now(), 
            title: this.title, 
            description: this.description, 
            price: this.price,
            created: true 
        };
    }
}
