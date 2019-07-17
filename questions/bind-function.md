### 实现一个<code>bind</code>函数，它在功能上等同于<code>Function.prototype.bind</code>方法。

#### Answer

返回一个接受任意数量参数的函数，通过用其余的<code>...</code>运算符收集它们。
从该函数返回使用<code>Function.prototype.apply</code>调用fn的结果，将上下文和参数数组应用于函数。

<block-code>
const bind = (fn, context) => (...args) => fn.apply(context, args)
</block-code>

#### Good to hear

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
