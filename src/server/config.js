// npm install path --save
var path = require("path");
var rootPath = path.normalize(__dirname +"/../../");
//  rootPath = (server/config.js)/..(src)/.. = <root=mean_start>
module.exports = {
    rootPath: rootPath,
    port: process.env.PORT || 8080
}