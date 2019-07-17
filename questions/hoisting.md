### 如何在JavaScript中变量提升是如何工作？

#### Answer

变量提升是一种JavaScript机制，其中变量和函数声明在编译阶段被放入内存中。这意味着无论函数和变量在哪里声明，无论其处于全局作用域还是局部作用域，它们都会被移到其的顶部。

但是，仅会提升声明、而不是赋值。

```js
console.log(hoist)
var hoist = "value"
```

is equivalent to:

```js
var hoist
console.log(hoist)
hoist = "value"
```

会输出将`undefined`输出到控制台，而不是`value`。

变量提升还允许您在函数声明看起来在程序中声明之前调用它。

```js
myFunction() // No error; logs "hello"
function myFunction() {
  console.log("hello")
}
```

但要警惕赋值给变量的函数表达式：

```js
myFunction() // Error: `myFunction` is not a function
var myFunction = function() {
  console.log("hello")
}
```

#### Good to hear

* 变量提升是JavaScript将声明移到顶部的默认行为
* 函数声明在变量声明之前被提升

##### Additional links

* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
* [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
