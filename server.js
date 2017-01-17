// npm install express --save

// Start ExpressJS application
var express = require("express");
var app = express();

// Configure ExpressJS
var config = require("./server/config.js");
require("./server/express.js")(app, config);

// Start NodeJS on configured port
app.listen(config.port);
console.log("Listening on port " + config.port);