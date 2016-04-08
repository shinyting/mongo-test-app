var User = require('../models/Userinfo.js');
var express = require('express');
var router = express.Router();

var showIndex = function (req, res, next) {
	res.render('index', {title: 'mongo test for save data'});
}

var saveUser = function (req, res, next) {
	var user = new User(req.body);
	user.save (function (err, user){
		if (!err) {
			res.send({
				'success': true
			});
		}
	})
}

router.get('/', showIndex);
router.post('/save', saveUser);

module.exports = router;