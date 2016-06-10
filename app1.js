var http = require('http')
var server = http.createServer(function(req,res){
   res.writeHead(200,{"contentType":"text/html"})
   res.end("<h1>About Me</h1>"+"<li>Name: Manish Nayal</li>"+"<li>DOB: 23/Jan/2016</li>"+"<li>Course: MCA</li>"+"<li>College: NIET</li>"+"<li>Hometown: Almora(Uttarakhand)</li>")
}) 
   server.listen(8080)