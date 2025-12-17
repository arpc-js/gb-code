// Vite 插件：将 arpc 类转换为前端 RPC 调用
export default function arpcPlugin() {
    return {
        name: 'vite-plugin-arpc',
        enforce: 'pre',
        
        // 拦截 arpc 模块解析
        resolveId(source) {
            const match = source.match(/arpc\/(\w+)/);
            if (match) {
                return `\0virtual:arpc-${match[1].toLowerCase()}`;
            }
            return null;
        },
        
        // 加载虚拟模块 - 纯 RPC 类
        load(id) {
            if (!id.startsWith('\0virtual:arpc-')) return null;
            
            const name = id.replace('\0virtual:arpc-', '');
            const className = name.charAt(0).toUpperCase() + name.slice(1);
            
            return `
// ${className} - 前端 RPC 类
const __rpc = async (method, params) => {
    const res = await fetch('/${name}/' + method, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
};

class ${className} {
    constructor(data = {}) {
        Object.assign(this, data);
    }
    
    static get(where = {}) { return __rpc('get', where); }
    static add(data) { return __rpc('add', data); }
    static update(where, data) { return __rpc('update', { where, data }); }
    static del(where) { return __rpc('del', where); }
    
    async add() {
        const { id, ...rest } = this.toJSON();
        const result = await __rpc('add', rest);
        Object.assign(this, result);
        return this;
    }
    
    async update(where) {
        const { id, ...rest } = this.toJSON();
        const result = await __rpc('update', { where: where || { id: this.id }, data: rest });
        if (result.length > 0) Object.assign(this, result[0]);
        return result;
    }
    
    async del(where) {
        return await __rpc('del', where || { id: this.id });
    }
    
    async save() {
        return this.id ? this.update() : this.add();
    }
    
    async reload() {
        const [data] = await __rpc('get', { id: this.id });
        Object.assign(this, data);
        return this;
    }
    
    toJSON() {
        const data = {};
        for (const key in this) {
            if (typeof this[key] !== 'function') data[key] = this[key];
        }
        return data;
    }
}

export default ${className};
`;
        }
    };
}
