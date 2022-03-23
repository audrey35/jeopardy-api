// create and upload data to MongoDB Atlas cluster: https://www.freecodecamp.org/news/deploying-a-mern-application-using-mongodb-atlas-to-heroku/

var     mongoose    = require('mongoose'),
        Clue        = require('../models/jeopardyModel'),
		data 		= require('./JEOPARDY_QUESTIONS1.json'),
        url         = "mongodb+srv://audrey123:123@jeopardy.jdcoe.mongodb.net/jeopardy?retryWrites=true&w=majority";

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(url);

Clue.collection.insertMany(data, function(err, res) {
	if (err) throw err;
	console.log("Number of documents inserted: " + res.insertedCount);
	mongoose.disconnect()
});