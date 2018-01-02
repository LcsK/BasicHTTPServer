const connect = require('connect');

const app = connect()
	.use(function(req,res) {
		if(req.url == '/hello') {
			console.log("sending plain");
			res.end("Hello from app");
		}
		else if(req.url == "/printRequestHeaders") {
			var headers = req.headers;
			console.log("echoing headers");
			console.log(headers);
			res.end("Headers printed in console");
		}
		else {
			res.end("Nothing else matched");
		}
	})
	.listen(80);

console.log("Listening on port 80");