# NodeJS经常使用回调模式，如果在执行期间遇到错误，此错误作为回调的第一个参数传递。这种模式的优点是什么

```es6
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})
```

## Answer

优势在于:

* 如果不需要引用数据，则无需处理数据;
* 拥有一致的API可以带来更多的复用;
* 能够轻松调整回调模式，从而实现更易维护的代码。

从下面的示例中可以看出，如果没有错误，则调用回调，并将null作为其第一个参数。但是，如果出现错误，则创建一个Error对象，然后该对象将成为回调唯一的参数。这种回调函数模式可以使用户容易地知道是否发生了错误。

这种做法也称 _Node.js error convention_，这种回调实现称为 _error-first callbacks_。

```es6
var isTrue = function(value, callback) {
  if (value === true) {
    callback(null, "Value was true.")
  } else {
    callback(new Error("Value is not true!"))
  }
}

var callback = function(error, retval) {
  if (error) {
    console.log(error)
    return
  }
  console.log(retval)
}

isTrue(false, callback)
isTrue(true, callback)

/*
  { stack: [Getter/Setter],
    arguments: undefined,
    type: undefined,
    message: 'Value is not true!' }
  Value was true.
*/
```

## Good to hear

## Additional links

* [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
* [What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)

<!-- tags: (node,javascript) -->

<!-- expertise: (1) -->
