var net = require('net');

var sockets = [];

net.createServer(function(socket){
	socket.write("Welcome, Enter your username:");
	sockets.push([socket, null]);
	socket.on('data', function(data) {
		var ind = -1;
		var firsttime = false;
		for (var i=0; i<sockets.length; i++) {
			if(sockets[i][0] == socket) {
				ind = i;
				break;
			}
		}
		if (sockets[ind][1] == null) {
			console.log(data + " signed in.");
			sockets[ind][1] = data.toString().match(/\S+/);
			firsttime = true;
		}
		for(var i=0;i<sockets.length;i++) {
			if (sockets[i] == socket) continue;
			if (firsttime) 
			{
				sockets[i][0].write(sockets[ind][1] + " has signed IN\n");
			}
			else {
				sockets[i][0].write(sockets[ind][1] + " : " + data);
			}
		}
	});

	socket.on('end', function(){
		var ind = -1;
		for (var i=0; i<sockets.length; i++) {
			if(sockets[i][0] == socket) {
				ind = i;
				break;
			}
		}
		console.log(sockets[ind][1] + " logged out.\n");
		
		for(var i=0; i<sockets.length; i++) {
			if (ind == i) continue;
			sockets[i][0].write(sockets[ind][1] + " has logged out.\n");
		}
		
		sockets.splice(ind, 1);
	});

}).listen(8080);
