console.log("Working with Query Strings");

const queryString = require('querystring');

const testBaseUrl = "http://localhost:80/path/to/resource";

var queryDataObject = {
	'resourceID': '1',
	'username': 'andy',
}

//var stringFromObject = queryString.stringify(queryDataObject);

var stringFromObject = queryString.stringify(queryDataObject,";",":");

console.log(testBaseUrl + "?" + stringFromObject);