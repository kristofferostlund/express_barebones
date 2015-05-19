var express = require('express');
var cors = require('cors');

var router = express.Router(); 

var whitelist = ['http://localhost:3000', 'http://localhost:9000'];
var corsOptions = {
	origin: function (origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	}
};

router.use(cors(corsOptions));

router.get('/', function (req, res) {
	res.send('<h1>Hello, world!</h1>');
});

router.get('/items', function (req, res, next) {
	console.log(req);
	res.status(200).jsonp([ 'c', 1, 2, 3, 4, 5, 6, 7, 8 ]);
});

router.put('/items', function (req, res) {
	var arr = [];
	
	console.log(req.body); // This is undefined
	
//	req.body.content.forEach(function(element) {
//		arr.push(element.firstName);
//	}, this);
	console.log(arr);
	res.status(200).send('Bra jobbat!');
});

module.exports = router;