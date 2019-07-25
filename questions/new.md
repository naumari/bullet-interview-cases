# 如何实现一个 `new`

## Answer

```js
function usrNew (constructor, ...arg) {
    let _obj = {}

    Object.setPrototypeOf(obj, constructor.prototype)
    constructor.apply(_obj, arg)
    return _obj
}
```

或者

```js
function usrNew (constructor, ...arg) {
    let _obj = Object.create(constructor.prototype)

    constructor.apply(_obj, arg)
    return _obj
}
```

## Good to hear

* 对于 `prototype` 的处理。

## Additional links

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
