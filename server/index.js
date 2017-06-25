var express = require('express');
var path = require('path');

var app = express();

var initRoutes = require('./routes');

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

initRoutes(app);

app.listen(3000, function () {
	console.log('listening on 3000');
});
