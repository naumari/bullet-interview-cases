### 写 React / Vue 项目时为什么要在列表组件中写 key，它是什么？其作用是什么？

#### Answer

Key是一种特殊的字符串属性，可帮助React识别哪些项已被更改，添加或删除。它们在渲染数组元素时使用，用于赋予元素一个稳定的标识。每个元素的键必须是唯一的（例如，来自数据或索引的ID作为最后的手段）。

Key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度。

```js
const todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>)
```

* 如果列表中每项的顺序可能会发生变化，则不建议使用索引作为键，因为它可能会对性能产生负面影响，并可能导致组件状态出现问题；
* 如果将列表项作为单独的组件提取，则在列表组件上应用Key而不是`<li>`标签上。

#### Good to hear

* Key为集合中的元素提供稳定的标识，并帮助React识别更改；
* 如果列表中项目的顺序可能会更改，则应避免使用索引作为键；
* 如果将列表项作为单独的组件提取，则在列表组件上应用Key而不是`<li>`标签上。

##### Additional links

* [React docs on Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

<!-- tags: (react,javascript) -->

<!-- expertise: (1) -->
