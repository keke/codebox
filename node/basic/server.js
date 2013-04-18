var http = require('http');
http.createServer(function(req, res){
  console.log('In coming request: ' + req.method + '->' + req.url);
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello World Node\n');	
}).listen(8124, '127.0.0.1');
console.log(http);