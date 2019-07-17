<!-- ### What is CSS BEM? -->

### CSS BEM 是什么？

#### Answer

<!-- The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style. -->

<b>BEM</b>方法是<b>CSS</b>类的命名一种约定，通过定义命名空间来解决样式生效的作用域问题，从而使CSS更易于维护。
<b>B</b>代表一个独立的组件，可以跨项目重用，并充当子组件（元素）的“命名空间”。
<b>E</b>代表一个元素，当前元素的命名，块中的子元素是块的子元素。
<b>M</b>代表修饰符，它是对其结构的解释，当块或元素处于某种状态或结构或样式不同时，修饰符用作标记。

<block-code>
/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}
</block-code>
<!-- 
Here is an example with the class names on markup:

```html
<nav class="navbar">
  <a href="/" class="navbar__link navbar__link--active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>
```

In this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element.

Since Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.

```html
<a href="/" class="navbar__link is-active"></a>
```

These must be chained to the Element and never alone however, or there will be scope issues.

```css
.navbar__link.is-active {
}
``` -->

#### Good to hear

* CSS-in-JS等范围问题的替代解决方案

##### Additional links

* [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)

<!-- tags: (css) -->

<!-- expertise: (0) -->
