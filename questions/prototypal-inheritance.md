### 原型继承与经典继承有何不同？

#### Answer

在经典继承范例中，对象实例从类继承它们的属性和函数，该类充当对象的蓝图。通常使用构造函数和`new`关键字创建对象实例。

在原型继承范例中，对象实例直接从其他对象继承，通常使用工厂函数或 `Object.create()` 创建。

```
Object.create = function (proto) {
    function F() {}
    F.prototype = proto;

    return new F();
};
```

#### Good to hear

##### Additional links

* [MDN docs for inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
