### `rel =“noopener”`是什么？它的作用又是什么？

#### Answer

`rel =“noopener”`是`<a>`标签（超链接）中使用的属性。它可以防止页面具有`window.opener`属性，否则该属性将指向打开链接的页面，并允许从超链接打开的页面操作超链接所在的页面。

#### Good to hear

* `rel="noopener"` 适用于超链接；
* `rel="noopener"` 防止打开的链接操纵源页面。

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Open external anchors using rel="noopener"](https://developers.google.com/web/tools/lighthouse/audits/noopener)
* [About rel="noopener"](https://mathiasbynens.github.io/rel-noopener/)

<!-- tags: (html) -->

<!-- expertise: (1) -->
