import { SQL } from "bun";

const sql = new SQL("sqlite://data.db");

// 初始化数据库
export async function initDatabase() {
    // 创建课程表
    await sql`
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            price INTEGER,
            duration TEXT,
            lessons INTEGER
        )
    `;
    
    console.log('[SQL] 数据库初始化完成');
}

// 插入初始数据
export async function seedData() {
    const [count] = await sql`SELECT COUNT(*) as count FROM courses`;
    
    if (count.count > 0) {
        console.log('[SQL] 数据已存在，跳过插入');
        return;
    }
    
    const courses = [
        ['Vue3 入门到精通', 'Vue3 全面教程，从基础到高级', 99, '20小时', 45],
        ['React 实战开发', 'React 项目实战，掌握核心技能', 129, '25小时', 52],
        ['Node.js 后端开发', 'Node.js 服务端编程，构建高性能后端', 149, '30小时', 60],
        ['TypeScript 高级教程', 'TS 类型体操，进阶必备', 79, '15小时', 35],
    ];
    
    for (const [title, description, price, duration, lessons] of courses) {
        await sql`
            INSERT INTO courses (title, description, price, duration, lessons) 
            VALUES (${title}, ${description}, ${price}, ${duration}, ${lessons})
        `;
    }
    
    console.log('[SQL] 初始数据插入完成');
}

// 获取课程列表
export async function getCourseList() {
    return await sql`SELECT id, title, description, price FROM courses`;
}

// 获取课程详情
export async function getCourseById(id) {
    const [course] = await sql`SELECT * FROM courses WHERE id = ${id}`;
    return course;
}

// 新增课程
export async function createCourse(title, description, price, duration, lessons) {
    const [result] = await sql`
        INSERT INTO courses (title, description, price, duration, lessons) 
        VALUES (${title}, ${description}, ${price}, ${duration}, ${lessons})
        RETURNING id
    `;
    
    return { id: result.id, title, description, price, created: true };
}

// 初始化
await initDatabase();
await seedData();

export default sql;
