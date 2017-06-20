var express = require('express');
var path = require('path');
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware');
var app = express();

var initRoutes = require('./route');

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

initRoutes(app);

app.listen(3000, function () {
	console.log('listening on 3000');
});
