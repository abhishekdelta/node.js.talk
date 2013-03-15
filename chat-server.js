var net = require('net');

var sockets = [];
net.createServer(function(socket){
	sockets.push(socket);
	socket.on('data', function(data) {
		console.log(data);
		for(var i=0;i<sockets.length;i++) {
			if (sockets[i] == socket) continue; 
			sockets[i].write(" : " + data);
		}
	});

	socket.on('end', function(){
		var i = sockets.indexOf(socket);
		sockets.splice(i, 1);
	});

}).listen(8080);
