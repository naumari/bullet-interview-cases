# 在 JavaScript 中的真值和假值都代表什么

## Answer

值是truthy或falsy，具体取决于它在布尔上下文中的计算方式。从本质上讲，它们是在执行某些操作时被强制为“true”或“false”的值。

在 Javascript 中存在6个假值：

* `false`
* `undefined`
* `null`
* `""` (空字符串)
* `NaN`
* `0` (包括 `+0` 和 `-0`)

其他值都会被认为是truthy。

```js
Boolean("") // false
Boolean([]) // true
```

使用逻辑运算符`!`是一个快捷方式。使用`！`可以将一个值转换为它的反布尔值（即，不是false为真），并且可以通过`！`再次转换回来，从而有效地将值转换为布尔值。

```js
!!"" // false
!![] // true
```

## Good to hear

## Additional links

* [Truthy on MDN](https://developer.mozilla.org/en/docs/Glossary/Truthy)
* [Falsy on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
