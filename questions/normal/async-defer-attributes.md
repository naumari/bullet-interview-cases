# `script` 标签上 `defer` 与 `async` 属性的区别

## 参考答案

如果两个属性都不存在，则会按照顺序来加载并执行脚本，在这个过程中，会阻塞后续的DOM渲染。

`defer` 属性在文档仍在解析时下载脚本，但在执行之前一直等到文档完成解析，相当于在 `DOMContentLoaded` 事件调用前执行。所有 `defer` 脚本将按顺序执行之后触发 `DOMContentLoaded`。

`async` 属性在解析文档时下载脚本，下载完毕后就执行。`async` 脚本不一定按顺序执行。

注：以上属性仅在 `script` 具有 `src` 属性时有效。（例如非内联）

```html
<script src="myscript.js"></script>
<script src="myscript.js" defer></script>
<script src="myscript.js" async></script>
```

## 关键点

* 在 `<head>` 中放置一个 `defer` 脚本允许浏览器在页面仍在解析时下载脚本，因此比在 `</body>` 前放置脚本更好；
* 如果 `scripts` 的执行需要依赖彼此，可以使用 `defer`；
* 如果 `scripts` 的执行各自独立，可以使用 `async`；
* 如果 `scripts` 的执行必须需要 `DOM` 已经解析完成，但是又不必须在 `DOMContentLoaded` 的事件侦听器中，可以使用 `defer`。

## 额外参考

* [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

<!-- tags: (html) -->
