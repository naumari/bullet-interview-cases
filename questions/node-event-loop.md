### 在Node.js中的event loop是什么?

#### Answer

事件循环是用来处理所有异步回调。回调在循环中排队，而其他代码运行，并且在收到每个代码的响应时将逐个运行。

#### Good to hear

* 事件循环允许Node.js执行非阻塞I / O操作，尽管JavaScript是单线程的。

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

<!-- tags: (node,javascript) -->

<!-- expertise: (2) -->
