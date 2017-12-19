const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const cleanwebpackplugin = require('clean-webpack-plugin')
const config = {
	// 入口文件// 这里应用程序开始执行
	entry: './app/app.js',
	// 出口文件// webpack 如何输出结果的相关选项
	output: {
		// 「入口分块(entry chunk)」的文件名模板（出口分块？）
		//filename: 'bundle.js', //单个入口
		filename: '[name].js', //多个入口文件
		//filename: "[hash].js", // 用于长效缓存
		//filename: "[chunkhash].js", // 用于长效缓存
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/assets/',
		//library: 'Zoo',
		//libraryTarget: 'amd',
		chunkFilename: '[chunkhash].js',
		pathinfo: true
	},
	plugins: [
	   new cleanwebpackplugin(['dist']),
       new htmlwebpackplugin({
       	title: 'haha'
       })
	]
}
module.exports = config