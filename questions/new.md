# 如何实现一个 `new`

## 参考答案

```es6
function usrNew (constructor, ...arg) {
    let _obj = {}

    Object.setPrototypeOf(obj, constructor.prototype)
    constructor.apply(_obj, arg)
    return _obj
}
```

或者

```es6
function usrNew (constructor, ...arg) {
    let _obj = Object.create(constructor.prototype)

    constructor.apply(_obj, arg)
    return _obj
}
```

## 关键点

* 对于 `prototype` 的处理。

## 额外参考

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
