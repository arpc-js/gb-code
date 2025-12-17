// 判断是否服务端环境
const isServer = typeof window === 'undefined' && typeof Bun !== 'undefined';

// 数据库连接（仅服务端）
let sql = null;
let Database = null;

// 服务端初始化函数
async function initDatabase() {
    if (!isServer || sql) return;
    
    const bun = await import('bun:sqlite');
    Database = bun.Database;
    
    class SQLAdapter {
        constructor(url) {
            this.url = url;
            this.type = url.startsWith('sqlite://') ? 'sqlite' : 'unknown';
            this.db = this.connect();
        }
        
        connect() {
            if (this.type === 'sqlite') {
                const path = this.url.replace('sqlite://', '');
                return new Database(path);
            }
            throw new Error(`Unsupported database: ${this.type}`);
        }
        
        query(sqlStr, params = []) {
            return this.db.prepare(sqlStr).all(...params);
        }
        
        run(sqlStr, params = []) {
            return this.db.prepare(sqlStr).run(...params);
        }
        
        exec(sqlStr) {
            return this.db.exec(sqlStr);
        }
    }
    
    sql = new SQLAdapter('sqlite://data.db');
    
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
    const [count] = sql.query('SELECT COUNT(*) as count FROM courses');
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
function buildTaggedSQL(strings, ...values) {
    let query = '';
    const params = [];
    
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
function parseCondition(conditionOrStrings, ...values) {
    // 标签模板调用：get`id=${1}`
    if (Array.isArray(conditionOrStrings) && conditionOrStrings.raw) {
        const { query, params } = buildTaggedSQL(conditionOrStrings, ...values);
        return { clause: query ? `WHERE ${query}` : '', params };
    }
    
    // 对象调用：get({id: 1})
    if (typeof conditionOrStrings === 'object' && conditionOrStrings !== null) {
        const keys = Object.keys(conditionOrStrings);
        if (keys.length === 0) return { clause: '', params: [] };
        
        const conditions = keys.map(k => `${k} = ?`);
        return {
            clause: 'WHERE ' + conditions.join(' AND '),
            params: keys.map(k => conditionOrStrings[k])
        };
    }
    
    // 无条件
    return { clause: '', params: [] };
}

// 将对象转为 INSERT 语句部分
function buildInsert(data) {
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
function buildSet(data) {
    const keys = Object.keys(data).filter(k => k !== 'id');
    const setClause = keys.map(k => `${k} = ?`).join(', ');
    const params = keys.map(k => data[k]);
    return { setClause, params };
}

// Active Record 基类
export default class Base {
    // 主键
    static primaryKey = 'id';
    
    // 自动获取表名：User -> users, Course -> courses
    static get table() {
        const name = this.name.toLowerCase();
        // 简单复数规则
        if (name.endsWith('s')) return name + 'es';
        if (name.endsWith('y')) return name.slice(0, -1) + 'ies';
        return name + 's';
    }
    
    // 构造器
    constructor(data = {}) {
        Object.assign(this, data);
    }
    
    // GET - 查询（支持标签模板和对象）
    // Course.get({id: 1}) 或 Course.get`id=${1}`
    static get(conditionOrStrings, ...values) {
        if (!isServer) throw new Error('Database operations only available on server');
        const { clause, params } = parseCondition(conditionOrStrings, ...values);
        const query = `SELECT * FROM ${this.table} ${clause}`;
        return sql.query(query, params);
    }
    
    // ADD - 新增（支持对象或数组）
    // Course.add({title: 'xxx'}) 或 Course.add([{...}, {...}])
    static add(data) {
        if (!isServer) throw new Error('Database operations only available on server');
        const { columns, placeholders, params } = buildInsert(data);
        const query = `INSERT INTO ${this.table} (${columns}) VALUES ${placeholders}`;
        const result = sql.run(query, params);
        
        if (Array.isArray(data)) {
            return data.map((item, i) => ({ id: result.lastInsertRowid - data.length + i + 1, ...item }));
        }
        return { id: result.lastInsertRowid, ...data };
    }
    
    // UPDATE - 更新（支持标签模板和对象）
    // Course.update({id: 1}, {title: 'xxx'})
    static update(where, data) {
        if (!isServer) throw new Error('Database operations only available on server');
        const { setClause, params: setParams } = buildSet(data);
        const { clause, params: whereParams } = parseCondition(where);
        const query = `UPDATE ${this.table} SET ${setClause} ${clause}`;
        sql.run(query, [...setParams, ...whereParams]);
        return this.get(where);
    }
    
    // DEL - 删除（支持标签模板和对象）
    // Course.del({id: 1}) 或 Course.del`id=${1}`
    static del(conditionOrStrings, ...values) {
        if (!isServer) throw new Error('Database operations only available on server');
        const { clause, params } = parseCondition(conditionOrStrings, ...values);
        if (!clause) throw new Error('Delete requires conditions');
        
        const deleted = this.get(conditionOrStrings, ...values);
        const query = `DELETE FROM ${this.table} ${clause}`;
        sql.run(query, params);
        return deleted;
    }
    
    // 实例方法 - 保存（新增或更新）
    save() {
        const pk = this.constructor.primaryKey;
        if (this[pk]) {
            // 更新
            const data = { ...this };
            delete data[pk];
            const [result] = this.constructor.update({ [pk]: this[pk] }, data);
            Object.assign(this, result);
            return this;
        } else {
            // 新增
            const result = this.constructor.add({ ...this });
            Object.assign(this, result);
            return this;
        }
    }
    
    // 实例方法 - 新增自身
    // course.add() 插入当前对象
    add() {
        const pk = this.constructor.primaryKey;
        const data = { ...this };
        delete data[pk];  // 移除主键，让数据库自动生成
        
        const result = this.constructor.add(data);
        Object.assign(this, result);
        return this;
    }
    
    // 实例方法 - 更新自身（支持标签模板和对象条件）
    // course.update({id: 1}) 或 course.update`id=${1}`
    update(conditionOrStrings, ...values) {
        const pk = this.constructor.primaryKey;
        const data = { ...this };
        delete data[pk];
        
        // 如果没有传条件，用自身主键作为条件
        let where;
        if (conditionOrStrings === undefined && this[pk]) {
            where = { [pk]: this[pk] };
        } else {
            where = conditionOrStrings;
        }
        
        const results = this.constructor.update(where, data);
        if (results.length > 0) {
            Object.assign(this, results[0]);
        }
        return results;
    }
    
    // 实例方法 - 删除（支持标签模板和对象条件）
    // course.del() 或 course.del({id: 1}) 或 course.del`id=${1}`
    del(conditionOrStrings, ...values) {
        const pk = this.constructor.primaryKey;
        
        // 如果没有传条件，用自身主键作为条件
        if (conditionOrStrings === undefined && this[pk]) {
            return this.constructor.del({ [pk]: this[pk] });
        }
        
        return this.constructor.del(conditionOrStrings, ...values);
    }
    
    // 实例方法 - 删除自身（别名）
    remove() {
        return this.del();
    }
    
    // 实例方法 - 重新加载
    reload() {
        const pk = this.constructor.primaryKey;
        if (!this[pk]) throw new Error('Cannot reload without primary key');
        const [data] = this.constructor.get({ [pk]: this[pk] });
        Object.assign(this, data);
        return this;
    }
    
    // 获取纯数据对象（去除方法）
    toJSON() {
        const data = {};
        for (const key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                data[key] = this[key];
            }
        }
        return data;
    }
}

export { sql };
