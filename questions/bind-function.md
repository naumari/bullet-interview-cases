# 实现一个 `bind` 函数，它在功能上等同于 `Function.prototype.bind` 方法

## Answer

返回一个接受任意数量参数的函数，通过用其余的 `...` 运算符收集它们。
从该函数返回使用 `Function.prototype.apply` 调用fn的结果，将上下文和参数数组应用于函数。

```es6
const bind = (fn, context) => (...args) => fn.apply(context, args)
```

## Good to hear

## Additional links

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
