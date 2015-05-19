var express = require('express');
var app = express();
var path = require('path');

app.use('/m/', require('./module')); // No CORS
app.use('/c/', require('./cors_module')); // Uses CORS

app.get('/do-stuff', function (req, res) {
	res.sendFile(path.resolve() + '/do-stuff.html');
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	
	var port = server.address().port;
	
	console.log('App listening on port %s', port);
});