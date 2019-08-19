# 构建一个数组，内容到第 n 项的 Fibonacci 序列

## 参考答案

```es6
const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
```

## 关键点

## 额外参考

* [Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets_archive/fibonacciUntilNum.md)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
