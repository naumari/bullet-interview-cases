# 以下代码会输出什么

```es6
let a = { n: 1 }
let b = a

a.x = a = { n: 2 }

console.log(a)
console.log(a.x)

console.log(b)
console.log(b.x)
```

## 参考答案

```es6
let a = { n: 1 }
let b = a

a.x = a = { n: 2 }

console.log(a) // { n: 2 }
console.log(a.x) // undefined

console.log(b) // { n: 1, x: { n: 2 } }
console.log(b.x) // { n: 2 }
```

`.` 运算优先于 `=` 赋值运算，因此此处赋值可理解为

* 声明 `a` 对象中的 `x` 属性，用于赋值，此时 `b` 指向 `a`，同时拥有未赋值的 `x` 属性;
* 对 `a` 对象赋值，此时变量名 `a` 改变指向到对象 `{ n: 2 }`;
* 对步骤1中 `x` 属性，也即 `a` 原指向对象的 `x` 属性，也即 `b` 指向对象的 `x` 属性赋值。

## 关键点

## 额外参考

<!-- tags: (javascript) -->
