/**
 * Created by andreaortis on 17/03/16.
 */
var http = require('http');
var hostname = 'localhost';
var port = 3001;

var server = http.createServer(function(req,res){
    console.log(req.headers);

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("<h1>Hello word</h1>");

});

server.listen(port,hostname,function(){
    console.log('Server is running as http://'+hostname+':'+port);
})