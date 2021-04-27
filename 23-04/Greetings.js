var http=require("http")
var fs= require("fs")


var server=http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile("Wish.txt"  ,function(err,data){
        
        if(err)
            throw err
        else
            res.write(data)
    })
})

server.listen("5052")
console.log("listening")
