### 如何确保 methods 在 React 组件类中具有正确的 `this` 上下文？

#### Answer

在JavaScript类中，默认情况下是不对方法进行绑定的。这意味着它们的`this`上下文可以更改（在事件处理程序的情况下，更改为正在侦听事件的元素），并且不会引用组件实例。为了解决这个问题，可以使用`Function.prototype.bind（）`来强制执行`this`上下文作为组件实例

```js
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  // Perform some logic
}
```

* `bind`方法可能很冗长，同时还需要定义一个`constructor`，所以通常首选新的公共类字段语法：

```js
handleClick = () => {
  console.log('this is:', this);
}

render() {
  return (
    <button onClick={this.handleClick}>
      Click me
    </button>
  );
}
```

* 您还可以使用内联箭头函数，使得`this`（指代组件实例）被保留：

```js
<button onClick={e => this.handleClick(e)}>Click me</button>
```

请注意，使用此技术会引起额外的重新渲染，因为在渲染时会创建新的函数引用, 如果将它传递给子组件会使得 `shouldComponentUpdate` / `PureComponent` 浅层相等检测来防止不必要的渲染这个能力失效。在性能很重要的情况下，最好在构造函数中使用`bind`，或者使用公共类字段语法方法，因为函数引用保持不变。

#### Good to hear

* 您可以将方法绑定到构造函数中的组件实例上下文，使用公共类字段语法或使用内联箭头函数。

##### Additional links

* [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)
* [React docs on Passing Functions to Components](https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
