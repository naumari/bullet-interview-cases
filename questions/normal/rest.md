# REST 是什么

## 参考答案

具象状态传输（REST，Representational State Transfer）是一组实现效率、可读性、还有可扩展分散式系统（scalable distributed system）的软体架构设计规范。如果一个系统能维持某些规范，他就是 RESTful。

REST 的基本概念是资源（resource）：例如说，文件能透过明确且标准的操作与格式，转换其状态与超文本的关联。通常在 API 或服务能直接更改文件类型，而非触发其他行为时，就会称做 RESTful。

通常，此概念在Web应用程序中用于管理状态。对于大多数应用程序，有一个核心的主题是读取，创建，更新和销毁数据。数据被模块化为单独的表，如 `posts`，`users`，`comments`，RESTful API公开了对这些数据的访问：

* 资源的标识符。这称为资源的端点或URL;
* 服务器应以HTTP方法或动词的形式对该资源执行的操作。常见的HTTP方法是GET，POST，PUT和DELETE;
* 读: `/posts/` => GET;
* 创建: `/posts/new` => POST;
* 更新: `/posts/:id` => PUT;
* 删除: `/posts/:id` => DELETE。

## 关键点

* 这种模式的替代品，如GraphQL

## 额外参考

* [What is REST — A Simple Explanation for Beginners, Part 1: Introduction
  ](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)

<!-- tags: (node) -->
