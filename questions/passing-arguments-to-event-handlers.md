### 在React中如何将参数传递给事件处理程序或回调？

#### Answer

您可以使用箭头函数来包装事件处理程序并传递参数，这相当于调用`bind`：

```js
<button onClick={() => this.handleClick(id)} />
<button onClick={this.handleClick.bind(this, id)} />
```

#### Good to hear

##### Additional links

* [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
