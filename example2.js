var events = require("events");
var eventEmitter = new events.EventEmitter();

function listener1() {
	console.log("Listener 1 executed...");
}

function listener2() {
	console.log("Listener 2 executed...");
}

eventEmitter.addListener("connection", listener1);

eventEmitter.on("connection", listener2);

eventEmitter.emit("connection");

console.log(events.EventEmitter.listenerCount(eventEmitter, "connection")
		+ " Listeners are running for connection");

eventEmitter.removeListener("connection", listener1);

console.log(events.EventEmitter.listenerCount(eventEmitter, "connection")
		+ " Listeners are running for connection");

eventEmitter.emit("connection");
