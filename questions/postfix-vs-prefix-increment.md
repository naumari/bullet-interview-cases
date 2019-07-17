### `i ++` 和 `++ i` 两个运算符有什么区别？

#### Answer

两者都将变量值增加1，差异是他们执行结果。

后缀增量运算符求值为_before_它递增的值。

```js
let i = 0
i++ // 0
// i === 1
```

前缀增量运算符求值为_after_它递增的值。

```js
let i = 0
++i // 1
// i === 1
```

#### Good to hear

##### Additional links

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
