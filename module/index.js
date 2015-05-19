var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
	res.send('<h1>Hello, world!</h1>');
});

router.get('/items', function (req, res, next) {
	console.log(req);
	res.status(200).jsonp([ 'm', 1, 2, 3, 4, 5, 6, 7, 8 ]);
});

router.put('/items', function (req, res, next) {
	console.log(req.query);
	res.status(200).json('hejsan');
});

module.exports = router;