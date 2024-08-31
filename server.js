const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize object
const myEmiter = new MyEmitter();

// add listener for an event

myEmiter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmiter.emit("log", "Log event emitted");
}, 2000);
