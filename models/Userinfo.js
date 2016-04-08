var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	name: String,
	telephone: Number,
	email: String,
	password: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;