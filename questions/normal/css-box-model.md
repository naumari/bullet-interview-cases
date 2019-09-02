# 描述 CSS Box 模型的布局并简要描述每个部分

## 参考答案

每个盒子由四个部分（或称区域）组成：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。

内容区域 content area，容纳着元素的“真实”内容，例如文本、图像，或是一个视频播放器。它的尺寸为内容宽度（或称 content-box 宽度）和内容高度（或称 content-box 高度）。它通常含有一个背景颜色（默认颜色为透明）或背景图像。

如果 box-sizing 为 content-box（默认），则内容区域的大小可明确地通过 width、min-width、max-width、height、min-height，和 max-height 控制。

内边距区域 padding area，负责延伸内容区域的背景，填充元素中内容与边框的间距。它的尺寸是 padding-box 宽度 和 padding-box 高度。

内边距可以由 padding-top、padding-right、padding-bottom、padding-left，和简写属性 padding 控制。

边框区域 border area，是容纳边框的区域。其尺寸为 border-box  宽度 和 border-box 高度。

边框的粗细由 border-width 和简写的 border 属性控制。

如果 box-sizing 属性被设为 border-box，那么边框区域的大小可明确地通过 width、min-width, max-width、height、min-height，和 max-height 属性控制。假如框盒上设有背景（background-color 或 background-image），背景将会一直延伸至边框的外沿（默认为在边框下层延伸，边框会盖在背景上）。此默认表现可通过 CSS 属性 background-clip 来改变。

外边距区域 margin area 由外边距边界限制，用空白区域扩展边框区域，以分开相邻的元素。它的尺寸为 margin-box 宽度 和 margin-box 高度。

外边距区域的大小由 margin-top、margin-right、margin-bottom、margin-left，和简写属性 margin 控制。在发生外边距合并的情况下，由于盒之间共享外边距，外边距不容易弄清楚。

## 关键点

* 这是在前端采访中提出的一个非常常见的问题，虽然看起来很容易，但你知道这一点至关重要;
* 显示对 DOM 的深刻理解。

## 额外参考

* [W3School's CSS Box Model Page](https://www.w3schools.com/Css/css_boxmodel.asp)
* [Mozilla's Intro to the CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

<!-- tags: (css) -->
