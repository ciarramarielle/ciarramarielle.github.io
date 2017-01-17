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

    // Static routing for anything inside .(server)/..(mean_start)/public/
    //      i.e. public/index.html
    app.use(express.static(config.rootPath + "/public"));

    // Set expreexitss "views" directory
    //  Right now, <views> = /public/views/
    app.set('views', config.rootPath+ '/public/views');


    app.engine('html', require('ejs').renderFile);

    // Set express "view engine"
    app.set('view engine', 'html');

    // For now, route everything to <views>/index.html
    app.get("*", function(req, res) {
        res.render("index.html");
        // looks inside VIEWS
    });
};