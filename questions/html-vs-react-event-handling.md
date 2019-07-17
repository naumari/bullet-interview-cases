### HTML和React事件处理有什么区别？

#### Answer

在HTML中，属性名称全部为小写，并且给出一个字符串，调用在某处定义的函数：

```html
<button onclick="handleClick()"></button>
```

在React中，属性名称是camelCase，并在花括号内传递函数引用：

```js
<button onClick={handleClick} />
```

在HTML中，可以返回`false`以防止默认行为，而在React中，必须显式调用`preventDefault`。

```html
<a href="#" onclick="console.log('The link was clicked.'); return false" />
```

```js
function handleClick(e) {
  e.preventDefault()
  console.log("The link was clicked.")
}
```

#### Good to hear

* HTML使用lowercase, React使用camelCase.

##### Additional links

* [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

<!-- tags: (react,javascript,html) -->

<!-- expertise: (1) -->
