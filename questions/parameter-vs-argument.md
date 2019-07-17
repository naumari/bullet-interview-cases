### 在Javascript中parameter与argument之间有什么区别?

#### Answer

parameter代表形参是函数定义的变量名，而argument代表实参是调用函数时赋予函数的值。

```js
function myFunction(parameter1, parameter2) {
  console.log(arguments[0]) // "argument1"
}
myFunction("argument1", "argument2")
```

#### Good to hear

* `arguments` 是一个类数组的对象，包含有关提供给调用函数的参数的信息；
* `myFunction.length` 描述函数的参数个数（它有多少个参数，无论它提供了多少个参数）。

##### Additional links

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
