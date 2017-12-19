---
title: 开发中 Server：devServer参数
date: 
tags:
- webpack
- devServer
---

# devServer:object
通过来自 webpack-dev-server 的这些选项，能够用多种方式改变其行为。

## after : function
## allowedHosts : array
allowedHosts: [
  'host.com'
]
或
allowedHosts: [
    '.host.com'
]
可匹配 host.com, www.host.com 或*.host.com

## before:function
## bonjour
## clientLogLevel:string
当使用内联模式(inline mode)时，在开发工具(DevTools)的控制台(console)将显示消息，如：在重新加载之前，在一个错误之前，或者模块热替换(Hot Module Replacement)启用时。这可能显得很繁琐。
clientLogLevel: none || error || warning || info（默认值）
## color
## compress:boolean
一切服务都启用gzip 压缩：
compress: true
## contentBase : boolean string array
告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
默认情况下，将使用当前工作目录作为提供内容的目录，但是你可以修改为其他目录：
contentBase: path.join(__dirname, "public")
注意，推荐使用绝对路径。
但是也可以从多个目录提供内容：
contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]
禁用 contentBase：
contentBase: false

## disableHostCheck :boolean
## filename
如果 output.filename 设置为 bundle.js ，filename 使用如下：
lazy: true,
filename: "bundle.js"
现在只有在请求 /bundle.js 时候，才会编译 bundle。
    filename 在不使用惰性加载时没有效果。 

## headers
在所有响应中添加首部内容：

headers: {
  "X-Custom-Foo": "bar"
}
## historyApiFallback
当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
```
historyApiFallback: true
```

通过传入一个对象，比如使用 rewrites 这个选项，此行为可进一步地控制：

```
historyApiFallback: {
  rewrites: [
    { from: /^\/$/, to: '/views/landing.html' },
    { from: /^\/subpage/, to: '/views/subpage.html' },
    { from: /./, to: '/views/404.html' }
  ]
}
```
当路径中使用点(dot)（常见于 Angular），你可能需要使用 disableDotRule：
```
historyApiFallback: {
  disableDotRule: true
}
```
## host
指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下：
```
host: "0.0.0.0"
```
## hot
启用 webpack 的模块热替换特性：
```
hot: true
```
## hotOnly
Enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures.
hotOnly: true
## https
默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务：

> https: true

使用以下设置自签名证书，但是你可以提供自己的：
```
https: {
  key: fs.readFileSync("/path/to/server.key"),
  cert: fs.readFileSync("/path/to/server.crt"),
  ca: fs.readFileSync("/path/to/ca.pem"),
}
```
此对象直接传递到 Node.js HTTPS 模块，
## index
The filename that is considered the index file.
index: 'index.htm'
## info
Output cli information. It is enabled by default.
webpack-dev-server --info=false

## inline
在 dev-server 的两种不同模式之间切换。默认情况下，应用程序启用内联模式(inline mode)。这意味着一段处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台。
也可以使用 iframe 模式，它在通知栏下面使用 <iframe> 标签，包含了关于构建的消息。切换到 iframe 模式：
inline: false
推荐使用模块热替换的内联模式，因为它包含来自 websocket 的 HMR 触发器。轮询模式可以作为替代方案，但需要一个额外的入口点：'webpack/hot/poll?1000'。 