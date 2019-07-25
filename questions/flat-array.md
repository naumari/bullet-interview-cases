# 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组

## Answer

* 利用递归

```js
Array.prototype.flat= function() {
    return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])));
}

Array.prototype.unique = function() {
    return [...new Set(this)]
}

console.log(arr.flat().unique().sort((a, b) => a - b))
```

* 利用 toString

```js
[...new Set(arr.toString().split(','))].sort((a,b) => a-b)
```

## Good to hear

## Additional links

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
