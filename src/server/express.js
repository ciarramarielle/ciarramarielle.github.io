// npm install express --save
// npm install body-parser --save

// This is where I can configure EXPRESSJS.
var express = require("express"),
    bodyParser = require("body-parser"),
    router = express.Router();

module.exports = function(app, config) {
    app.use(bodyParser.urlencoded({
        extended: true
    })); // enable url-encoded bodies
    app.use(bodyParser.json()); //enable json-encoded bodies

    // To enable CORS... this only works on DEV environment currently. :(
    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin, Accept');
        next();
    }

    app.use(allowCrossDomain);

    // Static routing for anything inside <root=mean_start>/src/client into /
    app.use(express.static(config.rootPath + "src/client"));

    // Static routing for anything inside <root=mean_start>/bower_components into bower_components/
    app.use('/bower_components', express.static(config.rootPath + "bower_components"));


    // Set express <views> = <root=mean_start>/src/client
    app.set('views', config.rootPath+ 'src/client');

    // Set express "view engine"
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);



    // app.get('/api/maa', routes);
    // middleware that is specific to this router
    router.use(function timeLog (req, res, next) {
      console.log('Time: ', Date.now())
      next()
    })
    // define the home page route
    // router.get('/', function (req, res) {
    //   res.send('Birds home page')
    // })
    router.get("/", function(req, res) {
        res.render("index.html");
        // looks inside VIEWS
    });


    // define the about route
    router.get('/resume', function (req, res) {
      res.send('About birds')
    })

    // // For now, route everything to <views>/index.html
    // app.get("*", function(req, res) {
    //     res.render("index.html");
    //     // looks inside VIEWS
    // });

    module.exports = router

};
