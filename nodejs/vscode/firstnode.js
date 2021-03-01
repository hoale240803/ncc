var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    console.log("server running")
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
    console.log("Done!")
}).listen(8080);