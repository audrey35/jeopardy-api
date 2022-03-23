/*
Add JSON data to a MongoDB database called jeopardy in a collection called clues.
JSON data comes from: https://domohelp.domo.com/hc/en-us/articles/360043931814-Fun-Sample-DataSets
- reduced size to 6MB or 24683 records by opening it in VSCode and selecting a portion of it and deleting the rest of the data.
- how to insert data into MongoDB database: https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp
- how to import JSON data into NodeJS: https://stackoverflow.com/a/7165572
- how to import json into MongoDB using Mongoose: https://stackoverflow.com/a/30698402
*/

var     mongoose    = require('mongoose'),
        Clue        = require('../models/jeopardyModel'),
		data 		= require('./JEOPARDY_QUESTIONS1.json');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/jeopardy');

Clue.collection.insertMany(data, function(err, res) {
	if (err) throw err;
	console.log("Number of documents inserted: " + res.insertedCount);
	mongoose.disconnect()
});