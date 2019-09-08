# 创建一个用 `#` 屏蔽字符串的函数，除了最后四（4）个字符

```js
mask("123456789") // "#####6789"
```

## 参考答案

> 有许多种方法来实现这个需求，下面展示其中一种

使用 `String.prototype.slice` 来获取字符串的后四个字符。然后使用 `String.prototype.padStart` 来将 `#` 填充至字符串中。

```es6
const mask = (str, maskChar = "#") =>
  str.slice(-4).padStart(str.length, maskChar)
```

## 关键点

* 如果解决方案有效，应该首选简短的函数式问题解决方案

## 额外参考

<!-- tags: (javascript) -->