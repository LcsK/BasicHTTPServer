var request = require('request');
var fs = require('fs');

var data = {
	userFirstName:"John",
	userLastName:"Doe",
	myBuffer: new Buffer([1]), //Buffer for parsing file data
	myFile: fs.createReadStream(__dirname + '/client/images/ibm.png') //read stream containing file data to pass
}

//request.post('http://localhost:80').form(data);
//Também podemos utilizar o seguinte método:
//request.post('http://localhost:80',{form:data});
//Caso queiramos fazer algo com a resposta da requisição:

var callback = function(error, response, body) {
	if(error) console.log(error);
	else console.log(body);
}

//request.post('http://localhost:80',{form:data},callback);
request.post({url:'http://localhost:80', formData}, function optionalCallback(err,response,body) {
	if(err) {
		return console.error('ops, there was a problem uploading');
	}
	console.log('File uploaded to server');
})