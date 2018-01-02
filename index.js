console.log("Serving Static Files");

const connect = require('connect');
const serveStatic = require('serve-static');

const app = connect()
	.use(serveStatic('myPublicFolder'))
	.use(function(req,res) {
		res.end("Welcome to our demo app.");
	})
	.listen(80);

console.log("Listening on port 80");