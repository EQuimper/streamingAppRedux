var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/*>>>>>>=============================================<<<<<<*/
var devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	devtool: 'inline-sourcemap',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/only-dev-server',
		'./src/js/index'
	],
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		devFlagPlugin
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				exclude: /node_modules/,
				include: path.join(__dirname, 'src')
			}
		]
	}
};
