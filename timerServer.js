// Required modules
var net = require("net");

// User Arguments
var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = parseInt(process.argv[2], 10);
}

// Month, day, hour and minute must be zero-filled to 2 integers
function formatForDoubleIntegers(value) {
	if (value.length == 1) {
		value = "0" + value;
	}
	return value;
}

// New TCP server
var server = net.createServer(function(socket) {
	var currentDate = new Date();

	var YYYY = currentDate.getFullYear().toString();
	var MM = formatForDoubleIntegers((currentDate.getMonth() + 1).toString());
	var DD = formatForDoubleIntegers(currentDate.getDate().toString());
	var HH = formatForDoubleIntegers(currentDate.getHours().toString());
	var mm = formatForDoubleIntegers(currentDate.getMinutes().toString());

	var dateToReturn = YYYY + "-" + MM + "-" + DD + " " + HH + ":" + mm;

	// socket.write(dateToReturn);
	// console.log(dateToReturn);

	socket.end(dateToReturn + "\n");
});



server.listen(requestedPort);

