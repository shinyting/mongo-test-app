var mongodb = require('../db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
	name: String,
  passwd:String
});

var User = mongoose.model("User", MovieSchema);


module.exports = User;