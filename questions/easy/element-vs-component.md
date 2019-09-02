# 在 React 中元素和组件之间有什么区别

## 参考答案

元素通常用来表示DOM节点或组件的纯JavaScript对象。元素是纯粹的，从不转换，并且创建的代价很小。

组件是函数或类。组件可以具有state并将props作为输入并返回元素树作为输出（尽管它们可以表示通用容器或包装器，并且不一定有DOM）。组件也可以在生命周期方法中组一些处理（例如，AJAX请求，DOM突变，与第三方库的接口），并且创建的代价可能很大。

```es6
const Component = () => "Hello"
const componentElement = <Component />
const domNodeElement = <div />
```

## 关键点

* 元素是不可变的普通对象，用于描述要呈现的DOM节点或组件;
* 组件可以是类或函数，它将props作为输入并返回元素树作为输出。

## 额外参考

* [React docs on Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
* [React docs on Components and Props](https://reactjs.org/docs/components-and-props.html)

<!-- tags: (react,javascript) -->
