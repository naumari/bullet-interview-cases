# 写 Vue 项目时为什么要在列表组件中写 key，其作用是什么

## 参考答案

key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

但是由于 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。所以如果遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升，可以选择不加 key 属性。

在 Vue 源码 中，主要涉及两个函数 `sameVnode`，`patchVnode`

```es6
function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}
```

`sameVnode` 在判断是否是同一个 Vnode 时候，会先判断 `key` 的值。

`patchVnode` 会依据 Vnode 的不同节点类型以及子节点的类型，对其进行复用更新。

## 关键点

* `key` 在 diff 时的作用;
* 是否可以不添加 `key`。

## 额外参考

* [组件更新](https://ustbhuangyi.github.io/vue-analysis/reactive/component-update.html#%E6%96%B0%E6%97%A7%E8%8A%82%E7%82%B9%E4%B8%8D%E5%90%8C)
* [key](https://cn.vuejs.org/v2/api/#key)

<!-- tags: (javascript、vue) -->