import { sql } from 'bun';

// 创建用户表
await sql`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`;

console.log('✅ 用户表创建成功');

// 检查是否已有测试用户
const existing = await sql`SELECT id FROM users WHERE email = 'test@example.com'`;

if (existing.length === 0) {
    // 插入测试用户
    await sql`
        INSERT INTO users (name, email, password) VALUES
        ('测试用户', 'test@example.com', '123456'),
        ('管理员', 'admin@example.com', 'admin123')
    `;
    console.log('✅ 测试用户创建成功');
    console.log('   - test@example.com / 123456');
    console.log('   - admin@example.com / admin123');
} else {
    console.log('ℹ️  测试用户已存在');
}

// 查询验证
const users = await sql`SELECT id, name, email FROM users`;
console.log('\n当前用户列表:');
console.log(users);
