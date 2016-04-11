var User = require('../models/Userinfo.js');
var express = require('express');
var router = express.Router();

var showIndex = function (req, res, next) {
	res.render('index', {title: 'mongo test for save data'});
}

//向数据库的user中添加一条记录
var saveUser = function (req, res, next) {
	var user = new User(req.body);
	user.save (function (err, user){
		if (!err) {
			res.send({
				'msg': 'success'
			});
		}
	})
}

router.get('/', showIndex);
router.post('/save', saveUser);

module.exports = router;