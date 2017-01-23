// npm install path --save
var path = require("path");
var rootPath = path.normalize(__dirname +"/../../");
//  rootPath = (server/config.js)/..(src)/.. = <root>

// This is also where I should configure the MongoDB (if I get one... :))
module.exports ={
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 8080,
        host: process.env.HOST || "localhost"
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80,
        host: process.env.HOST || "https://powerful-harbor-68074.herokuapp.com/"
    }
}