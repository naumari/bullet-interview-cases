### 执行以下函数会得到什么？

```js
function greet() {
  return
  {
    message: "hello"
  }
}
```

#### Answer

由于JavaScript的自动分号插入（ASI），编译器在`return`关键字后放置一个分号，因此返回`undefined`而不会抛出错误。

#### Good to hear

* 自动分号放置可能会导致耗时的错误

##### Additional links

* [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
