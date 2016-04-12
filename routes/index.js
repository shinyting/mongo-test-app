var User = require('../models/Userinfo.js');
var Regis = require('../models/registerModel.js');

var db = require('../db.js');
var collection = db.collection('regis');

var express = require('express');
var router = express.Router();

var showIndex = function (req, res, next) {
	console.log(req.session);
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
	});
}

var registerPage = function (req, res, next) {
	res.render('register', {
		title: 'fill the register infomation'
	});
}

var loginPage = function (req, res, next) {
	res.render('login', {
		title: 'login page'
	});
}

var saveRegister = function (req, res, next) {
	var regis = new Regis(req.body);
	regis.save(function (err, result) {
		if (!err) {
			res.send({
				'msg': 'success'
			});
		}
	});
}

var saveLogin = function (req, res, next) {
	console.log(req.body);
	//先以name为关键字进行查询
	collection.findOne({'name': req.body.name}, function (err, doc) {
		if (err) {
			res.send(500);
			console.log(err);
		}
		else {
			if (doc) {
				if (req.body.password != doc.password) {
					res.send({'error': 'wrong password'});
				}
				else {
					res.send({'msg': 'success'});
				}
			}
			//以name为关键字查不到，就以phone为关键字进行查找
			else {
				collection.findOne({'phone': req.body.name}, function (wrong, result) {
					if (wrong) {
						res.send(500);
						console.log(wrong);
					}
					else {
						if (result) {
							if (req.body.password != result.password) {
								res.send({'error': 'wrong password'});
							}
							else {
								var user = {'username': 'lucy', 'password': '000000'};
								req.session.user = user;
								res.send({'msg': 'success'});
							}
						}
						//如果都没有查到，则返回‘没有该用户’的提示信息
						else {
							res.send({'msg': 'no username'});
						}
					}
				})
			}
		}
	});
}

router.get('/', showIndex);
router.post('/save', saveUser);
router.get('/register', registerPage);
router.get('/login', loginPage);
router.post('/saveregister', saveRegister);
router.post('/savelogin', saveLogin);

module.exports = router;