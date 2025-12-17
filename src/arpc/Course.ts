import Base from './Base';

// 课程 Active Record 类
// arpc云对象，云端arpc对象继承base，自带增删改查
export class Course extends Base {
    title: string = '';
    description: string = '';
    price: number = 0;
    duration?: string;
    lessons?: number;
    
    constructor(data: Partial<Course> = {}) {
        super(data as Record<string, unknown>);
        if (data.title !== undefined) this.title = data.title;
        if (data.description !== undefined) this.description = data.description;
        if (data.price !== undefined) this.price = data.price;
        if (data.duration !== undefined) this.duration = data.duration;
        if (data.lessons !== undefined) this.lessons = data.lessons;
    }
    
    // 自定义add5 rpc方法
    async add5(): Promise<this> {
        console.log('add5:', this);
        // 假如后端异常，直接抛出
        // 不需要code，data。msg
        throw new Error('这是测试5rpc方法');
        return await super.add();
    }
    
    async add6(): Promise<this> {
        console.log('add6:', this);
        // 假如后端异常，直接抛出
        // 不需要code，data。msg
        throw new Error('这是测试6rpc方法');
        return await super.add();
    }
}
