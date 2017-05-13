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
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015', 'stage-1', 'react-optimize']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			actions: path.resolve(__dirname, 'src/actions/'),
			reducers: path.resolve(__dirname, 'src/reducers')
		}
	},
	loaders: [
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			loaders: [
				'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
			]
		}
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new webpack.ProvidePlugin({
			React: "react"
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compressor: {
				warnings: false
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
		new webpack.optimize.OccurenceOrderPlugin()
	]
};

