### 什么是事件委托，为什么它有用？ 你能举例说明如何使用它吗？

#### Answer

主要用于解决事件出来程序过多的问题。事件委托主要是利用了时间冒泡，只指定一个事件处理程序，就可以管理某一类的所有事件。

DOM事件通过`Event.target`来提供触发事件元素的有用信息。同时允许父元素来进行相关处理，就像是目标元素正在侦听事件一样，而不是父元素的所有子元素或父元素本身。

主要有两点好处:

* 它只需要注册一个事件监听器来处理所有元素，从而提高性能并减少内存消耗；
* 如果元素动态添加到父元素，则无需为它们注册新的事件侦听器。

```
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", handleButtonClick)
})
```

```
document.addEventListener("click", e => {
  if (e.target.closest("button")) {
    handleButtonClick()
  }
})
```

#### Good to hear

* 事件捕获以及事件冒泡的区别

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Event Delegation](https://davidwalsh.name/event-delegate)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
