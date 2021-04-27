var http=require("http")
var fs= require("fs")
var url=require("url")

var server=http.createServer(function (req, res) {
    var u=url.parse(req.url,true);
    var path=u.pathname
    console.log(path);  
    if(req.url=="/"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile("greet.html"  ,function(err,data){
        
        if(err)
            throw err
        else
            res.write(data)
    })
    }
    
    if(path=="/student"){
        
        res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile("Wish.txt"  ,function(err,data){
        if(err)
            throw err
        else
            res.write(data+" Student "+u.query.uname)
    })
    }
})

server.listen("5053")
console.log("listening")
