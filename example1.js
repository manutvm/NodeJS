var fs = require("fs");

fs.readFile("input.txt", function callback(err, data) {
	if (err) {
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});

console.log("Program Ended");