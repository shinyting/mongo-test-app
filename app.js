var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'); //网页图标模块
var logger = require('morgan'); //在控制台中，显示req请求的信息
var cookieParser = require('cookie-parser'); //用于获取web浏览器发送的cookie中的内容
var bodyParser = require('body-parser');//用于解析客户端请求的body中的内容
var http = require('http'); //构建http服务器

var routes = require('./routes/index');

var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/images/favicon.ico')); //网页图标
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;