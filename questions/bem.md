# CSS BEM 是什么

## 参考答案

**BEM**方法是CSS类的命名一种约定，通过定义命名空间来解决样式生效的作用域问题，从而使CSS更易于维护。

* B代表一个独立的组件，可以跨项目重用，并充当子组件（元素）的“命名空间”;
* E代表一个元素，当前元素的命名，块中的子元素是块的子元素;
* M代表修饰符，它是对其结构的解释，当块或元素处于某种状态或结构或样式不同时，修饰符用作标记。

```css
/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}
```

## 关键点

* CSS-in-JS等范围问题的替代解决方案

## 额外参考

* [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)

<!-- tags: (css) -->

<!-- expertise: (0) -->
