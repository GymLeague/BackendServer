var express = require('express');
var mongoose = require('mongoose');
var port = 51617;
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/gym-league');

app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));


// Initialize all the routes
require('./routes')(app);


app.listen(port);
console.log("App should be listening on the port");
