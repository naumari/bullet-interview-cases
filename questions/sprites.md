### 使用CSS sprites有什么好处？如何使用它们？

#### Answer

CSS sprites将多个图像组合成一个图像，从而减少了浏览器HTTP请求的数量来缩短了加载时间。即使在新的HTTP / 2协议下，这仍然是正确的。

在HTTP / 1.1下，每个TCP连接最多允许一个请求。使用HTTP / 1.1，现代浏览器打开多个并行连接（2到8之间），但它是有限的。使用HTTP / 2，浏览器和服务器之间的所有请求都在一个TCP连接上复用。这意味着可以减少打开和关闭多个连接的成本，从而更好地使用TCP连接，并降低客户端和服务器之间延迟对用户体验的影响。然后可以在同一TCP连接上并行加载数十个图像。但是，根据测试结果，尽管HTTP / 2比HTTP / 1.1 要快50%，但在大多数情况下，加载 Sprites 几何的速度仍然比单个图像要快。

要在CSS中使用spritesheet，可以使用某些属性，例如 `background-image`，`background-position` 和 `background-size`来最终改变元素的背景。

#### Good to hear

* `background-image`, `background-position`, `background-size` 被用来生成 Sprites。

##### Additional links

* [CSS Sprites explained by CSS Tricks](https://css-tricks.com/css-sprites/)

<!-- tags: (css) -->

<!-- expertise: (1) -->
