# React中组件的生命周期可以分为那几个阶段

## 参考答案

组件生命周期主要有四个不同的阶段：

**Initialization**: 在此阶段，组件准备设置初始State和默认Prop;

**Mounting**: react组件已经挂载到DOM。此阶段涵盖了 `getDerivedStateFromProps` 和 `componentDidMount` 生命周期方法;

**Updating**: 在此阶段，组件以两种方式更新，发送新的Prop并更新State。此阶段包括 `getDerivedStateFromProps`，`shouldComponentUpdate`，`getSnapshotBeforeUpdate` 和 `componentDidUpdate` 生命周期方法;

**Unmounting**: 在最后阶段，需要将组件从DOM中卸载。此阶段包括 `componentWillUnmount` 生命周期方法;

**Error Handling**: 在此阶段，只要在渲染期间，生命周期方法或任何子组件的构造函数中出现错误，就会调用该组件。这个阶段包括`componentDidCatch` 生命周期方法。

<img alt="lifecycle phases" src="https://pbs.twimg.com/media/DZ-97vzW4AAbcZj.jpg:large" style="width: 100%"/>

## 关键点

## 额外参考

* [React v16 生命周期函数详解：如何、何时使用它们（React 组件生命周期的修订和最新指南）](https://fatge.github.io/2019/07/26/react-lifecycle/)

<!-- tags: (react) -->

