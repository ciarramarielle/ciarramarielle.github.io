// npm install express --save
// npm install body-parser --save

// This is where I can configure EXPRESSJS.
var express = require("express"),
    bodyParser = require("body-parser");

module.exports = function(app, config) {
    app.use(bodyParser.urlencoded({
        extended: true
    })); // enable url-encoded bodies
    app.use(bodyParser.json()); //enable json-encoded bodies

    // Static routing for anything inside <root=src>/client
    app.use(express.static(config.rootPath + "/client"));

    // Set express <views> = <root=src>/client
    app.set('views', config.rootPath+ 'client');


    app.engine('html', require('ejs').renderFile);

    // Set express "view engine"
    app.set('view engine', 'html');

    // For now, route everything to <views>/index.html
    app.get("*", function(req, res) {
        res.render("index.html");
        // looks inside VIEWS
    });
};