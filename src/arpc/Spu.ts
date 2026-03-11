import Base from '../core/Base';

// SPU 商品基础信息
export class Spu extends Base {
    name: string = '';           // 商品名称
    description: string = '';    // 商品描述
    price: number = 0;           // 价格（小数）
    stock: bigint = 0n;          // 库存（大整数）
    category_id: bigint = 0n;    // 分类ID
    brand: string = '';          // 品牌
    status: boolean = true;      // 上架状态
    created_at?: bigint;          // 创建时间戳
    updated_at?: bigint;          // 更新时间戳
    
    constructor(data: Partial<Spu> = {}) {
        super(data as Record<string, unknown>);
        Object.assign(this, data);
    }
}
