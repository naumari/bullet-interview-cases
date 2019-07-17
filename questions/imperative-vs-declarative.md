### 命令式和声明式编程之间的区别。

#### Answer

这两种类型的编程大致可以概括为：

* 命令式: **how** 实现目标
* 声明式: **what** 应该实现

声明性编程的一个常见例子是CSS。开发人员指定CSS属性来描述应该是什么样子而不是如何实现它。至于 "how" 则是由浏览器抽象出来。
On the other hand, imperative programming involves the steps required to achieve something. In JavaScript, the differences can be contrasted like so:

另一方面，命令式编程包含实现某些目标所需的步骤。在JavaScript中，差异可以如下对比：

##### 命令式

```js
const numbers = [1, 2, 3, 4, 5]
const numbersDoubled = []
for (let i = 0; i < numbers.length; i++) {
  numbersDoubled[i] = numbers[i] * 2
}
```

我们手动循环遍历数组的数字，并将新索引指定为加倍的数字。

##### 声明式

```js
const numbers = [1, 2, 3, 4, 5]
const numbersDoubled = numbers.map(n => n * 2)
```

我们声明新数组映射到一个新数组，其中每个值都加倍。

#### Good to hear

* 声明性编程通常适用于函数和表达式。命令式编程经常使用语句并依赖于低级特性来完成修改，而声明式编程则强烈关注抽象和纯粹。
* 声明性编程更简洁，更容易一目了然。

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Declarative vs Imperative Programming](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
