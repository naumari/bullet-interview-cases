### 如何在React中使用prop验证？

#### Answer

当应用程序在开发模式下运行时，React将自动检查我们在组件上设置的所有prop，以确保它们是正确的数据类型。对于不正确的数据类型，它将在控制台中为开发模式生成警告消息。
由于性能影响，在生产模式下不会被打包到最终的代码中。所需的prop也用`isRequired`定义。

例如, 可以定义 `propTypes` :

```js
import PropTypes from "prop-types"

class User extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }

  render() {
    return (
      <h1>Welcome, {this.props.name}</h1>
      <h2>Age, {this.props.age}
    )
  }
}
```

#### Good to hear

* 可以自定义 `propTypes`。
* 使用`propTypes`不是强制性的。但是，这是一个很好的做法，可以减少错误。

##### Additional links

<!-- tags: (react) -->

<!-- expertise: (2) -->
