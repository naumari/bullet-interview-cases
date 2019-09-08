# memoization 是什么

## 参考答案

memoization 是一种优化技术，主要用于通过存储昂贵的函数调用的结果来加速计算机程序，并在再次发生相同的输入时返回缓存的结果。

在 JavaScript 中的实现如下

```es6
const memoize = fn => {
  const cache = new Map()
  return value => {
    const cachedResult = cache.get(value)
    if (cachedResult !== undefined) return cachedResult
    const result = fn(value)
    cache.set(value, result)
    return result
  }
}
```

## 关键点

* memoization 是一个空间换时间的方式，存储执行结果，下次再次发生相同的输入会直接输出结果，提高了执行的速度;
* memoization 是一种优化技术，避免一些不必要的重复计算，可以提高计算速度。

## 额外参考

* [Implementing memoization in JavaScript](https://www.sitepoint.com/implementing-memoization-in-javascript/)

<!-- tags: (javascript) -->
