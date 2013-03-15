var net = require('net')
net.createServer(function(socket) {
	socket.write("Hello\n");
	socket.write("World\n");
	socket.on('data', function(data) {
		socket.write(data);
	});
}).listen(8080);
