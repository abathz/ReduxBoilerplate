var path = require('path');
var webpack = require('webpack');

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
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
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
		new webpack.ProvidePlugin({
			"window.jQuery": "jquery",
			$: "jquery",
			jQuery: "jquery",
			React: "react"
		})
	]
};
