# CORS 是什么

## 参考答案

Cross-Origin Resource Sharing 或 CORS 是一种机制，通过使用额外的 HTTP 字段来赋予游览器从不同于网站源的源服务器访问资源的权限。

跨源请求的一个示例是从 `http：// mydomain.com` 提供的Web应用程序，它使用AJAX来发出对 `http：// yourdomain.com` 的请求。

出于安全原因，浏览器会限制JavaScript发起的跨源HTTP请求。 `XMLHttpRequest` 和 `fetch` 遵循同源策略，这意味着使用这些API的Web应用程序只能从访问应用程序的同一源请求HTTP资源，除非来自其他来源的响应包含正确的CORS头。

## 关键点

* CORS行为不是错误，它是保护用户的安全机制;
* CORS旨在防止用户可能无意中访问的恶意网站，之后向合法网站发出请求以阅读其个人数据或执行违背其意愿的操作。

## 额外参考

* [MDN docs for CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

<!-- tags: (javascript) -->
