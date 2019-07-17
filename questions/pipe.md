### 创建一个函数 `pipe`，它返回一个接受一个参数的函数来执行从左到右的函数组合。

```js
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) // 19; addOne(double(square(3)))
```

#### Answer

使用rest运算符`...`收集所有提供的参数，并返回一个使用`Array.prototype.reduce（）`的一元函数，在返回最终值之前通过一系列函数运行该值。

```js
const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
```

#### Good to hear

* 函数组合是将两个或多个函数组合以产生新函数的过程。

##### Additional links

* [What is function composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
