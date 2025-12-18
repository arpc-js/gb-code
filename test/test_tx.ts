import Base, { tx, sql } from '../src/core/Base';
// 课程类
class Course extends Base {
    @tx
    static async testRollback() {
        await this.add({ title: '事务测试课程', price: 998 });
        //throw new Error('模拟异常');
        await this.add({ title: '事务测试课程', price: 999 });
    }
}

try {
    await Course.testRollback();
} catch (e) {
    console.log('捕获异常:', (e as Error).message);
}

