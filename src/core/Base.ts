import { SQL } from 'bun';

// 数据库连接 - 切换数据库修改此 DSN
const sql = new SQL( 'sqlite://data.db');

// 初始化表结构
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

await sql`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT
    )
`;

// 插入初始数据
const result = await sql`SELECT COUNT(*) as count FROM courses`;
if (Number(result[0]?.count ?? 0) === 0) {
    await sql`INSERT INTO courses ${sql([
        { title: 'Vue3 入门到精通', description: 'Vue3 全面教程，从基础到高级', price: 99, duration: '20小时', lessons: 45 },
        { title: 'React 实战开发', description: 'React 项目实战，掌握核心技能', price: 129, duration: '25小时', lessons: 52 },
        { title: 'Node.js 后端开发', description: 'Node.js 服务端编程，构建高性能后端', price: 149, duration: '30小时', lessons: 60 },
        { title: 'TypeScript 高级教程', description: 'TS 类型体操，进阶必备', price: 79, duration: '15小时', lessons: 35 }
    ])}`;
}

// 构建条件片段
function buildCondition(cond?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]) {
    if (Array.isArray(cond) && (cond as TemplateStringsArray).raw) {
        const strings = cond as TemplateStringsArray;
        if (!strings.some(s => s.trim()) && !values.length) return null;
        return sql(strings, ...values);
    }
    if (cond && typeof cond === 'object') {
        const keys = Object.keys(cond);
        if (!keys.length) return null;
        let r = sql`${sql(keys[0])} = ${cond[keys[0]]}`;
        for (let i = 1; i < keys.length; i++) r = sql`${r} AND ${sql(keys[i])} = ${cond[keys[i]]}`;
        return r;
    }
    return null;
}

// Active Record 基类
export default class Base {
    // 主键
    static primaryKey = 'id';
    id?: number;
    
    // 自动获取表名：User -> users, Course -> courses
    static get table(): string {
        const name = this.name.toLowerCase();
        // 简单复数规则
        if (name.endsWith('s')) return name + 'es';
        if (name.endsWith('y')) return name.slice(0, -1) + 'ies';
        return name + 's';
    }
    
    // 构造器
    constructor(data: Record<string, unknown> = {}) {
        Object.assign(this, data);
    }
    
    // GET - 查询
    static async get(cond?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): Promise<unknown[]> {
        const t = this.table, w = buildCondition(cond, ...values);
        return w ? await sql`SELECT * FROM ${sql(t)} WHERE ${w}` : await sql`SELECT * FROM ${sql(t)}`;
    }
    
    // ADD - 新增
    static async add(data: Record<string, unknown> | Record<string, unknown>[]): Promise<unknown> {
        const result = await sql`INSERT INTO ${sql(this.table)} ${sql(data)} RETURNING *`;
        return Array.isArray(data) ? result : result[0];
    }
    

    
    // DEL - 删除
    static async del(cond?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): Promise<unknown[]> {
        const w = buildCondition(cond, ...values);
        if (!w) throw new Error('Delete requires conditions');
        const deleted = await this.get(cond, ...values);
        await sql`DELETE FROM ${sql(this.table)} WHERE ${w}`;
        return deleted;
    }
    
    // 实例方法 - 保存（新增或更新）
    async save(): Promise<this> {
        const pk = (this.constructor as typeof Base).primaryKey as keyof this;
        if (this[pk]) {
            return await this.update();
        } else {
            return await this.add();
        }
    }
    
    // 实例方法 - 新增自身
    async add(): Promise<this> {
        const pk = (this.constructor as typeof Base).primaryKey;
        const data = { ...this } as Record<string, unknown>;
        delete data[pk];  // 移除主键，让数据库自动生成
        
        const result = await (this.constructor as typeof Base).add(data);
        Object.assign(this, result);
        return this;
    }
    
    // UPDATE - 更新（实例方法，用 this 的值 SET，参数为条件）
    async update(cond?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): Promise<this> {
        const cls = this.constructor as typeof Base;
        const pk = cls.primaryKey as keyof this;
        const t = cls.table;
        const d = { ...this } as Record<string, unknown>;
        delete d[pk as string];
        
        const w = cond !== undefined ? buildCondition(cond, ...values) : (this[pk] ? buildCondition({ [pk]: this[pk] }) : null);
        if (w) {
            await sql`UPDATE ${sql(t)} SET ${sql(d)} WHERE ${w}`;
            const results = await cls.get(cond ?? { [pk]: this[pk] });
            if (results.length) Object.assign(this, results[0]);
        }
        return this;
    }
    
    // 实例方法 - 删除
    async del(conditionOrStrings?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): Promise<unknown[]> {
        const pk = (this.constructor as typeof Base).primaryKey as keyof this;
        
        // 如果没有传条件，用自身主键作为条件
        if (conditionOrStrings === undefined && this[pk]) {
            return await (this.constructor as typeof Base).del({ [pk]: this[pk] } as Record<string, unknown>);
        }
        
        return await (this.constructor as typeof Base).del(conditionOrStrings, ...values);
    }
    
    // 实例方法 - 删除自身（别名）
    async remove(): Promise<unknown[]> {
        return await this.del();
    }
    
    // 实例方法 - 重新加载
    async reload(): Promise<this> {
        const pk = (this.constructor as typeof Base).primaryKey as keyof this;
        if (!this[pk]) throw new Error('Cannot reload without primary key');
        const results = await (this.constructor as typeof Base).get({ [pk]: this[pk] } as Record<string, unknown>) as Record<string, unknown>[];
        if (results.length > 0) Object.assign(this, results[0]);
        return this;
    }
    
    // 获取纯数据对象（去除方法）
    toJSON(): Record<string, unknown> {
        const data: Record<string, unknown> = {};
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key) && typeof this[key] !== 'function') {
                data[key] = this[key];
            }
        }
        return data;
    }
    
    // 原始 SQL 查询
    static async query(strings: TemplateStringsArray, ...values: unknown[]) {
        return await sql(strings, ...values);
    }
    
    // 事务
    static async transaction<T>(callback: (tx: typeof sql) => Promise<T>): Promise<T> {
        return await sql.begin(callback);
    }
}

export { sql, SQL };
