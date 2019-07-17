### 什么是严格模式（`'use strict'`），使用它会带来什么好处?

#### Answer

在JavaScript源文件的开头包含`'use strict'`可启用严格模式，该模式强制执行更严格的JavaScript代码解析和错误处理。 它被认为是一种很好的做法，并提供了很多好处，例如：

* 由于消除了 silent errors，因此调试更容易；
* 不允许重新定义变量；
* 防止无意间创建的全局变量；
* 与不在严格模式下运行的相同代码相比，通常会提供更高的性能；
* 简化 `eval` 和 `arguments`；
* 有助于提高JavaScript的安全性。

#### Good to hear

* 当 `this` 引用 `null` 或 `undefined` 的值时抛出错误；
* 无效的 `delete` 会引发异常；
* 禁止在ECMAScript的未来版本中定义某些语法。

##### Additional links

* [MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
