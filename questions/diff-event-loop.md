# 浏览器和 Node 事件循环的区别

## Answer

### 游览器

关于微任务和宏任务在浏览器的执行顺序是这样的：

执行当前的 macroTask（宏任务），紧接着会执行完当前的 microTask（微任务）

```js
for (macroTask of macroTaskQueue) {
    // 1. 处理 macroTask
    handleMacroTask();

    // 2. 处理当前 microTaskQueue 所有 microTask
    for (microTask of microTaskQueue) {
        handleMicroTask(microTask);
    }
}
```

### Node

Node 的事件循环是 libuv 实现的，引用一张官网的图，在 Node 11 以前，macroTask 执行顺序是这样的：

* timers定时器：本阶段执行已经安排的 setTimeout() 和 setInterval() 的回调函数;
* pending callbacks待定回调：执行延迟到下一个循环迭代的 I/O 回调;
* idle, prepare：仅系统内部使用;
* poll 轮询：检索新的 I/O 事件;
* 执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，它们由计时器和 setImmediate() 排定的之外），其余情况 node 将在此处阻塞;
* check 检测：setImmediate() 回调函数在这里执行;
* close callbacks 关闭的回调函数：一些准备关闭的回调函数，如：socket.on('close', ...)。

每当执行完一个阶段的所有的 macroTask，执行完nextTick队列里面的内容，然后执行完微任务队列的内容。

Node 11以后，和浏览器的行为统一了，都是每执行一个宏任务就执行完微任务队列。

## Good to hear

* node 版本与 event loop 的关联

## Additional links

* [模拟实现 JS 引擎：深入了解 JS机制 以及 Microtask and Macrotask](https://juejin.im/post/5c4041805188252420629086)
* [浏览器与Node的事件循环(Event Loop)有何区别](https://juejin.im/post/5c337ae06fb9a049bc4cd218#heading-12)

<!-- tags: (node) -->

<!-- expertise: (1) -->
