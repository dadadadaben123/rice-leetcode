/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
    F(0) = 0,   F(1) = 1
    F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
    斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1
 * @param {number} n
 * @return {number}
 */

//和爬楼梯很像，多了个取模
const storeMap = new Map()
var fib = function (n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  if (storeMap.has(n)) {
    console.log(storeMap.has(n), storeMap.get(n), n)
    return storeMap.get(n)
  } else {
    let res = fib(n - 1) + fib(n - 2)
    res = res % 1000000007
    storeMap.set(n, res)
    return res
  }
}

const res = fib(4)
console.log(res)
