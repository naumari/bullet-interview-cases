# callback 是什么?你能否写一个简单的例子

## Answer

回调是作为参数传递给另一个函数的函数，该函数在事件发生或某个任务完成后执行，通常在异步代码中使用。回调函数稍后由一段代码调用，但可以在初始化时声明而不被调用.

例如，事件侦听器是异步回调，仅在发生特定事件时执行。

```js
function onClick() {
  console.log("The user clicked on the page.")
}
```

但是，回调也可以是同步的。下面的 `map` 函数接受一个回调函数，该函数为循环的每次迭代（数组元素）同步调用。

```js
const map = (arr, callback) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i))
  }
  return result
}
map([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]
```

## Good to hear

* 函数是JavaScript中的第一类对象;
* Callbacks vs Promises。

## Additional links

* [React docs on `setState`](https://reactjs.org/docs/react-component.html#setstate)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
