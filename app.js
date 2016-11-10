var express = require('express');
var mongoose = require('mongoose');
var port = 51617;
var graph = require('fbgraph');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/gym-league');

app.use(bodyParser);

graph.setVersion("2.8");

// Initialize all the routes
require('./routes')(app, graph);

app.get('/', function (req, res) {
    res.send(200).json("Done");
});

app.listen(port);
console.log("App should be listening on the port");
