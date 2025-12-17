import Base from './Base.js';

// 课程 Active Record 类
// 表名自动从类名推断：Course -> courses
export default class Course extends Base {
    async add1(){
        console.log('add1:',this)
        return await super.add();
    }
}
