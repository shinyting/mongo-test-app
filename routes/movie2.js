var Movie = require('../models/Movie.js');
var express = require('express');
var router = express.Router();



var movieAdd = function (req, res) {
	if (req.params.name) {
		return res.render('movie', {
			title: req.params.name + '|电影|管理|movie.me',
			label: '编辑电影：' + req.params.name,
			movie: req.params.name
		});
	}
	else {
		return res.render('movie', {
			title: '新增加|电影|管理|movie.me',
			label: '新增加电影',
			movie: false
		});
	}
}


var doMovieAdd_old = function (req, res) {
	res.send({
		'success': true
	});
}

var doMovieAdd = function (req, res) {
  var User = require('../models/user');

  var user = new User();

  user.name = 'zhangting';

  console.dir(user)

  user.save(function(err, u){
    console.dir(err)
    console.dir(u)
    
  	res.json({
  		'success': true
  	});
  });
}

var movieJSON = function (req, res) {
	res.send({
		'success': true
	});
}

/* GET home page. */
router.get('/add',movieAdd );

router.post('/add', doMovieAdd);

router.get('/:name',movieAdd );

router.get('/json/:name',movieJSON );


module.exports = router;


