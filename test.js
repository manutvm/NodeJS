var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {

	// Send the HTTP header
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	var data = fs.readFileSync('input.txt');	
	response.end(data.toString());	
	console.log("End");
}).listen(9092);

// Console will print the message
console.log('Server running at http://127.0.0.1:9092/');