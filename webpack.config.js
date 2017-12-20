const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const cleanwebpackplugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const config = {
	entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000','./app/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	module: {
      rules: [{
      	test: /\.css$/,
      	use: ['style-loader','css-loader']
      },{
        test: /\.js/,
        //include:[path.resolve(__dirname,'app')],
        loader: 'babel-loader',
        options: {
          presets: ['latest']
        }
      }]
	},
	plugins: [
	    new webpack.optimize.UglifyJsPlugin(),
        new cleanwebpackplugin(['dist']),
        new htmlwebpackplugin({
            title: 'haha'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
    ],
    devServer: {
    	contentBase: './dist',
    	hot: true
    }
}
module.exports = config