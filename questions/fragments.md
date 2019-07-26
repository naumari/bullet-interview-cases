# React 中 Fragment 代表什么

## Answer

Fragment允许React组件在没有包装器的情况下返回多个元素，具体方法是在不向DOM添加额外元素的情况下对子元素进行分组。Fragment提供更好的性能，更低的内存使用率，更清晰的DOM，并且可以帮助处理某些CSS机制（例如表格，Flexbox和网格）。

```es6
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

// Short syntax supported by Babel 7
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```

## Good to hear

* Fragment只是对从组件返回的多个元素进行分组，而不在它们周围添加DOM元素。

## Additional links

* [React docs on Fragments](https://reactjs.org/docs/fragments.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (2) -->
