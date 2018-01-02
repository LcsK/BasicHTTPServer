const express = require('express');
const formidable = require('formidable');
const app = express();

app.use(function(req, res) {
	if(req.method.toLowerCase() == "post") {
		//configure the form
		form.uploadDir = __dirname + '/uploads';
		form.keepExtensions = true;
		form.type = "multipart";

		form.parse(req, function(err,fields,files) {
			//Parse fields
			var firstName = fields.userFirstName;
			var lastName = fields.userLastName;
			console.log("User info parsed from form: " + firstName + " " + lastName);
			res.writeHead(200, {'content-type': 'text/plain'});
			res.end("Form data recieved");
		})
	}
});

//Start server
const port = 80;
app.listen(port);
console.log("Listening on port 80");