// 判断是否服务端环境
const isServer = typeof window === 'undefined' && typeof Bun !== 'undefined';

// 类型定义
interface SQLAdapter {
    query(sqlStr: string, params?: unknown[]): unknown[];
    run(sqlStr: string, params?: unknown[]): { lastInsertRowid: number };
    exec(sqlStr: string): void;
}

interface ParsedCondition {
    clause: string;
    params: unknown[];
}

interface InsertParts {
    columns: string;
    placeholders: string;
    params: unknown[];
}

interface SetParts {
    setClause: string;
    params: unknown[];
}

// 数据库连接（仅服务端）
let sql: SQLAdapter | null = null;

// 服务端初始化函数
async function initDatabase(): Promise<void> {
    if (!isServer || sql) return;
    
    const bun = await import('bun:sqlite');
    const Database = bun.Database;
    
    class SQLAdapterImpl implements SQLAdapter {
        private url: string;
        private type: string;
        private db: InstanceType<typeof Database>;
        
        constructor(url: string) {
            this.url = url;
            this.type = url.startsWith('sqlite://') ? 'sqlite' : 'unknown';
            this.db = this.connect();
        }
        
        private connect(): InstanceType<typeof Database> {
            if (this.type === 'sqlite') {
                const path = this.url.replace('sqlite://', '');
                return new Database(path);
            }
            throw new Error(`Unsupported database: ${this.type}`);
        }
        
        query(sqlStr: string, params: unknown[] = []): unknown[] {
            return this.db.prepare(sqlStr).all(...params);
        }
        
        run(sqlStr: string, params: unknown[] = []): { lastInsertRowid: number } {
            return this.db.prepare(sqlStr).run(...params) as { lastInsertRowid: number };
        }
        
        exec(sqlStr: string): void {
            this.db.exec(sqlStr);
        }
    }
    
    sql = new SQLAdapterImpl('sqlite://data.db');
    
    // 初始化数据库表
    sql.exec(`
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            price INTEGER,
            duration TEXT,
            lessons INTEGER
        )
    `);
    
    sql.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT
        )
    `);
    
    // 插入初始数据
    const result = sql.query('SELECT COUNT(*) as count FROM courses') as Array<{ count: number }>;
    const count = result[0];
    if (count.count === 0) {
        sql.run(
            'INSERT INTO courses (title, description, price, duration, lessons) VALUES (?, ?, ?, ?, ?), (?, ?, ?, ?, ?), (?, ?, ?, ?, ?), (?, ?, ?, ?, ?)',
            [
                'Vue3 入门到精通', 'Vue3 全面教程，从基础到高级', 99, '20小时', 45,
                'React 实战开发', 'React 项目实战，掌握核心技能', 129, '25小时', 52,
                'Node.js 后端开发', 'Node.js 服务端编程，构建高性能后端', 149, '30小时', 60,
                'TypeScript 高级教程', 'TS 类型体操，进阶必备', 79, '15小时', 35
            ]
        );
    }
    
    console.log('[ARPC] Database initialized');
}

// 服务端立即初始化
if (isServer) {
    await initDatabase();
}

// SQL 标签模板工具
function buildTaggedSQL(strings: TemplateStringsArray, ...values: unknown[]): { query: string; params: unknown[] } {
    let query = '';
    const params: unknown[] = [];
    
    strings.forEach((str, i) => {
        query += str;
        if (i < values.length) {
            query += '?';
            params.push(values[i]);
        }
    });
    
    return { query, params };
}

// 解析条件（支持对象和标签模板）
function parseCondition(conditionOrStrings?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): ParsedCondition {
    // 标签模板调用：get`id=${1}`
    if (Array.isArray(conditionOrStrings) && (conditionOrStrings as TemplateStringsArray).raw) {
        const { query, params } = buildTaggedSQL(conditionOrStrings as TemplateStringsArray, ...values);
        return { clause: query ? `WHERE ${query}` : '', params };
    }
    
    // 对象调用：get({id: 1})
    if (typeof conditionOrStrings === 'object' && conditionOrStrings !== null) {
        const obj = conditionOrStrings as Record<string, unknown>;
        const keys = Object.keys(obj);
        if (keys.length === 0) return { clause: '', params: [] };
        
        const conditions = keys.map(k => `${k} = ?`);
        return {
            clause: 'WHERE ' + conditions.join(' AND '),
            params: keys.map(k => obj[k])
        };
    }
    
    // 无条件
    return { clause: '', params: [] };
}

// 将对象转为 INSERT 语句部分
function buildInsert(data: Record<string, unknown> | Record<string, unknown>[]): InsertParts {
    const items = Array.isArray(data) ? data : [data];
    if (items.length === 0) return { columns: '', placeholders: '', params: [] };
    
    const keys = Object.keys(items[0]);
    const columns = keys.join(', ');
    const rowPlaceholder = '(' + keys.map(() => '?').join(', ') + ')';
    const placeholders = items.map(() => rowPlaceholder).join(', ');
    const params = items.flatMap(item => keys.map(k => item[k]));
    
    return { columns, placeholders, params };
}

// 将对象转为 UPDATE SET 部分
function buildSet(data: Record<string, unknown>): SetParts {
    const keys = Object.keys(data).filter(k => k !== 'id');
    const setClause = keys.map(k => `${k} = ?`).join(', ');
    const params = keys.map(k => data[k]);
    return { setClause, params };
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
    
    // GET - 查询（支持标签模板和对象）
    static get(conditionOrStrings?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): unknown[] {
        if (!isServer) throw new Error('Database operations only available on server');
        const { clause, params } = parseCondition(conditionOrStrings, ...values);
        const query = `SELECT * FROM ${this.table} ${clause}`;
        return sql!.query(query, params);
    }
    
    // ADD - 新增（支持对象或数组）
    static add(data: Record<string, unknown> | Record<string, unknown>[]): unknown {
        if (!isServer) throw new Error('Database operations only available on server');
        const { columns, placeholders, params } = buildInsert(data);
        const query = `INSERT INTO ${this.table} (${columns}) VALUES ${placeholders}`;
        const result = sql!.run(query, params);
        
        if (Array.isArray(data)) {
            return data.map((item, i) => ({ id: result.lastInsertRowid - data.length + i + 1, ...item }));
        }
        return { id: result.lastInsertRowid, ...data };
    }
    
    // UPDATE - 更新（支持标签模板和对象）
    static update(where: TemplateStringsArray | Record<string, unknown>, data: Record<string, unknown>): unknown[] {
        if (!isServer) throw new Error('Database operations only available on server');
        const { setClause, params: setParams } = buildSet(data);
        const { clause, params: whereParams } = parseCondition(where);
        const query = `UPDATE ${this.table} SET ${setClause} ${clause}`;
        sql!.run(query, [...setParams, ...whereParams]);
        return this.get(where);
    }
    
    // DEL - 删除（支持标签模板和对象）
    static del(conditionOrStrings?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): unknown[] {
        if (!isServer) throw new Error('Database operations only available on server');
        const { clause, params } = parseCondition(conditionOrStrings, ...values);
        if (!clause) throw new Error('Delete requires conditions');
        
        const deleted = this.get(conditionOrStrings, ...values);
        const query = `DELETE FROM ${this.table} ${clause}`;
        sql!.run(query, params);
        return deleted;
    }
    
    // 实例方法 - 保存（新增或更新）
    save(): this {
        const pk = (this.constructor as typeof Base).primaryKey as keyof this;
        if (this[pk]) {
            // 更新
            const data = { ...this } as Record<string, unknown>;
            delete data[pk as string];
            const results = (this.constructor as typeof Base).update({ [pk]: this[pk] }, data) as Record<string, unknown>[];
            if (results.length > 0) Object.assign(this, results[0]);
            return this;
        } else {
            // 新增
            const result = (this.constructor as typeof Base).add({ ...this });
            Object.assign(this, result);
            return this;
        }
    }
    
    // 实例方法 - 新增自身
    add(): this {
        const pk = (this.constructor as typeof Base).primaryKey;
        const data = { ...this } as Record<string, unknown>;
        delete data[pk];  // 移除主键，让数据库自动生成
        
        const result = (this.constructor as typeof Base).add(data);
        Object.assign(this, result);
        return this;
    }
    
    // 实例方法 - 更新自身
    update(conditionOrStrings?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): unknown[] {
        const pk = (this.constructor as typeof Base).primaryKey as keyof this;
        const data = { ...this } as Record<string, unknown>;
        delete data[pk as string];
        
        // 如果没有传条件，用自身主键作为条件
        let where: TemplateStringsArray | Record<string, unknown> | undefined;
        if (conditionOrStrings === undefined && this[pk]) {
            where = { [pk]: this[pk] } as Record<string, unknown>;
        } else {
            where = conditionOrStrings;
        }
        
        const results = (this.constructor as typeof Base).update(where!, data);
        if (results.length > 0) {
            Object.assign(this, results[0]);
        }
        return results;
    }
    
    // 实例方法 - 删除
    del(conditionOrStrings?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): unknown[] {
        const pk = (this.constructor as typeof Base).primaryKey as keyof this;
        
        // 如果没有传条件，用自身主键作为条件
        if (conditionOrStrings === undefined && this[pk]) {
            return (this.constructor as typeof Base).del({ [pk]: this[pk] } as Record<string, unknown>);
        }
        
        return (this.constructor as typeof Base).del(conditionOrStrings, ...values);
    }
    
    // 实例方法 - 删除自身（别名）
    remove(): unknown[] {
        return this.del();
    }
    
    // 实例方法 - 重新加载
    reload(): this {
        const pk = (this.constructor as typeof Base).primaryKey as keyof this;
        if (!this[pk]) throw new Error('Cannot reload without primary key');
        const results = (this.constructor as typeof Base).get({ [pk]: this[pk] } as Record<string, unknown>) as Record<string, unknown>[];
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
}

export { sql };
