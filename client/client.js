/*
	Os arquivos "client.js" e "pipedFile.txt" devem ser criados em outra aplicação Node, separados do servidor.
*/

//Enviado requisições simples:

var request = require('request');
var fs = require('fs');

request("http://localhost:80/hello", function(error, response, body) {
	if(error) {
		console.log(error);
	}

	//response.body
	console.log(response.body);

	//get status code
	console.log(response.statusCode);

	//see header
	console.log(response.headers);
})
.pipe(fs.createWriteStream('Data/pipedFile.txt'));

//Modificando nossas requisições antes de enviarmos elas:

var options = {
	url:"http://localhost:80/printRequestHeaders",
	headers:{'X-DEMO-HEADER':"myDemoHeader"}
}

var callback = function(error, response, body) {
	if(error) console.log(error);
	else console.log(body);
}

request(options,callback);