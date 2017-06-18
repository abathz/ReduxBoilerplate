var express = require('express');
var path = require('path');
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware');
var app = express();

var env = process.env.NODE_ENV;

if (env == "production") {
	app.use(express.static(__dirname));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'index.html'));
	})
} else {
	var config = require('./webpack.config.js');

	var compiler = webpack(config);

	app.use(webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
		stats: { colors: true }
	}));

	app.use(express.static(__dirname));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'index.html'));
	})
}

app.listen(3000);
console.log('listening on 3000');