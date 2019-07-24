# Array 的 `map()` 和 `forEach()` 之间有什么不同

## Answer

两种方法都遍历数组的元素。 `map` 通过调用每个元素上的回调函数并返回一个新数组，将每个元素映射到一个新元素。另一方面，`forEach` 为每个元素调用回调函数，但不返回新数组。`forEach` 通常在每次迭代时产生副作用时使用，而 `map` 是一种常见的函数编程技术。

## Good to hear

* 如果需要迭代数组并修改元素而不需要返回值来生成新数组，请使用`forEach（）`;
* `map` 是保持数据不可变的正确选择，其中原始数组的每个值都映射到一个新数组。

## Additional links

* [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
