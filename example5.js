var fs = require("fs");

fs.readFile("input.txt", function callback(err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("Asynchronous read: \n" + data);
});

console.log("End of Asynchronous read");

var data = fs.readFileSync("input.txt");
console.log("Synchronous read: \n" + data);
console.log("End of Synchronous read");
