// Required modules
var net = require("net");
var strftime = require("strftime");

// User Arguments
var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = parseInt(process.argv[2], 10);
}

// New TCP server
var server = net.createServer(function(socket) {
	socket.end(strftime('%F %R', new Date()) + "\n"); // https://github.com/samsonjs/strftime
});



server.listen(requestedPort);
