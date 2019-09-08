# 逗号定义数组

以下代码的输出结果是什么

```es6
[,,,].join(", ")

// A. ", , , "
// B. "undefined, undefined, undefined, undefined"
// C. ", , "
// D. ""
```

## 参考答案

结果是 C。JavaScript 允许用逗号来定义数组，得到的数组是含有3个 undefined 值的数组。也就是说 `[,,,]` 等同于 `[undefined, undefined, undefined, ]` ，也就是说它的 `length: 3`。
MDN关于 join 方法的描述：所有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来。如果元素是undefined 或者null， 则会转化成空字符串。

## 关键点

## 额外参考

* [Array.prototype.join](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

<!-- tags: (javascript) -->
