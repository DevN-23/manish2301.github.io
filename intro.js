var http = require('http')
var name = require('Manish Nayal')
var server = http.createServer(function(req,res){
   res.writeHead(200,{"contentType":"text/html"})
   res.end('name')
}) 
   server.listen(8080)