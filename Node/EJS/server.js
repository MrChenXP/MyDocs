var http = require('http');
var fs = require('fs');
let url = require('url');


function startServer(route, handle) {
    var onRequest = function(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log('Request received ' + pathname);
        route(handle, pathname, response);
    }

    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost port 3000');
}

module.exports.startServer = startServer;