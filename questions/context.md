### React 中 context 代表什么?

#### Answer

Context 提供了一种通过组件树传递数据的方法，而无需在每个级别手动传递 props。
例如，需要在应用程序中通过许多组件访问经过身份验证的用户，区域设置首选项，UI主题。

```js
const { Provider, Consumer } = React.createContext(defaultValue)
```

#### Good to hear

* Context 提供了一种通过 React 组件树传递数据的方法，而无需手动传递 props.
* Context 旨在为 React 组件树提供可共享的 _global_ 数据。
