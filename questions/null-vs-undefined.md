### `null`以及`undefined`之间有什么不同?

#### Answer

`null`与`undefined`之间最核心的区别是，`null`是显示的，而`undefined`是隐式的。当属性不存在或者变量没有赋值时，该值为`undefined`。`null`被设置为明确指示“无值”的值。

#### Good to hear

* `typeof undefined` 会得到 `"undefined"`；
* `typeof null` 得到 `"object"`。但是，它仍然是一个原始值，这被认为是JavaScript中的实现错误。
* `undefined == null` 会得到 `true`.

##### Additional links

* [MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
