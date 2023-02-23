var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var productmodel = require('../productmodel');

// Connecting to database
var query = 'mongodb://localhost:27017';

const db = (query);
mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
	if (error) {
		console.log("Error!" + error);
	}
});

module.exports = router;
