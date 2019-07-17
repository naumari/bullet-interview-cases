### 什么是跨站脚本攻击 (XSS) ，如何防御它?

#### Answer

XSS是指客户端代码注入，攻击者将恶意脚本注入合法网站或Web应用程序。当应用程序不验证用户输入并自由注入动态HTML内容时，通常会实现这一点。例如，如果一个论坛的评论系统未验证的用户输入就将其显示在页面中，则该评论系统将面临风险。如果注释包含未转义的HTML，则注释可以在网站中注入一个 `<script>` 标签，其他用户将会执行该简本。

* 恶意脚本可以访问 `document.cookie` 通常用于存储会话令牌的cookie。如果攻击者可以获取到用户的会话cookie，则他们可以冒充用户；
* 该脚本可以任意操作脚本执行的页面的DOM；
* 该脚本可以使用AJAX将具有任意内容的HTTP请求发送到任意位置。

#### Good to hear

* 在客户端上，使用 `textContent` 而不是 `innerHTML` 可以防止浏览器通过HTML解析器运行字符串，HTML解析器将在其中执行脚本；
* 在服务器上，转义HTML标记将阻止浏览器将用户输入解析为实际HTML，因此不会执行脚本。

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Cross-Site Scripting Attack (XSS)](https://www.acunetix.com/websitesecurity/cross-site-scripting/)

<!-- tags: (security,javascript) -->

<!-- expertise: (1) -->
