var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'mongo-test');

db.on('error', console.error.bind(console, '连接错误：'));
db.once('open', function () {
	//
	console.log('ssss');
});
exports.mongoose = mongoose;