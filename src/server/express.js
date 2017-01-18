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

    // Static routing for anything inside <root=mean_start>/src/client into /
    app.use(express.static(config.rootPath + "src/client"));

    // Static routing for anything inside <root=mean_start>/bower_components into bower_components/
    app.use('/bower_components', express.static(config.rootPath + "bower_components"));

    // Set express <views> = <root=mean_start>/src/client
    app.set('views', config.rootPath+ 'src/client');

    // Set express "view engine"
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);


    // Home / --> index.html
    app.get("/", function(req, res) {
        res.render("index.html");
        // looks inside VIEWS
    });

    // *** TESTING *** //
    // /ping --> pong
    // app.get('/ping', function(req, res, next) {
    //     console.log(req.body);
    //     res.send('pong');
    // });

    // For now, route everything to <views>/index.html
    app.get("*", function(req, res) {
        res.render("/app/layout/topnav.html");
        // looks inside VIEWS
    });
};