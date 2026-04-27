// 同步编程示例
console.log('同步开始');

// 真实的同步操作：计算密集型任务
function syncOperation() {
  // 计算斐波那契数列的第10项（快速完成）
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const result = fibonacci(10); // 这会阻塞主线程但很快完成
  return '同步计算完成，斐波那契(10) = ' + result;
}

// 执行同步操作
const syncResult = syncOperation();
console.log(syncResult);
console.log('同步结束'); // 这行代码会等待计算完成后才执行

// 异步编程示例
console.log('
异步开始');

// 异步操作：定时器
function asyncOperation() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('异步操作完成');
    }, 1000); // 缩短为1秒
  });
}

// 执行异步操作
asyncOperation().then(result => {
  console.log(result);
});

console.log('异步结束'); // 这行代码会立即执行，不等待1秒