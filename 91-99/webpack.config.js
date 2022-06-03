/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development uisng webpack',
			templateContent: `
			<html>
			  <head>
			     <title>Developement using webpack | Babel JS</title>
			  </head>
			  <body>
				<h1>I am using webpack together with Babel</h1>
			  </body>
			</html>
		  `
		})
	],
	// optimization: {
	// 	runtimeChunk: 'single'
	// },
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
