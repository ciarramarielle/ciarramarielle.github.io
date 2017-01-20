// npm install path --save
var path = require("path");
var rootPath = path.normalize(__dirname +"/../../");
//  rootPath = (server/config.js)/..(src)/.. = <root>

// This is also where I should configure the MongoDB (if I get one... :))
module.exports ={
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 8080
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}