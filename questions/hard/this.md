# 在Javascript中，`this` 指针是什么？它是怎样工作的

## 参考答案

`this` 机制提供了更优雅的方式来隐含地“传递”一个对象引用，导致更加干净的API设计和更容易的复用。
`this` 不是编译时绑定，而是运行时绑定。它依赖于函数调用的上下文条件。`this` 绑定与函数声明的位置没有任何关系，而与函数被调用的方式紧密相连。
它指针表示执行函数的上下文的对象。

### Object literals

```es6
var myObject = {
  property: this,
  regularFunction: function() {
    return this
  },
  arrowFunction: () => {
    return this
  },
  iife: (function() {
    return this
  })()
}

myObject.regularFunction() // 指向 myObject
myObject["regularFunction"]() // 指向 myObject

myObject.property // 指向 lexical `this` 而非 myObject
myObject.arrowFunction() // 指向 lexical `this` 而非 myObject
myObject.iife // 指向 lexical `this` 而非 myObject
const regularFunction = myObject.regularFunction
regularFunction() // 指向 lexical `this` 而非 myObject
```

### Event listeners

`this` refers to the element listening to the event.

```es6
document.body.addEventListener("click", function() {
    console.log(this) // document.body
})
document.body.addEventListener("click", () => {
    console.log(this) // 指向 lexical `this` 而非 document.body
})
```

### Constructors

```es6
class Example {
  constructor() {
    console.log(this) // myExample
  }
}
const myExample = new Example()
```

### Manual

使用`call` 和 `apply` 可以强制改变 `this` 的指向，使它指向作为第一个参数传递的对象。

```es6
var myFunction = function() {
  return this
}
myFunction.call({ customThis: true }) // { customThis: true }
```

### Unwanted `this`

因为`this`可以根据范围而改变，所以当使用常规函数时它可能具有意外的值。

```es6
var obj = {
  arr: [1, 2, 3],
  doubleArr() {
    return this.arr.map(function(value) {
      // this is now this.arr
      return this.double(value)
    })
  },
  double(value) {
    return value * 2
  }
}
var otherObj = {
  arr: [1, 2, 3],
  doubleArr() {
    return this.arr.map(value => {
      // this 指向 otherObj
      return this.double(value)
    })
  },
  double(value) {
    return value * 2
  }
}
obj.doubleArr() // 1, 2, 3
```

## 关键点

* 在严格模式在，全局的 `this` 为 `undefined`，但是在非严格模式下 `this` 指向全局对象（游览器中是 `window`）;
* `Function.prototype.call` 和 `Function.prototype.apply` 将执行函数的 `this` 上下文设置为第一个参数;
* `Function.prototype.bind` 返回一个新函数，强制执行 `this` 上下文作为第一个参数，不能被其他函数更改;
* 如果一个函数要求根据它的调用方式改变它的 `this` 上下文，你必须使用 `function` 关键字。当你想要“this”作为周围（词汇）上下文时，请使用箭头函数。

## 额外参考

* [`this` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

<!-- tags: (javascript) -->
