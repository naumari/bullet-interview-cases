# 什么是 focus ring? 处理它们的正确解决方案是什么

## 参考答案

focus ring 是可聚焦元素（如按钮和锚标记）的可见轮廓。在不同游览器内核有着不同的样式，但通常它在元素周围显示为蓝色轮廓，表示它目前正在聚焦。

在过去，许多人在元素上指定 `outline：0;` 来移除focus ring。但是，这会导致键盘用户的可访问性问题，因为焦点状态可能不明确。但是，如果未指定，则只会在元素周围显示一个毫无吸引力的蓝色环。

最近，Bootstrap等框架选择使用更具吸引力的“box-shadow”轮廓来替换默认的焦点环。但是，这仍然不适合鼠标用户。

最好的解决方案是即将推出的伪选择器 `：focus-visible`，它现在可以用JavaScript来实现。如果用户使用键盘并且为鼠标用户隐藏它，它将仅显示对焦环。这保持了鼠标使用的美感和键盘使用的可访问性。

## 关键点

## 额外参考

* [:focus-visible](https://css-tricks.com/focus-visible-and-backwards-compatibility/)

<!-- tags: (css) -->

