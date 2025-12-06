// 全局数据存储（用于 SSR 数据传递）
let ssrData = {};

// 生成缓存 key
function getCacheKey(className, methodName, props) {
    return `${className}:${methodName}:${JSON.stringify(props)}`;
}

// 服务端 RPC 调用
async function createServerInstance(className) {
    const [pathModule, urlModule] = await Promise.all([
        import(/* @vite-ignore */ 'node:path'),
        import(/* @vite-ignore */ 'node:url')
    ]);
    
    const path = pathModule.default;
    const { pathToFileURL } = urlModule;
    
    // 使用 process.cwd() 获取项目根目录，避免打包后路径错误
    const rpcDir = path.resolve(process.cwd(), 'src/rpc');
    const classPath = path.resolve(rpcDir, `./${className}.js`);
    const classUrl = pathToFileURL(classPath).href;
    const module = await import(/* @vite-ignore */ classUrl);
    return new module.default();
}

// 客户端 fetch 调用
async function clientFetch(className, methodName, properties) {
    const res = await fetch(`http://localhost:3000/${className}/${methodName}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(properties)
    });
    
    if (!res.ok) {
        throw new Error(await res.text());
    }
    
    return res.json();
}

// 获取 SSR 数据
export function getSSRData() {
    const data = { ...ssrData };
    ssrData = {};
    return data;
}

// 创建 RPC 类代理
function createRpcClass(className) {
    // 返回一个带静态方法的类
    return new Proxy(class {}, {
        get(target, methodName) {
            // 调用方法，支持传入属性对象
            return async (properties = {}) => {
                const cacheKey = getCacheKey(className, methodName, properties);
                
                // 每次调用时判断环境
                const isServer = typeof window === 'undefined';
                
                // 服务端环境：直接调用类方法
                if (isServer) {
                    const instance = await createServerInstance(className);
                    Object.assign(instance, properties);
                    const result = await instance[methodName]();
                    ssrData[cacheKey] = result;
                    return result;
                }
                
                // 客户端环境：先检查 SSR 缓存
                if (window.__SSR_DATA__ && window.__SSR_DATA__[cacheKey] !== undefined) {
                    console.log('[RPC] 使用 SSR 缓存:', cacheKey);
                    const data = window.__SSR_DATA__[cacheKey];
                    delete window.__SSR_DATA__[cacheKey];
                    return data;
                }
                
                // 没有缓存，发起 fetch
                console.log('[RPC] 发起 fetch:', cacheKey);
                return clientFetch(className, methodName, properties);
            };
        }
    });
}

// 导出 RPC 类
export const Course = createRpcClass('course');
export const User = createRpcClass('user');