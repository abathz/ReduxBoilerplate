var webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'cheap-module-source-map',
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
		rules: [{
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'es2015', 'stage-1', 'react-optimize']
			}
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			actions: path.resolve(__dirname, 'src/actions/'),
			reducers: path.resolve(__dirname, 'src/reducers')
		}
	},
	devServer: {
		disableHostCheck: true,
		historyApiFallback: true,
		contentBase: './'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			React: "react"
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			minimize: true,
			compressor: {
				warnings: false
			}
		}),
		new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 })
	]
};

