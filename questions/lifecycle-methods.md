### React的生命周期方法有哪些？

#### Answer

`getDerivedStateFromProps`: 是进行初始化挂载、状态更新渲染前调用的最后一个方法。通常可以用来根据初始 props 来设置状态，它的返回值将会成为新状态的对象，或者返回null以不更新任何内容。 此方法也无权访问组件实例。以下是一些使用场景：

* 当 video 、audio 的 source 改变时，需要重置元素；
* Server 资源更新后需要恢复 UI 元素；
* 当内容改变时关闭相关元素。

`componentDidMount`: 首次渲染后执行，通常用于发生所有AJAX请求，DOM或状态更新，以及设置`eventListeners`。

`shouldComponentUpdate`: 决定组件是否将更新。默认情况下，它将会返回`true`。如果您确定在更新状态或prop后不需要渲染组件，则可以返回`false`值。它可以用来提高性能，因为它允许您在组件收到新prop时不用重新渲染。

`getSnapshotBeforeUpdate`: 发生在 render 之后，最新的渲染输出提交给 DOM 之前。也就是在`componentDidUpdate`之前，由于更新而发生组件呈现后立即调用。从此方法返回的任何值都将传递给`componentDidUpdate`。

`componentDidUpdate`: 它主要用于更新DOM以响应`prop`或`state`的变化。

`componentWillUnmount`: 它将用于取消任何传出网络请求，或删除与该组件关联的所有事件侦听器。

`componentDidCatch`: 用于错误边界，它是实现此方法的组件。它允许组件捕获`_child_`组件树中任何位置的JavaScript错误（在此组件下面），记录错误，并显示包含错误信息的UI。

#### Good to hear

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (1) -->
