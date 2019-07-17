### 下面这段代码中 `console log` 会输出什么?

```js
var foo = 1
var foobar = function() {
  console.log(foo)
  var foo = 2
}
foobar()
```

#### Answer

由于变量提升，在调用`console.log`方法之前声明了局部变量`foo`。这意味着局部变量`foo`作为参数传递给`console.log（）`而不是在函数外声明的全局变量。但是，由于变量声明没有提升该值，因此输出将是`undefined`，而不是`2`。

#### Good to hear

* 变量提升是JavaScript将声明移到顶部的默认行为
* 提到`严格'模式

##### Additional links

* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
