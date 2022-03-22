/*
Add JSON data to a MongoDB database called jeopardy in a collection called questions.
JSON data comes from: https://domohelp.domo.com/hc/en-us/articles/360043931814-Fun-Sample-DataSets
code source: 
- how to insert data into MongoDB database: https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp
- how to import JSON data into NodeJS: https://stackoverflow.com/a/7165572
*/

var MongoClient = require('mongodb').MongoClient;
var data = require('./JEOPARDY_QUESTIONS1.json');

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
	if(err) throw err;

	var dbo = db.db("jeopardy");

	dbo.collection("questions").insertMany(data, function(err, res) {
		if (err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});
});

