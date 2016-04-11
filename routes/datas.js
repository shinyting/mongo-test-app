var db = require('../db.js');
var collection = db.collection('users');
var ObjectId = require('mongodb').ObjectId;

var express = require('express');
var router = express.Router();

var showData = function (req, res, next) {
	collection.find({}).toArray(function (err, data) {
		if (!err) {
			res.render('data-list', {
				title: 'show data',
				data: data
			});
		}
	});
}

var dataDetail = function (req, res, next) {
	var idValue = req.params.sort;
	collection.find({'_id': ObjectId(idValue)}).toArray(function (err, data) {
		res.render('data-detail', {
			title: 'data-detail',
			data: data
		});
	});
}

router.get('/', showData);

router.get('/:sort', dataDetail);

module.exports = router;