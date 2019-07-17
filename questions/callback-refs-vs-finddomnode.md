### 为什么推荐使用 callback refs 而非 findDOMNode()，?

#### Answer

callback refs 比<code>findDOMNode</code>API更受欢迎，因为<code>findDOMNode</code>阻止了将来React的某些改进。

<block-code>
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
</block-code>

#### Good to hear

* Callback refs 优于<code>findDOMNode</code>。