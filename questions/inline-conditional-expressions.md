### 什么是内联条件表达式？

#### Answer

由于JSX元素树是一个大表达式，因此无法在其中嵌入语句。所以在元素树中使用条件表达式来代替语句。

例如

<!-- prettier-ignore -->
```js
function App({ messages, isVisible }) {
  return (
    <div>
      if (messages.length > 0) {
        <h2>You have {messages.length} unread messages.</h2>
      } else {
        <h2>You have no unread messages.</h2>
      }
      if (isVisible) {
        <p>I am visible.</p>
      }
    </div>
  )
}
```

逻辑运算符 `&&` 和三元 `？：` 运算符替换 `if` /`else` 语句。

```js
function App({ messages, isVisible }) {
  return (
    <div>
      {messages.length > 0 ? (
        <h2>You have {messages.length} unread messages.</h2>
      ) : (
        <h2>You have no unread messages.</h2>
      )}
      {isVisible && <p>I am visible.</p>}
    </div>
  )
}
```

#### Good to hear

##### Additional links

* [React docs on Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
