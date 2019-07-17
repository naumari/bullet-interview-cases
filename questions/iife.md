### 将JavaScript源文件的全部内容都包装在立即调用的函数中的原因是什么？

#### Answer

这种技术在JavaScript库中非常常见。它围绕文件的整个内容创建一个闭包，创建一个私有命名空间，从而有助于避免不同JavaScript模块和库之间潜在的名称冲突。立即调用该函数，以便为命名空间（库名称）分配函数的返回值。

```js
const myLibrary = (function() {
  var privateVariable = 2
  return {
    publicMethod: () => privateVariable
  }
})()
privateVariable // ReferenceError
myLibrary.publicMethod() // 2
```

#### Good to hear

* 用于许多JavaScript库
* 创建私有的命名空间

##### Additional links

* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
