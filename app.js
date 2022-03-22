/*
running node app.js cause
Error: The 2nd parameter to `mongoose.model()` should be a schema or a POJO
- something's wrong with the schema in controller.js
- error from mixing prof's and LinkedIn Learning
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
- follow tutorial for TodoListAPI https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
*/
var     express     = require('express'),
        app         = express(),
        port        = process.env.PORT || 3000,
        mongoose    = require('mongoose'),
        Clue        = require('./api/models/jeopardyModel'),
        routes      = require('./api/routes/jeopardyRoutes'), // importing route
        bodyParser  = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/jeopardy');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // middleware intercepts incoming http request
// // use middleware to return more interactive messages
// // this message gets returned when the wrong route is entered
// app.use(function(req, res) {
//     res.status(404).send({ url: req.originalUrl + ' not found'})
// });

routes(app); // register the route

app.listen(port);

console.log('jeopardy RESTful API server started on: ' + port);