### 如何避免回调地狱?

<block-code>
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        getMoreData(d, function(e) {
          // ...
        })
      })
    })
  })
})
</block-code>

#### Answer

重构函数以返回promises并使用<code>async / await</code>通常是最好的选择。它们不会向函数提供导致深度嵌套的回调，而是返回一个可以“等待”的承诺，并在数据到达后解析，允许以类似同步的方式执行下一行代码。

<block-code>
async function asyncAwaitVersion() {
  const a = await getData()
  const b = await getMoreData(a)
  const c = await getMoreData(b)
  const d = await getMoreData(c)
  const e = await getMoreData(d)
  // ...
}
</block-code>

#### Good to hear

作为一个高效的JavaScript开发人员，您必须避免不断增长的缩进级别，生成干净且可读的代码并能够处理复杂的流程。
