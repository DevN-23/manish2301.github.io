var http = require('http')
var url = require('url')
var server=http.createServer(function(req,res){
var page = url.parse(req.url).pathname;
res.writeHead(200,{"content":"text/html"})
if(page=='/login'){
    res.write("Welcome to login page")
    }
    else if(page=='/signup'){
        res.write("welcome to signup page")
    }
    else{
        res.write("You are on home page")
    }
    res.end()
})
server.listen(8080)
