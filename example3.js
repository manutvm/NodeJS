var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream("output.txt");
readerStream.setEncoding("UTF8");

readerStream.on("data", function read(chunk) {
	console.log("Reading data chunk...");
	data += chunk;
	writerStream.write(chunk, "UTF8");
});

readerStream.on("end", function end() {
	writerStream.end();
	console.log("End Reading...");
	console.log("Data:\n" + data);
});

readerStream.on("error", function error(err) {
	console.log(err.stack);
});

writerStream.on("finish", function finish() {
	console.log("Finished Writing...");
});

writerStream.on("error", function error(err) {
	console.log(err.stack);
});
console.log("Program Ended");