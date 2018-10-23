const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/app/app.module.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: 'src/assets',
			to: 'assets'
		}]),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			output: __dirname + '/dist/index.html'
		})
	],

	module: {
		rules: [{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true
					}
				}],
			},
			{
				test: /\.css$/,
				use: ['css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader'
				}]
			}
		],
	},
};