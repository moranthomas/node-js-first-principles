var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Hello Thomas - This is the most basic node program!');
});
server.listen(8080);
