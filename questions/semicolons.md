### JavaScript中是否需要分号？

#### Answer

有时候需要。由于JavaScript自动分号插入，解释器会在大多数语句之后放置分号。这意味着在大多数情况下可以省略分号。

但是，在某些情况下则是一定要添加的。例如

1. 以 `[` 开头

```js
const previousLine = 3
;[1, 2, previousLine].map(n => n * 2)
```

2. 以 `(` 开头

```js
const previousLine = 3
;(function() {
  // ...
})()
```

在上面的例子中，解释器在 `3` 之后不插入分号，因此它会将 `3` 视为尝试对象属性访问或被调用为函数，这会抛出错误。

#### Good to hear

* 分号在JavaScript中通常是可选的，但是在某些特殊情况下是一定需要他的；
* 如果不使用分号，像Prettier这样的工具会在文本编辑器中保存时为您插入分号以防止出错。

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
