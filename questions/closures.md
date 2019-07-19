# 闭包是什么? 你能给出一个有用的例子吗

## Answer

闭包就是函数能够记住并访问它的词法作用域，即使当这个函数在它的词法作用域之外执行时。

```js
function foo() {
  var a = 2;

  function bar() {
    console.log( a ); // 2
  }

  bar();
}

foo();
```

闭包可以访问三个范围中的变量：

* 当前作用域内声明的变量
* 在父函数作用域内声明的变量
* 在全局作用域内内声明的变量

在JavaScript中，所有函数都是闭包，因为它们可以访问外部作用域，但是大多数函数都没有利用闭包的特性：状态的持久性。因此，闭包有时也称为有状态函数。

此外，闭包是存储私有数据同时阻止JavaScript从外部访问的唯一方法。它们是UMD（通用模块定义）模式的关键，它经常用于只暴露公共API但保持实现细节私有的库，防止与其他库或用户自己的代码发生名称冲突。

## Good to hear

* 闭包非常有用，因为它们允许您将数据与对该数据进行操作的函数相关联;
* 闭包只能用一种方法替换对象;
* 闭包可用于模拟私有属性和方法。

## Additional links

* [你不懂JS：作用域与闭包](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/scope%20&%20closures/README.md#you-dont-know-js-scope--closures)

<!-- tags: (javascript) -->

<!-- expertise: (0) -->