### 为什么将回调函数作为<code>setState</code>的参数？

#### Answer

当<code>setState</code>完成状态更新，且组件被渲染之后，将调用回调函数。由于<code>setState</code>是异步的，因此回调函数用于任何后期操作。

<block-code>
setState({ name: "sudheer" }, () => {
  console.log("The name has updated and component re-rendered")
})
</block-code>

#### Good to hear

* 在<code>setState</code>完成后调用回调函数，并用于任何后期操作。
* 建议使用生命周期方法而不是此回调函数。

##### Additional links

* [React docs on `setState`](https://reactjs.org/docs/react-component.html#setstate)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
