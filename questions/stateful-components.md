# 在 React 中 Stateful class component 是什么

## Answer

Stateful class component 是一种行为取决于其状态的组件。这意味着如果给出相同的prop，则组件的两个单独实例不一定会呈现相同的输出，这与纯函数组件不同。

```js
// Stateful class component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    // ...
  }
}

// Stateful function component
function App() {
  const [count, setCount] = useState(0)
  return // ...
}
```

## Good to hear

* 有状态组件具有它们所依赖的内部状态;
* 有状态组件是使用有状态Hook的类组件或功能组件;
* 有状态组件的状态在构造函数中初始化或使用 `useState()`。

## Additional links

* [React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (0) -->
