### 在JavaScript中的表达式和语句有什么区别？

#### Answer

JavaScript中有两个主要的语法类别：表达式和语句。或者将它们融合在一起，称为表达式声明。它们大致概括为：

* **表达式**: 产生一个值
* **语句**: 执行一个动作
* **表达式声明**: 产生一个值并执行一个动作

一般的规则，如下:

> 如果您可以打印它或将其分配给变量，那么它就是一个表达式。如果你不能，那就是一个声明。

##### 声明

```js
let x = 0

function declaration() {}

if (true) {
}
```

语句显示为执行某些操作但不生成值的指令。

```js
// Assign `x` to the absolute value of `y`.
var x
if (y >= 0) {
  x = y
} else {
  x = -y
}
```

上面代码中唯一的表达式是“y> = 0”，它产生一个值，即“true”或“false”。代码的其他部分不会生成值。

##### 表达式

表达式产生一个价值。 它们可以传递给函数，因为解释器用它们解析的值替换它们。

```js
5 + 5 // => 10

lastCharacter("input") // => "t"

true === true // => true
```

##### 表达式声明

使用条件运算符来完成之前表达式语句的等效版本：

```js
// Assign `x` as the absolute value of `y`.
var x = y >= 0 ? y : -y
```

这既是表达式又是语句，因为我们将变量`x`（语句）声明为求值（表达式）。

#### Good to hear

* 函数声明 vs 函数表达式

##### Additional links

* [What is the difference between a statement and an expression?](https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression)

<!-- Whenever possible, link a more detailed explanation. -->

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
