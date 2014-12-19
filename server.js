var http = require("http");

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});  //this go into the html header

    res.end('Hello World\n');

}).listen(1337, '127.0.0.1');
var myDate=new Date()


console.log("Eriks Server Running" + myDate)

