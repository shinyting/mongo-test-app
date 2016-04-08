var db = require('../db.js');

var express = require('express');
var router = express.Router();

var showData = function (req, res, next) {
	var collection = db.collection('users');
	collection.find({}).toArray(function (err, docs) {
		if (!err) {
			res.render('data-list', {
				title: 'show data',
				data: docs
			});
		}
	});
}

router.get('/', showData);

module.exports = router;