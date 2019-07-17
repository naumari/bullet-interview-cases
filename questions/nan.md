### 为什么`NaN === NaN`会得到`false`?

#### Answer

与任何比较运算符进行比较时，`NaN`（Not-a-Number）是唯一不等于自身的值。`NaN`通常是无意义的数学计算的结果，因此两个`NaN`值没有任何意义被认为是平等的。

#### Good to hear

* `isNaN()`函数会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是`NaN`进行判断。`Number.isNaN()`该方法不会强制将参数转换成数字，只有在参数是真正的数字类型，且值为`NaN`的时候才会返回`true`；
* `const isNaN = x => x !== x`。

##### Additional links

* [MDN docs for `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
