var http = require('http');  
var server = http.createServer(function(req, res) {  
  res.writeHead(200)
  res.write("<!DOCTYPE html>"+
            "<html lang='en'>"+
            "<head>"+
            "<title>"+"Form"+"</title>"+
            "</head>"+
            "<body bgcolor='skyblue'>"+
            "<form>"+
            "User Name"+"<input type='text' name='uname'>"+"<br>"+
            "Password"+"<input type='password' name='pwd'>"+"<br>"+
            "<button>"+"LOG IN"+"</button>" +
            "</form>"+
            "</body>"+
            "</html>"
    );
  res.end();
})
    server.listen(8080)