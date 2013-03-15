var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type' : 'text/plain'});

	var stream = fs.createReadStream('../dump/sorted-attrs');
	
	stream.on('data', function(data) {
		console.log("Chunk sent\n");
		res.write(data);
	});
	
	stream.on('end', function() {
		res.end();
	});
	
	stream.on('error', function() { 
		res.end();
		console.log(error);
	});
	
}).listen(8080);

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("Hello World");

}).listen(8081);


console.log("Listening on 8080/1");
