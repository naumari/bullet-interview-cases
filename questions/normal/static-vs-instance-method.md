# 请解释下静态方法和实例方法之间的区别

## 参考答案

静态方法属于一个类，不作用于实例，而实例方法属于类的原型，它由类的所有实例继承并作用于它们。

```es6
Array.isArray // Array 的静态方法
Array.prototype.push // Array 的实例方法
```

在这种情况下，`Array.isArray` 方法作为数组的实例方法没有意义，因为我们已经知道在处理数组时该值是一个数组。

实例方法在技术上可以作为静态方法工作，但提供了更简洁的语法：

```es6
const arr = [1, 2, 3]
arr.push(4)
Array.push(arr, 4)
```

## 关键点

* 如何利用 ES2015 class 的语法来创建静态、实例方法

## 额外参考

* [Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

<!-- tags: (javascript) -->
