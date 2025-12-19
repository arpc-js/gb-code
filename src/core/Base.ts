import { SQL } from 'bun';
import { AsyncLocalStorage } from 'async_hooks';

// 数据库连接 - 切换数据库修改此 DSN
//const DSN = "mysql://root:root@localhost:3306/mydb";
const DSN = 'sqlite://data.db';
//const DSN = 'postgres://user:pass@localhost:5432/mydb';
const sql = new SQL(DSN);
const isMySQL = DSN.startsWith('mysql');

// 事务上下文存储
const txStorage = new AsyncLocalStorage<ReturnType<typeof sql.begin extends (fn: (tx: infer T) => any) => any ? T : never>>();

// 获取当前数据库连接（优先使用事务 tx）
export function db(): typeof sql {
    return (txStorage.getStore() ?? sql) as typeof sql;
}

// @tx 装饰器 - 声明式事务（无需括号）
export function tx<T extends (...args: any[]) => Promise<any>>(
    _target: any,
    _propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>
) {
    const originalMethod = descriptor.value!;
    
    descriptor.value = async function (this: any, ...args: any[]) {
        // 如果已经在事务中，直接执行
        if (txStorage.getStore()) {
            return await originalMethod.apply(this, args);
        }
        
        // 开启新事务
        return await sql.begin(async (t: any) => {
            return await txStorage.run(t, async () => {
                return await originalMethod.apply(this, args);
            });
        });
    } as T;
    
    return descriptor;
}

// 编程式事务
export async function runTx<T>(fn: () => Promise<T>): Promise<T> {
    if (txStorage.getStore()) {
        return await fn();
    }
    return await sql.begin(async (tx: any) => {
        return await txStorage.run(tx, fn);
    });
}

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

// 控制参数
const CTRL_KEYS = ['limit', 'offset', 'order', 'group', 'page', 'size'];

// 解析单个条件值（支持操作符对象）
function parseCondValue(field: string, value: unknown): ReturnType<typeof sql> | null {
    // 数组直接作为 in 语法糖: id: [1,2,3] => id IN (1,2,3)
    if (Array.isArray(value)) {
        if (value.length === 0) return null;
        // 构建 IN (val1, val2, val3) 形式
        const ph = value.map((_, i) => i === 0 ? sql`${value[0]}` : sql`, ${value[i]}`);
        let list = ph[0];
        for (let i = 1; i < ph.length; i++) list = sql`${list}${ph[i]}`;
        return sql`${sql.unsafe(field)} IN (${list})`;
    }
    
    // 操作符对象: { '>': 50, '<': 100 }
    if (value && typeof value === 'object') {
        const ops = value as Record<string, unknown>;
        const parts: ReturnType<typeof sql>[] = [];
        
        for (const [op, val] of Object.entries(ops)) {
            switch (op) {
                // 符号语法
                case '=':   parts.push(sql`${sql.unsafe(field)} = ${val}`); break;
                case '!=':  parts.push(sql`${sql.unsafe(field)} != ${val}`); break;
                case '<>':  parts.push(sql`${sql.unsafe(field)} != ${val}`); break;
                case '>':   parts.push(sql`${sql.unsafe(field)} > ${val}`); break;
                case '>=':  parts.push(sql`${sql.unsafe(field)} >= ${val}`); break;
                case '<':   parts.push(sql`${sql.unsafe(field)} < ${val}`); break;
                case '<=':  parts.push(sql`${sql.unsafe(field)} <= ${val}`); break;
                // 关键字语法
                case 'like':  parts.push(sql`${sql.unsafe(field)} LIKE ${val}`); break;
                case 'nlike': parts.push(sql`${sql.unsafe(field)} NOT LIKE ${val}`); break;
                case 'in': 
                    if (Array.isArray(val) && val.length) {
                        const ph = val.map((_, i) => i === 0 ? sql`${val[0]}` : sql`, ${val[i]}`);
                        let list = ph[0];
                        for (let i = 1; i < ph.length; i++) list = sql`${list}${ph[i]}`;
                        parts.push(sql`${sql.unsafe(field)} IN (${list})`);
                    }
                    break;
                case 'nin':
                    if (Array.isArray(val) && val.length) {
                        const ph = val.map((_, i) => i === 0 ? sql`${val[0]}` : sql`, ${val[i]}`);
                        let list = ph[0];
                        for (let i = 1; i < ph.length; i++) list = sql`${list}${ph[i]}`;
                        parts.push(sql`${sql.unsafe(field)} NOT IN (${list})`);
                    }
                    break;
                case 'between':
                    if (Array.isArray(val) && val.length === 2) {
                        parts.push(sql`${sql.unsafe(field)} BETWEEN ${val[0]} AND ${val[1]}`);
                    }
                    break;
                case 'null':
                    parts.push(val ? sql`${sql.unsafe(field)} IS NULL` : sql`${sql.unsafe(field)} IS NOT NULL`);
                    break;
            }
        }
        
        if (!parts.length) return null;
        let r = parts[0];
        for (let i = 1; i < parts.length; i++) r = sql`${r} AND ${parts[i]}`;
        return r;
    }
    
    // 普通值: field = value
    return sql`${sql.unsafe(field)} = ${value}`;
}

// 构建条件片段（支持模板字符串和对象）
function buildCondition(cond?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): {
    where: ReturnType<typeof sql> | null;
    limit?: number;
    offset?: number;
    order?: string;
    group?: string;
} {
    // 模板字符串模式
    if (Array.isArray(cond) && (cond as TemplateStringsArray).raw) {
        const strings = cond as TemplateStringsArray;
        if (!strings.some(s => s.trim()) && !values.length) return { where: null };
        return { where: sql(strings, ...values) };
    }
    
    // 对象模式
    if (cond && typeof cond === 'object') {
        const ctrl: { limit?: number; offset?: number; order?: string; group?: string; page?: number; size?: number } = {};
        const conditions: ReturnType<typeof sql>[] = [];
        
        for (const [key, value] of Object.entries(cond)) {
            // 提取控制参数
            if (key === 'limit') { ctrl.limit = Number(value); continue; }
            if (key === 'offset') { ctrl.offset = Number(value); continue; }
            if (key === 'order') { ctrl.order = String(value); continue; }
            if (key === 'group') { ctrl.group = String(value); continue; }
            // page/size 语法糖，自动转换为 offset/limit
            if (key === 'page') { ctrl.page = Number(value); continue; }
            if (key === 'size') { ctrl.size = Number(value); continue; }
            
            // or 条件
            if (key === 'or' && Array.isArray(value)) {
                const orParts: ReturnType<typeof sql>[] = [];
                for (const item of value) {
                    const { where } = buildCondition(item);
                    if (where) orParts.push(where);
                }
                if (orParts.length) {
                    let orSql = sql`(${orParts[0]})`;
                    for (let i = 1; i < orParts.length; i++) orSql = sql`${orSql} OR (${orParts[i]})`;
                    conditions.push(sql`(${orSql})`);
                }
                continue;
            }
            
            // and 条件
            if (key === 'and' && Array.isArray(value)) {
                for (const item of value) {
                    const { where } = buildCondition(item);
                    if (where) conditions.push(where);
                }
                continue;
            }
            
            // 普通字段条件
            const parsed = parseCondValue(key, value);
            if (parsed) conditions.push(parsed);
        }
        
        let where: ReturnType<typeof sql> | null = null;
        if (conditions.length) {
            where = conditions[0];
            for (let i = 1; i < conditions.length; i++) where = sql`${where} AND ${conditions[i]}`;
        }
        
        // page/size 转换为 offset/limit
        let { limit, offset } = ctrl;
        if (ctrl.page !== undefined && ctrl.size !== undefined) {
            limit = ctrl.size;
            offset = (ctrl.page - 1) * ctrl.size;
        } else if (ctrl.size !== undefined) {
            limit = ctrl.size;
        }
        
        return { where, limit, offset, order: ctrl.order, group: ctrl.group };
    }
    
    return { where: null };
}

// Active Record 基类
export default class Base {
    // 主键
    static primaryKey = 'id';
    id?: unknown;
    
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
    
    // GET - 查询（返回 AR 对象数组）
    // fields: 字段选择 'id,title' | 排除 '!password' | 统计 'count(*),sum(price)'
    static async get(cond?: TemplateStringsArray | Record<string, unknown>, fields?: string, ...values: unknown[]): Promise<this[]> {
        const t = this.table;
        const Cls = this;
        
        // 判断第二个参数是否为字段字符串
        let actualFields = fields;
        let actualValues = values;
        
        if (fields !== undefined && typeof fields !== 'string') {
            actualValues = [fields, ...values];
            actualFields = undefined;
        }
        
        // 解析条件和控制参数
        const { where, limit, offset, order, group } = buildCondition(cond, ...actualValues);
        
        // 构建字段部分
        let selectSql: ReturnType<typeof sql>;
        let isExcludeMode = false;
        
        if (actualFields && actualFields.trim()) {
            isExcludeMode = actualFields.startsWith('!');
            const fieldStr = isExcludeMode ? actualFields.slice(1) : actualFields;
            const fieldList = fieldStr.split(',').map(f => f.trim()).filter(f => f);
            
            if (isExcludeMode) {
                // 排除模式需要先查全部再过滤
                selectSql = sql`*`;
            } else if (fieldList.length > 0) {
                // 解析字段（支持统计函数）
                const parts: ReturnType<typeof sql>[] = [];
                for (const f of fieldList) {
                    const aggMatch = f.match(/^(count|sum|avg|max|min)\((.+)\)$/i);
                    if (aggMatch) {
                        const [, fn, col] = aggMatch;
                        const fnUpper = fn.toUpperCase();
                        if (col === '*') {
                            parts.push(sql.unsafe(`${fnUpper}(*) AS ${fn}_all`));
                        } else {
                            parts.push(sql.unsafe(`${fnUpper}(${col}) AS ${fn}_${col}`));
                        }
                    } else {
                        parts.push(sql.unsafe(f));
                    }
                }
                selectSql = parts[0];
                for (let i = 1; i < parts.length; i++) selectSql = sql`${selectSql}, ${parts[i]}`;
            } else {
                selectSql = sql`*`;
            }
        } else {
            selectSql = sql`*`;
        }
        
        // 构建完整 SQL
        let query = where 
            ? sql`SELECT ${selectSql} FROM ${sql.unsafe(t)} WHERE ${where}`
            : sql`SELECT ${selectSql} FROM ${sql.unsafe(t)}`;
        
        // GROUP BY
        if (group) {
            const groupFields = group.split(',').map(g => g.trim());
            let groupSql = sql.unsafe(groupFields[0]);
            for (let i = 1; i < groupFields.length; i++) groupSql = sql`${groupSql}, ${sql.unsafe(groupFields[i])}`;
            query = sql`${query} GROUP BY ${groupSql}`;
        }
        
        // ORDER BY（默认 DESC）
        if (order) {
            // 处理每个排序字段，没有指定 asc/desc 则默认 desc
            const orderParts = order.split(',').map(part => {
                const trimmed = part.trim();
                const lower = trimmed.toLowerCase();
                if (lower.endsWith(' asc') || lower.endsWith(' desc')) {
                    return trimmed;
                }
                return `${trimmed} DESC`;
            });
            query = sql`${query} ORDER BY ${sql.unsafe(orderParts.join(', '))}`;
        }
        
        // LIMIT & OFFSET
        if (limit !== undefined) {
            query = sql`${query} LIMIT ${limit}`;
        }
        if (offset !== undefined) {
            query = sql`${query} OFFSET ${offset}`;
        }
        
        const results = await query;
        
        // 排除字段模式后处理
        if (isExcludeMode && actualFields) {
            const excludeList = actualFields.slice(1).split(',').map(f => f.trim());
            return (results as Record<string, unknown>[]).map(row => {
                const filtered: Record<string, unknown> = {};
                for (const key of Object.keys(row)) {
                    if (!excludeList.includes(key)) filtered[key] = row[key];
                }
                return new Cls(filtered) as InstanceType<typeof Cls>;
            }) as this[];
        }
        
        // 返回 AR 对象数组
        return (results as Record<string, unknown>[]).map(row => new Cls(row) as InstanceType<typeof Cls>) as this[];
    }
    
    // SAVE - 静态批量保存（根据 id 分组：无 id 新增，有 id 更新）
    static async save(data: Record<string, unknown> | Record<string, unknown>[]): Promise<unknown[]> {
        const items = Array.isArray(data) ? data : [data];
        if (!items.length) return [];
        
        const pk = this.primaryKey;
        const toInsert = items.filter(item => !item[pk]);
        const toUpdate = items.filter(item => item[pk]);
        const results: unknown[] = [];
        const d = db();
        
        // 批量新增
        if (toInsert.length) {
            if (isMySQL){
                await d`INSERT INTO ${sql.unsafe(this.table)} ${sql(toInsert)}`;
                const [{ inserted }] = await d`SELECT LAST_INSERT_ID() as id`;
                results.push(inserted);
            }else {
                const inserted = await d`INSERT INTO ${sql.unsafe(this.table)} ${sql(toInsert)} RETURNING id`;
                results.push(...inserted.map(x=>x.id));
            }
        }
        
        // 批量更新（逐条）
        for (const item of toUpdate) {
            const id = item[pk];
            const updateData = { ...item };
            delete updateData[pk];
            await d`UPDATE ${sql.unsafe(this.table)} SET ${sql(updateData)} WHERE ${sql.unsafe(pk)} = ${id}`;
            results.push(id)
        }
        
        return results;
    }
    
    // DEL - 删除（返回删除的记录）
    static async del(cond?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): Promise<unknown[]> {
        const { where } = buildCondition(cond, ...values);
        if (!where) throw new Error('Delete requires conditions');
        const d = db();
        await d`DELETE FROM ${sql.unsafe(this.table)} WHERE ${where}`;
    }
    
    // 实例方法 - 保存（新增或更新，返回新 AR 对象）
    async save(): Promise<any> {
        const cls = this.constructor as typeof Base;
        const data = { ...this } as Record<string, unknown>;
        const [id] = await cls.save(data);
        console.log(11111111, id)

        this.id=id
    }
    
    // UPDATE - 更新（实例方法，用 this 的值 SET，不返回实例）
    async update(cond?: TemplateStringsArray | Record<string, unknown>, ...values: unknown[]): Promise<{ updated: number }> {
        const cls = this.constructor as typeof Base;
        const pk = cls.primaryKey as keyof this;
        const t = cls.table;
        const data = { ...this } as Record<string, unknown>;
        delete data[pk as string];
        
        const { where } = cond !== undefined 
            ? buildCondition(cond, ...values) 
            : (this[pk] ? buildCondition({ [pk]: this[pk] }) : { where: null });
        
        if (where) {
            const conn = db();
            await conn`UPDATE ${sql.unsafe(t)} SET ${sql(data)} WHERE ${where}`;
            return { updated: 1 };
        }
        return { updated: 0 };
    }
    
    // 实例方法 - 删除（返回被删除的 AR 对象）
    async del(): Promise<this> {
        const cls = this.constructor as typeof Base;
        const pk = cls.primaryKey as keyof this;
        
        if (this[pk]) {
            await cls.del({ [pk]: this[pk] } as Record<string, unknown>);
        }
        return this;
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
