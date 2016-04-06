var Movie = require('../models/Movie.js');

exports.movieAdd = function (req, res) {
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

exports.doMovieAdd = function (req, res) {
	res.send({
		'success': true
	});
}

exports.movieJSON = function (req, res) {
	res.send({
		'success': true
	});
}
