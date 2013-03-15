var http = require('http'); 
var count = 0; 
http.createServer(function (req, res) {		

	res.write("<html><body>Hello World</body></html>");
	res.end((++count)+""); 
	console.log("=========NEW REQUEST===========");
	console.log(req.url);
	console.log(req.headers);
}).listen(8080);
console.log("Listening on port 8080");

