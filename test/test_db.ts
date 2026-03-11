import {Course} from "../src/arpc/Course";


// 2. 等值条件
console.log('\n2. 等值条件 - id = 4');
console.log(await Course.get({ id: 4 }));

// 3. 字段选择
console.log('\n3. 字段选择 - 只查 id, title');
console.log(await Course.get({}, 'id,title'));

// 4. 排除字段
console.log('\n4. 排除字段 - 排除 description');
console.log(await Course.get({}, '!description'));

// 5. 数组直接作为 IN (in 语法糖)
console.log('\n5. 数组 IN - id: [3, 4, 5]');
console.log(await Course.get({ id: [3, 4, 5] }, 'id,title'));

// 6. in 操作符
console.log('\n6. in 操作符 - id: { in: [3, 4] }');
console.log(await Course.get({ id: { in: [3, 4] } }, 'id,title'));

// 6. nin 操作符
console.log('\n6. nin 操作符 - id: { nin: [3, 4] }');
console.log(await Course.get({ id: { nin: [3, 4] } }, 'id,title'));

// 7. > 大于
console.log('\n7. > 大于 - price > 100');
console.log(await Course.get({ price: { '>': 100 } }, 'id,title,price'));

// 8. >= 大于等于
console.log('\n8. >= 大于等于 - price >= 99');
console.log(await Course.get({ price: { '>=': 99 } }, 'id,title,price'));

// 9. < 小于
console.log('\n9. < 小于 - price < 100');
console.log(await Course.get({ price: { '<': 100 } }, 'id,title,price'));

// 10. <= 小于等于
console.log('\n10. <= 小于等于 - price <= 99');
console.log(await Course.get({ price: { '<=': 99 } }, 'id,title,price'));

// 11. != 不等于
console.log('\n11. != 不等于 - price != 99');
console.log(await Course.get({ price: { '!=': 99 } }, 'id,title,price'));

// 12. between 区间
console.log('\n12. between 区间 - price BETWEEN 80 AND 130');
console.log(await Course.get({ price: { between: [80, 130] } }, 'id,title,price'));

// 13. like 模糊匹配
console.log('\n13. like 模糊匹配 - title LIKE %Vue%');
console.log(await Course.get({ title: { like: '%Vue%' } }, 'id,title'));

// 14. 组合条件 - 同一字段多个操作符
console.log('\n14. 组合条件 - price > 50 AND price < 130');
console.log(await Course.get({ price: { '>': 50, '<': 130 } }, 'id,title,price'));

// 15. or 条件
console.log('\n15. or 条件 - price = 99 OR price = 149');
console.log(await Course.get({
    or: [{ price: 99 }, { price: 149 }]
}, 'id,title,price'));

// 16. 分页 - limit
console.log('\n16. 分页 limit - 只取 2 条');
console.log(await Course.get({ limit: 2 }, 'id,title'));

// 17. 分页 - page + size
console.log('\n17. 分页 page/size - 第 2 页，每页 3 条');
console.log(await Course.get({ page: 2, size: 3 }, 'id,title'));

// 17b. 分页 - 第 1 页
console.log('\n17b. 分页 page/size - 第 1 页，每页 3 条');
console.log(await Course.get({ page: 1, size: 3 }, 'id,title'));

// 18. 排序 - order desc（默认）
console.log('\n18. 排序 - 按 price 降序（默认 desc）');
console.log(await Course.get({ order: 'price' }, 'id,title,price'));

// 19. 排序 - order asc
console.log('\n19. 排序 asc - 按 price 升序');
console.log(await Course.get({ order: 'price asc' }, 'id,title,price'));

// 20. 多字段排序
console.log('\n20. 多字段排序 - price, id asc');
console.log(await Course.get({ order: 'price, id asc' }, 'id,title,price'));

// 21. 统计 - count(*)
console.log('\n21. 统计 count(*) - 总数');
console.log(await Course.get({}, 'count(*)'));

// 22. 统计 - sum
console.log('\n22. 统计 sum(price) - 价格总和');
console.log(await Course.get({}, 'sum(price)'));

// 23. 统计 - avg
console.log('\n23. 统计 avg(price) - 平均价格');
console.log(await Course.get({}, 'avg(price)'));

// 24. 统计 - max/min
console.log('\n24. 统计 max/min - 最高/最低价格');
console.log(await Course.get({}, 'max(price),min(price)'));

// 25. 多个统计组合
console.log('\n25. 多统计组合');
console.log(await Course.get({}, 'count(*),sum(price),avg(price)'));

// 26. 复杂组合查询
console.log('\n26. 复杂组合 - price > 50, 按 price 降序, 取前 2 条');
console.log(await Course.get({
    price: { '>': 50 },
    order: 'price',
    limit: 2
}, 'id,title,price'));

// 27. and 显式 AND
console.log('\n27. and 显式 AND');
console.log(await Course.get({
    and: [
        { price: { '>=': 80 } },
        { lessons: { '>=': 40 } }
    ]
}, 'id,title,price,lessons'));

// 28. nin NOT IN
console.log('\n28. nin NOT IN - id 不在 [3, 4] 中');
console.log(await Course.get({ id: { nin: [3, 4] } }, 'id,title'));

// 29. 模板字符串模式
console.log('\n29. 模板字符串模式 - id = 4');
const id = 4;
console.log(await Course.get`id = ${id}`);

// 30. 复杂条件 - AND + OR 混合
// 查询: (price >= 100 AND lessons >= 40) OR (price < 50)
console.log('\n30. 复杂条件 AND + OR 混合');
console.log('    查询: (price >= 100 AND lessons >= 40) OR (price < 50)');
console.log(await Course.get({
    or: [
        { and: [{ price: { '>=': 100 } }, { lessons: { '>=': 40 } }] },
        { price: { '<': 50 } }
    ]
}, 'id,title,price,lessons'));

// 31. 复杂条件 - 普通条件 + OR
// 查询: id > 5 AND (price = 100 OR price = 149)
console.log('\n31. 复杂条件 - 普通条件 + OR');
console.log('    查询: id > 5 AND (price = 100 OR price = 149)');
console.log(await Course.get({
    id: { '>': 5 },
    or: [{ price: 100 }, { price: 149 }]
}, 'id,title,price'));

// 32. 超复杂条件 - 多层嵌套
// 查询: ((price > 100 AND lessons > 50) OR (price < 20)) AND id IN [3,4,5,7,8,9]
console.log('\n32. 超复杂条件 - 多层嵌套');
console.log('    查询: ((price > 100 AND lessons > 50) OR (price < 20)) AND id IN [3,4,5,7,8,9]');
console.log(await Course.get({
    id: [3, 4, 5, 7, 8, 9],
    or: [
        { and: [{ price: { '>': 100 } }, { lessons: { '>': 50 } }] },
        { price: { '<': 20 } }
    ]
}, 'id,title,price,lessons'));

console.log('\n========== 测试完成 ==========\n');