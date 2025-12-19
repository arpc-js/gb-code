import { expect, test, describe } from 'bun:test';
import Base from '../src/core/Base';

// 课程类
class Course extends Base {
    declare id?: number;
    declare title: string;
    declare price: number;
    declare description?: string;
}

describe('Course CRUD 测试', () => {
    
    // ========== 新增测试 ==========
    
    test('实例 save() 新增单条', async () => {
        const course = new Course({ title: 'Vue3 入门', price: 99 });
        await course.save();
        
        expect(course.id).toBeDefined();
        expect(course.title).toBe('Vue3 入门');
        expect(course.price).toBe(99);
    });
    
    test('静态 save() 新增单条', async () => {
        const results = await Course.save({ title: 'React 基础', price: 88 });
        
        expect(results.length).toBe(1);
        expect((results[0] as any).id).toBeDefined();
        expect((results[0] as any).title).toBe('React 基础');
    });
    
    test('静态 save() 批量新增', async () => {
        const results = await Course.save([
            { title: '批量课程1', price: 10 },
            { title: '批量课程2', price: 20 },
            { title: '批量课程3', price: 30 }
        ]);
        
        expect(results.length).toBe(3);
        expect((results[0] as any).title).toBe('批量课程1');
        expect((results[2] as any).title).toBe('批量课程3');
    });
    
    // ========== 查询测试 ==========
    
    test('静态 get() 查询全部', async () => {
        const courses = await Course.get();
        
        expect(courses.length).toBeGreaterThan(0);
    });
    
    test('静态 get() 条件查询', async () => {
        const courses = await Course.get({ price: { '>': 50 }, limit: 5 });
        
        for (const c of courses) {
            expect((c as any).price).toBeGreaterThan(50);
        }
    });
    
    test('静态 get() 指定字段', async () => {
        const courses = await Course.get({ limit: 1 }, 'id,title');
        
        expect(courses.length).toBe(1);
        expect((courses[0] as any).id).toBeDefined();
        expect((courses[0] as any).title).toBeDefined();
    });
    
    // ========== 更新测试 ==========
    
    test('实例 save() 更新已有记录', async () => {
        // 先新增
        const course = new Course({ title: '待更新课程', price: 100 });
        await course.save();
        const id = course.id;
        
        // 更新
        course.title = '已更新课程';
        course.price = 200;
        await course.save();
        
        expect(course.id).toBe(id);
        expect(course.title).toBe('已更新课程');
        expect(course.price).toBe(200);
    });
    
    test('静态 save() 混合新增和更新', async () => {
        // 先新增一条
        const created = await Course.save({ title: '原始课程', price: 50 });
        const id = (created[0] as any).id;
        
        // 混合操作
        const results = await Course.save([
            { id, title: '已修改课程', price: 150 },       // 更新
            { title: '新增课程A', price: 60 },             // 新增
            { title: '新增课程B', price: 70 }              // 新增
        ]);
        
        expect(results.length).toBe(3);
        
        // 验证更新的记录
        const updated = results.find((r: any) => r.id === id) as any;
        expect(updated.title).toBe('已修改课程');
        expect(updated.price).toBe(150);
    });
    
    test('实例 update() 返回 updated 计数', async () => {
        const course = new Course({ title: '测试更新', price: 100 });
        await course.save();
        
        course.price = 999;
        const result = await course.update();
        
        expect(result.updated).toBe(1);
    });
    
    // ========== 删除测试 ==========
    
    test('实例 del() 删除返回自身', async () => {
        const course = new Course({ title: '待删除课程', price: 1 });
        await course.save();
        const id = course.id;
        
        const deleted = await course.del();
        
        expect(deleted.id).toBe(id);
        expect(deleted.title).toBe('待删除课程');
        
        // 验证已删除
        const check = await Course.get({ id });
        expect(check.length).toBe(0);
    });
    
    test('静态 del() 条件删除', async () => {
        // 新增测试数据
        await Course.save([
            { title: '删除测试1', price: 1 },
            { title: '删除测试2', price: 1 }
        ]);
        
        // 删除
        const deleted = await Course.del({ price: 1 });
        
        expect(deleted.length).toBeGreaterThanOrEqual(2);
    });
    
    // ========== 链式操作测试 ==========
    
    test('save 后可继续操作', async () => {
        const course = new Course({ title: '链式测试', price: 100 });
        
        // 新增 -> 修改 -> 删除
        await course.save();
        expect(course.id).toBeDefined();
        
        course.price = 200;
        await course.save();
        
        const deleted = await course.del();
        expect(deleted.id).toBe(course.id);
    });
});
