var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	fs.readFile('/etc/passwd', function(err, data) {
		if(err) {
			res.writeHead(500, err.message);
			res.end();
		}
		else {
			res.writeHead(200, {'Content-Type':'text/plain'});
			res.end(data);
		}
	});
}).listen(8080);
console.log("Listening on 8080");
