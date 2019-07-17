### 什么是高阶组件？

#### Answer

高阶组件（HOC）是一个将组件作为参数并返回新组件的函数。这是一种源自React组成特性的模式。高阶组件类似于 **pure components** 因为它们接受任何动态提供的子组件，但它们不会修改或复制其输入组件中的任何行为。

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent)
```

#### Good to hear

* 它们可用于状态抽象和操作，控制 prop，优先渲染等。

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (2) -->
