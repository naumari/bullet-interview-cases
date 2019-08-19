# `['1', '2', '3'].map(parseInt)` 的执行结果是么

## 参考答案

```es6
['1', '2', '3'].map(parseInt) // log 1、NaN、NaN
```

首先来看 `Array.prototype.map` 接受的参数为 `callback`，它的形参分别是 `currentValue`、`index`、`array`

```es6
arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])
```

然后再来看 `parseInt(string, radix)`，其中 string 为字符串，而 radix 为介于2-36之间的数。使用者告诉这个函数string（比如11）是radix（比如2）进制的，函数将固定返回string以十进制时显示的数（3）。

```es6
['1', '2', '3'].map(parseInt)
// parseInt("1", 0) 的结果是当作十进制来解析，返回 1
// parseInt("2", 1) 的第二个参数非法，返回 NaN
// parseInt("3", 2) 在二进制中，"3" 是非法字符，转换失败，返回 NaN。
```

## 关键点

## 额外参考

* [parseInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

<!-- tags: (javascript) -->

<!-- expertise: (0) -->