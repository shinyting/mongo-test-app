var mongodb = require('../db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MovieSchema = new Schema({
	name: String,
	alias: [String],
	publish: Date,
	create_date: {type: Date, default: Date.now},
	images: {
		coverSmall: String,
		coverBig: String,
	},
	source: [{
		source: String,
		link: String,
		swfLink: String,
		quality: String,
		version: String,
		lang: String,
		subtitle: String,
		create_date: {type: Date, default: Date.now}
	}]
});
var Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
