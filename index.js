console.log("Parsing URLs");

const url = require('url');

const testUrl = "http://lucas:7654321@localhost:80/path/to/resource?resourceId=someValue&resourceType=someType";

//var parsedUrlObject = url.parse(testUrl);
var parsedUrlObject = url.parse(testUrl,true);

console.log(parsedUrlObject);

var urlString = url.format(parsedUrlObject);

console.log(urlString);