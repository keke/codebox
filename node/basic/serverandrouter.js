var http = require('http');
var path = require('path');
var pages = [{
	route: '',
	output: 'Hello'
}, {
	route: 'path',
	output: 'Hello path'
}, {
	route: 'help',
	output: function() {
		return 'Hello help ' + this.route;
	}
}];
http.createServer(function(req, res) {
	var lookup = path.basename(decodeURI(req.url));
	console.log('In coming request: ' + req.method + '->' + req.url + ' basename is ' + lookup);
	pages.forEach(function(page) {
		if (page.route === lookup) {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			res.end(typeof page.output === 'function' ? page.output() : page.output);
		}
	});
	if (!res.finished) {
		res.writeHead(404);
		res.end('Page not Found!');
	}

}).listen(8124, '127.0.0.1');
console.log(http);