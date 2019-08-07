# 缓存清除的目的是什么，如何实现

## Answer

浏览器具有缓存网站上临时文件的能力，因此在切换页面或重新加载同一页面时不需要再次重新下载它们。服务器设置为 Cache-Control 以及 Expires，告诉浏览器在给定的时间内存储文件。这大大提高了网站速度并保留了带宽。

但是，当开发人员更改网站时，它可能会导致问题，因为用户的缓存仍然引用旧文件。

缓存清除是强制浏览器下载新文件的过程。这是通过将文件命名为与旧文件不同的文件来完成的。

强制浏览器重新下载文件的常用技术是将查询字符串附加到文件末尾。

例如
`src="js/script.js" => src="js/script.js?v=2"`

浏览器将其视为不同的文件，但无需更改文件名。

## Good to hear

## Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Strategies for cache-busting CSS](https://css-tricks.com/strategies-for-cache-busting-css/)

<!-- tags: (html) -->

<!-- expertise: (0) -->
