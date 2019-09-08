# 使用flexbox，创建一个3列布局，其中每列占据容器的“col - {n} / 12”比率

```html
<div class="row">
  <div class="col-2"></div>
  <div class="col-7"></div>
  <div class="col-3"></div>
</div>
```

## 参考答案

将 `.row` 父项设置为 `display：flex;` 并使用 `flex` 简写属性为列类提供与其比值相对应的 `flex-grow` 值。

```css
.row {
  display: flex;
}

.col-2 {
  flex: 2;
}

.col-7 {
  flex: 7;
}

.col-3 {
  flex: 3;
}
```

## 关键点

## 额外参考

* [MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<!-- tags: (css) -->