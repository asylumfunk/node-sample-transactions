var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

function debug(message) {
	console.log.apply(console, arguments);
}

function getContentType(url) {
	var contentType = 'text/plain';
	url = url || '';
	if (url.match(/\.html$/)) {
		contentType = 'text/html';
	} else if (url.match(/\.css$/)) {
		contentType = 'text/css';
	} else if (url.match(/\.js$/)) {
		contentType = 'text/javascript';
	} else if (url.match(/\.svg$/)) {
		contentType = 'image/svg+xml';
	} else if (url.match(/^api\/[0-9]+\/json\//)) {
		contentType = 'application/json';
	}
	return contentType;
}

var server = http.createServer(function (request, response) {
	var urlParsed = url.parse(request.url);
	var pathRequest = urlParsed.pathname;
	var method = request.method;
	var responseData = {
		'error': 'Invalid request'
	};
	var pathFs;
	pathRequest = path.join('.', pathRequest);
	if (pathRequest === './') {
		pathRequest = 'index.html';
	}
	pathFs = path.join('public', pathRequest);
	fs.readFile(pathFs, 'utf8', function (error, data) {
		var contentType = 'text/plain';
		var statusCode = 404;
		if (data) {
			statusCode = 200;
			contentType = getContentType(pathRequest);
		} else {
			data = 'File not found';
		}
		debug(method, contentType, pathRequest);
		response.writeHead(statusCode, {
			'Content-Type': contentType
		});
		response.end(data);
	});
});

server.listen(8088);

