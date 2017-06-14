var path = require('path');
var webpack = require('webpack');
var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'stage-1']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("css-loader")
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader!sass-loader')
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modulesDirectories: ['node_modules'],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			actions: path.resolve(__dirname, 'src/actions/'),
			reducers: path.resolve(__dirname, 'src/reducers/')
		}
	},
	devServer: {
		disableHostCheck: true,
		historyApiFallback: true,
		contentBase: './'
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'public/site.css',
			allChunks: false
		}),
		new webpack.ProvidePlugin({
			"window.jQuery": "jquery",
			$: "jquery",
			jQuery: "jquery",
			React: "react"
		})
	]
};
