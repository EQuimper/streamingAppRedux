var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	devtool: 'inline-sourcemap',
	entry: [
		'./app/src/js/index'
	],
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		devFlagPlugin
	],
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
		]
	}
};