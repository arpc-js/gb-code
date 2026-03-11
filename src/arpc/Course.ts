import Base from '../core/Base';
import {ctx} from "../core/Arpc.ts";

// 课程 Active Record 类
// arpc云对象，云端 arpc 对象继承 base，自带增删改查
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
    static async get1(): Promise<any> {
        // 添加或更新课程
        ctx.info(ctx.get('userId'),'1111')
        throw new Error('1111');
    }
}
