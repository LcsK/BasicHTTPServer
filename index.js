const http = require('http');

const handlerMethod = function(req, res) {
	res.end("A simple response from a simple server");
}

http.createServer(handlerMethod).listen(80, 'localhost');

console.log('HTTP Server listening on port 80');