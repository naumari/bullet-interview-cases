# 纯函数是什么

## Answer

纯函数是满足以下两个条件的函数：

* 给定相同的输入，该函数返回相同的输出。
* 该函数不会在函数范围之外引起副作用（即修改函数外的数据或提供给函数的数据）。

纯函数可以在函数内改变局部数据，只要它满足上述两个条件即可。

### 纯净

```es6
const a = (x, y) => x + y
const b = (arr, value) => arr.concat(value)
const c = arr => [...arr].sort((a, b) => a - b)
```

### 非纯净

```es6
const a = (x, y) => x + y + Math.random()
const b = (arr, value) => (arr.push(value), arr)
const c = arr => arr.sort((a, b) => a - b)
```

## Good to hear

* 由于其可靠性，纯函数更容易理解;
* 除非明确地产生副作用（即`setInnerHTML`），否则所有函数都应该是纯函数;
* 如果函数未返回值，则表明它正在引起副作用。

## Additional links

* [Pure functions in JavaScript](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
