console.log("Handling Web Server Events");

const http = require('http');

const server = http.createServer();

server.on('request',function(req,res) {
	console.log("Request received", req.headers);
	res.end("Thanks, I got your request");
});

server.on('upgrade',function(req,socket,head){
	console.log("Upgrade the connection to a web socket connection");
});

const port = 80;
server.listen(port,function() {
	console.log("HTTP Server Listening");
});