const http = require('http');
const connect = require('connect');
const bodyParser = require('body-parser');

const app = connect()
	.use(bodyParser.urlencoded(
		{extended:true}
	))
	.use(function(req,res) {
		var parsedInfo = {};

		parsedInfo.firstName = req.body.userFirstName;
		parsedInfo.lastName = req.body.userLastName;

		res.end("User info parsed from form: " + parsedInfo.firstName + " " + parsedInfo.lastName)
	});

http.createServer(app).listen(80);

console.log("Listening on port: 80");