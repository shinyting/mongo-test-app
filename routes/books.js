var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('book-list', {
		title: 'book lists'
	});
});

router.get('/bookdetail/:id', function (req, res, next) {
	res.render('book-tap', {
		title: 'book tap'
	});
});

module.exports = router;