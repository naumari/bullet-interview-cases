### DOM 是什么?

#### Answer

DOM（文档对象模型）是一种跨平台的API，它将HTML和XML文档视为由节点组成的树结构。本质上这些节点（例如元素和文本节点）是可以以编程方式操作的对象，对它们进行的任何可见更改都会在文档中实时反映。在浏览器中，此API可供JavaScript使用，其中可以操纵DOM节点以更改其样式，内容，文档中的位置或通过事件进行交互。

#### Good to hear

* DOM的设计不依赖于任何特定的编程语言，通过一直的API来表示文档的结构；
* 随着页面加载，DOM在浏览器中逐步构建，这就是为什么脚本通常放在页面底部，或带有`defer`属性的`<head>`或者在DOMContentLoaded`事件监听器内。 应该在构造DOM之后运行操纵DOM节点的脚本以避免错误；
* `document.getElementById（）`和`document.querySelector（）`是选择DOM节点的常用函数；
* 将`innerHTML`属性设置为新值会通过HTML解析器运行字符串，从而提供一种将动态HTML内容附加到节点的简便方法。

##### Additional links

* [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)

<!-- tags: (html,javascript) -->

<!-- expertise: (1) -->
