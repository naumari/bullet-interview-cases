# 你能描述 CSS 优先级是如何工作的吗

## 参考答案

假设浏览器已经确定了元素的规则集，则为每个规则分配一个值矩阵，这些值对应于以下内容：

* 内联规则（二进制 -  1或0）
* id选择器的数量
* 类，伪类和属性选择器的数量
* 标签和伪元素选择器的数量

当比较两个选择器时，比较是基于每行进行的（例如，id选择器总是高于任何数量的类选择器，因为id具有比类更高的优先级）。
在多个规则之间具有相同优先级的情况下，页面样式表中最后出现的规则被认为更具体，因此应用于元素。

## 关键点

* 优先级矩阵: [inline, id, class/pseudo-class/attribute, tag/pseudo-element];
* 相同优先级下，页面样式表中最后出现的规则生效。

## 额外参考

* [CSS Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

<!-- tags: (css) -->
