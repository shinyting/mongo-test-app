var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var regisSchema = new Schema({
	name: String,
	phone: String,
	password: String
});

var Regis = mongoose.model('Regis', regisSchema);
module.exports = Regis;