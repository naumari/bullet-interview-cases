# 将回调函数作为 `setState` 的参数有什么作用

## 参考答案

当 `setState` 完成状态更新，且组件被渲染之后，将调用回调函数。由于 `setState` 是异步的，因此回调函数用于任何后期操作。

```es6
setState({ name: "sudheer" }, () => {
  console.log("The name has updated and component re-rendered")
})
```

## 关键点

* 在 `setState` 完成后调用回调函数，并用于任何后期操作;
* 建议使用生命周期方法而不是此回调函数。

## 额外参考

* [React docs on `setState`](https://reactjs.org/docs/react-component.html#setstate)

<!-- tags: (react,javascript) -->
