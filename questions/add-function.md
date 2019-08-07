# 请实现一个 add 函数，满足以下功能

```es6
add(1); // 1
add(1)(2); // 3
add(1)(2)(3); // 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
```

## Answer

```es6
function add(...args) {
    let fn = function(...fnArgs) {
        return add.apply(null, [...args, ...fnArgs])
    }
    fn.valueOf = function() {
        return args.reduce((a, b) => a + b)
    }
    return fn
}

const log = console.log
console.log = (value) => {
    log(+value)
}
```

## Good to hear

## Additional links

* [请实现一个 add 函数，满足以下功能](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/134)

<!-- tags: (问题所属类型，例如 javascript、css、html、react、vue) -->

<!-- expertise: (0,1,2) -->
<!-- Expertise levels:
	0: easy
	1: intermediate
	2: hard
-->
