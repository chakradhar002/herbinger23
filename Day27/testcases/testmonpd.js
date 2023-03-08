// Using moongoose as a database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// The before() hook
before( (done) => {
	mongoose.connect("mongodb://localhost/test",
	{ useUnifiedTopology: true, useNewUrlParser: true});

	mongoose.connection
	.once('open', () => {
		// console.log('Connected...')
		done();
	})
	.on('error', (error) => {
		console.log("Your error", error);
	});
});
