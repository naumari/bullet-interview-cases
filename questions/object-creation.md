# 在 Javascript 中有哪些方法能够创建一个对象?他们适用于什么场景下

## 参考答案

### Object 语法

通常用于对出现过的数据进行缓存。

```es6
const person = {
  name: "John",
  age: 50,
  birthday() {
    this.age++
  }
}
person.birthday() // person.age === 51
```

### 构造函数

通常在需要创建对象的多个实例时使用，每个实例都有自己的数据，而相互之间没有影响。在调用构造函数之前必须使用 `new` 运算符，否则将会改变全局对象。

```es6
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.birthday = function() {
  this.age++
}
const person1 = new Person("John", 50)
const person2 = new Person("Sally", 20)
person1.birthday() // person1.age === 51
person2.birthday() // person2.age === 21
```

### 工厂函数

创建一个类似于构造函数的新对象，但可以使用闭包存储私有数据，这样就使得新对象的方法，不需要 `this` 指针就可以访问内部数据。同时在调用函数或 `this` 关键字之前也不需要使用 `new`。工厂函数通常会抛弃原型的概念，并将所有属性和方法保留为对象的自有属性。

```es6
const createPerson = (name, age) => {
  const birthday = () => person.age++
  const person = { name, age, birthday }
  return person
}
const person = createPerson("John", 50)
person.birthday() // person.age === 51
```

### `Object.create()`

对新创建的对象的原型进行修改。

```es6
const personProto = {
  birthday() {
    this.age++
  }
}
const person = Object.create(personProto)
person.age = 50
person.birthday() // person.age === 51
```

第二个参数也可以提供给 `Object.create`，它充当要定义的新属性的描述符。

```es6
Object.create(personProto, {
  age: {
    value: 50,
    writable: true,
    enumerable: true
  }
})
```

## 关键点

* 原型是一个对象，主要用于从中父对象中继承属性和方法;
* 工厂函数通过闭包提供私有属性和方法，但增加内存使用量作为代价，虽然类没有私有属性或方法，但通过复用单个原型对象来减少内存影响。

### 额外参考

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
