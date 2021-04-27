var http= require("http");
var date=require('./datemodule')


var server=http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var s=date().split(' ')
    res.write("<center>")
    res.write("Current Date: <b>" + s[2]+"-"+s[1]+"-"+s[3]+"</b><br><br>");
    res.write("Current Time: <b>"+s[4]+"</b><br><br>");
    res.write("IST - <i>" + s[5]+"</i><br>");
    res.write("</center>")
    res.end();
  })

  server.listen(8082);

  console.log("Listening on port 8082");