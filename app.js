var express = require('express');
var mongoose = require('mongoose');
var port = 51617;
var graph = require('fbgraph');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser);

graph.setVersion("2.8");

// Initialize all the routes
require('./routes')(app, graph);

app.listen(port);
console.log("App should be listening on the port");
