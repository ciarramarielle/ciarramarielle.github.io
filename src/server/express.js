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

    // CORS Stuff..
    // Add headers
    // app.use(function (req, res, next) {
    //
    //     // Website you wish to allow to connect
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //
    //     // Request methods you wish to allow
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //
    //     // Request headers you wish to allow
    //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //
    //     // Set to true if you need the website to include cookies in the requests sent
    //     // to the API (e.g. in case you use sessions)
    //     res.setHeader('Access-Control-Allow-Credentials', true);
    //
    //     // Pass to next layer of middleware
    //     next();
    // });
    app.options('/other', function(req, res){
        console.log("writing headers only");
        res.header("Access-Control-Allow-Origin", "https://powerful-harbor-68074.herokuapp.com/");
        res.end('');
    });

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

    // For now, route everything to <views>/index.html
    app.get("*", function(req, res) {
        res.render("index.html");
        // looks inside VIEWS
    });
};