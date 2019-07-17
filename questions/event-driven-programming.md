### 什么是事件驱动编程?

#### Answer

事件驱动编程是一种范例，主要涉及两个部分：构建发出和接收事件的应用程序。当程序发出事件时，程序通过将已经注册到该元素的事件运行在上下文的回调函数来响应，并将相关数据传递给该函数。使用此模式，即使没有订阅任何函数，也可以将事件发送出来而不会抛出错误。

一个常见的例子是监听DOM事件的元素模式，例如`click`和`mouseenter`，其中在事件发生时运行回调函数。

```js
document.addEventListener("click", function(event) {
  // This callback function is run when the user
  // clicks on the document.
})
```

脱离DOM的上下文，此模式可能会变为

```js
const hub = createEventHub()
hub.on("message", function(data) {
  console.log(`${data.username} said ${data.text}`)
})
hub.emit("message", {
  username: "John",
  text: "Hello?"
})
```

通过这个实现，`on`是_subscribe_到事件的方式，而`emit`是_publish_事件的方式。

#### Good to hear

* 遵循发布 - 订阅模式；
* 通过运行订阅该事件的任何回调函数来响应发生的事件。

##### Additional links

* [MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)
* [Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
