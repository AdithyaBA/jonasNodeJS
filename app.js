const eventEmit = require("events");

class Eve extends eventEmit{}

let server = new Eve();

server.on("eve", () => {
    console.log("hello");
})

server.on("eve",    (p) => {
    console.log("hey adi", p);
})

server.emit("eve", 9)