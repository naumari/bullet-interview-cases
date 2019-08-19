# '+' 和 '~' 这两个兄弟选择之前有什么不同

## 参考答案

通用选择器 `~` 选择所有指定元素的兄弟元素。

以下示例选择所有`<p>`元素，它们是`<div>`元素的兄弟：

相邻的兄弟选择器`+`选择所有与指定元素相邻的兄弟元素。

```html
div ~ p {
  background-color: blue;
}

div + p {
  background-color: red;
}

<div></div>
<p>Hi world</p>
<p>Hello world</p>
```

## 关键点

## 额外参考

* [W3School's CSS Combinators Page](https://www.w3schools.com/css/css_combinators.asp)
* [Mozilla's Combinators and groups of selectors page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)

<!-- tags: (css) -->

<!-- expertise: (2) -->
