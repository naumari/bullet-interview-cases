### 什么是虚拟DOM，为什么它被广泛地使用在库/框架中？

#### Answer

虚拟DOM（VDOM）是一种映射，利用JavaScript对象形式来表示真实DOM。这些对象具有描述它们所代表的真实DOM节点的属性：节点名称，其属性和子节点。

```
<div class="counter">
  <h1>0</h1>
  <button>-</button>
  <button>+</button>
</div>
```

用虚拟DOM表示可能如下所示：

```js
{
  nodeName: "div",
  attributes: { class: "counter" },
  children: [
    {
      nodeName: "h1",
      attributes: {},
      children: [0]
    },
    {
      nodeName: "button",
      attributes: {},
      children: ["-"]
    },
    {
      nodeName: "button",
      attributes: {},
      children: ["+"]
    }
  ]
}
```

一般库/框架使用虚拟DOM作为提高性能的手段。当应用程序的状态发生变化时，真实的DOM节点需要相应地做出变化。但是，与重新计算虚拟DOM相比，更改真实DOM节点的成本很高。相比之下，可以非常快速地将先前的虚拟DOM与新的虚拟DOM进行比较。

一旦旧的VDOM和新的VDOM之间的变化已经由框架的差异引擎计算得出，那么真正的DOM可以在最短的时间内有效地得到更新以匹配应用程序的新状态。

#### Good to hear

* 为什么访问DOM会如此昂贵。

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [The difference between Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
