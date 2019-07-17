### 在React中 portals 是什么?

#### Answer

Portal是将子项呈现为存在于父组件的DOM层次结构之外的DOM节点的推荐方法。Portal是将子节点渲染在父组件的DOM层次结构之外的推荐方法。

```js
ReactDOM.createPortal(child, container)
```

第一个参数（`child`）是任何可渲染的React子元素，例如元素，字符串或片段。 第二个参数（`container`）是一个DOM元素。

#### Good to hear

##### Additional links

* [React docs on Portals](https://reactjs.org/docs/portals.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
