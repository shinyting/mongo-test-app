var db = require('../db.js');
var collection = db.collection('users');
var ObjectId = require('mongodb').ObjectId;

var express = require('express');
var router = express.Router();

//查找全部
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

//按id查找
var dataDetail = function (req, res, next) {
	var idValue = req.params.sort;
	collection.find({'_id': ObjectId(idValue)}).toArray(function (err, data) {
		res.render('data-detail', {
			title: 'data-detail',
			data: data
		});
	});
}

var editData = function (req, res, next) {
	var idValue = req.params.id;
	collection.find({'_id': ObjectId(idValue)}).toArray(function (err, data) {
		res.render('index', {
			title: 'edit-data',
			data: data
		});
	});
}

//更新
var updateData = function (req, res, next) {
	console.log(req.body);
	collection.update({'_id': ObjectId(req.body.id)}, {$set:req.body.params});
	console.log(result);
	res.send({'msg': 'success'});
}

router.get('/', showData);

router.get('/:sort', dataDetail);

router.get('/editdata/:id', editData);

router.post('/update', updateData);

module.exports = router;