### 什么是HTML5 Web存储？解释`localStorage`和`sessionStorage`。

#### Answer

使用HTML5，网页可以在用户的​​浏览器中本地存储数据。数据存储在名称/值对中，网页只能访问自己存储的数据。

**在生命周期方面 `localStorage` 与 `sessionStorage` 之间有什么不同:**

* 通过`localStorage`存储的数据是永久性的：它不会过期并保留在用户的计算机上，直到Web应用程序删除它或用户要求浏览器删除它。
* `sessionStorage`与存储数据的顶级窗口或浏览器选项卡具有相同的生命周期。当标签永久关闭时，通过`sessionStorage`存储的任何数据都将被删除。
**在存储范围方面 `localStorage` 和 `sessionStorage` 之间有什么不同:**
两种形式的存储都作用于文档源，因此具有不同来源的文档永远不会共享存储的对象。

* `sessionStorage`也是基于每个窗口的范围。具有来自同一来源的文档的两个浏览器选项卡具有单独的“sessionStorage”数据。
* 与`localStorage`不同，当在不同的选项卡中打开时，来自同一来源的相同脚本无法访问彼此的`sessionStorage`。

#### Good to hear

* 早些时候，这是用cookies完成的；
* 存储限制比使用cookie要大得多（至少5MB），而且速度更快；
* 数据永远不会传输到服务器，只有在客户端特别要求时才能使用。

##### Additional links

* [W3Schools - HTML5 Webstorage](https://www.w3schools.com/html/html5_webstorage.asp)

<!-- tags: (html) -->

<!-- expertise: (2) -->
