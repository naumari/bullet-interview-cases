# `==` 和 `===` 之间有什么不同

## 参考答案

（`===`）相当于在执行严格地检查，这意味着类型和值必须相同。另一方面，（`==`）首先执行类型强制，以便两个操作数具有相同的类型，然后应用严格的比较。

## 关键点

* 尽量使用(`===`)来测试相等性，因为松散相等(`==`)可能会产生不直观的结果;
* 类型强制意味着将值转换为相同的类型，可能会产生错误的结果。

## 额外参考

* [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

<!-- tags: (javascript) -->
