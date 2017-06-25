var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(8080, function () {
	console.log('listening on 8080');
});