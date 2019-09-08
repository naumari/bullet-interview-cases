# `0.1 + 0.2 === 0.3` 的执行结果是什么

## 参考答案

结果为 `false`，因为JavaScript使用Math的IEEE 754标准，它使用64位浮点数。这样在进行十进制计算时会导致精度错误，简而言之，由于计算机在Base 2中工作，而decimal是Base 10。

```es6
0.1 + 0.2 // 0.30000000000000004
```

该问题的解决方案是使用通过定义两个值之间的差应小于的误差范围（epsilon）值来确定两个数是否大致相等的函数。

```es6
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon
approxEqual(0.1 + 0.2, 0.3) // true
```

## 关键点

* 解决这个问题的简单方法

## 额外参考

* [A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)
* [Fix "0.1 + 0.2 = 0.300000004" in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)

<!-- tags: (javascript) -->
