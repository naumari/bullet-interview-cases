# 为什么推荐使用 callback refs 而非 findDOMNode()

## Answer

callback refs 比 `findDOMNode` API更受欢迎，因为 `findDOMNode` 阻止了将来React的某些改进。

```es6
// Legacy approach using findDOMNode()
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView()
  }

  render() {
    return <div />
  }
}

// Recommended approach using callback refs
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView()
  }

  render() {
    return <div ref={node => (this.node = node)} />
  }
}
```

## Good to hear

* Callback refs 优于 `findDOMNode`。

## Additional links

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
