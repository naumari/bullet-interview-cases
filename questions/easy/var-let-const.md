# `var`，`let`，`const` 和没有关键字的语句有什么区别

## 参考答案

### No keyword

如果在变量赋值之前不存在关键字，如果不存在全局变量，则赋值给全局变量，或重新赋值已声明的变量。在非严格模式下，如果尚未声明变量，它将把变量指定为全局对象的属性（浏览器中的`window`）。在严格模式下，它将抛出错误以防止创建不需要的全局变量。

### var

`var` 是ES2015之前声明变量的默认语句。 它创建一个函数范围的变量，可以重新分配和重新声明。但是，由于缺少块作用域，如果变量在包含异步回调的循环中重用，则可能会导致问题，因为变量在块作用域之外一直存在。

例如，在执行`setTimeout`回调时，循环已经完成，`i`变量为'10`，因此所有十个回调都引用了函数作用域中可用的相同变量。

```es6
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs `10` ten times
    console.log(i)
  })
}

/* Solutions with `var` */
for (var i = 0; i < 10; i++) {
  // Passed as an argument will use the value as-is in
  // that point in time
  setTimeout(console.log, 0, i)
}

for (var i = 0; i < 10; i++) {
  // Create a new function scope that will use the value
  // as-is in that point in time
  ;(i => {
    setTimeout(() => {
      console.log(i)
    })
  })(i)
}
```

### let

`let` 在ES2015中引入，是声明后将重新赋值的变量的首选方式。但是如果尝试再次重新声明变量将导致错误。此外它是块作用域的，因此在循环中使用它将使其作用于迭代。

```es6
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs 0, 1, 2, 3, ...
    console.log(i)
  })
}
```

### const

`const` 在ES2015中引入，如果变量以后不会被重新赋值，那么它是首选的声明方式。此外它存在与块状作用域，不能重新赋值。

```es6
const myObject = {}
myObject.prop = "hello!" // No error
myObject = "hello" // Error
```

## 关键点

* 所有声明都应该在其作用域的顶部;
* 然而，使用 `let` 和 `const`，有一个称为暂时死区（TDZ）的概念。意思是说由let/const声明的变量，当它们包含的词法环境(Lexical Environment)被实例化时会被创建，但只有在变量的词法绑定(LexicalBinding)已经被求值运算后，才能够被访问;
* 显示使用 `var` 以及 `let` 如何解决它的常见问题，以及保持 `var` 的解决方案;
* 应尽可能避免使用 `var`，并且更喜欢 `const` 作为所有变量的默认声明语句，除非它们稍后会被重新分配，那就应当使用 `let`。

## 额外参考

* [`let` vs `const`](https://wesbos.com/let-vs-const/)

<!-- tags: (javascript) -->
