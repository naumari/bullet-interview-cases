# 如何实现一个 `instanceof`

```es6
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
```

## 参考答案

`instanceof` 运算符用于测试构造函数的 `prototype` 属性是否出现在对象的原型链中的任何位置

```es6
function usrInstanceOf (obj, proto) {
    let _proto = obj.__proto__

    while(_proto !== null) {
        if (_proto === proto.prototype) return true
        _proto = _proto.__proto__
    }

    return false
}

console.log(usrInstanceOf(auto, Car));
// expected output: true

console.log(usrInstanceOf(auto, Object));
// expected output: true
```

## 关键点

## 额外参考

<!-- tags: (javascript) -->

<!-- expertise: (0) -->
