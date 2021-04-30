var express= require("express")
var path=require("path")
var app=new express()

app.get("/",(req,res)=>{
    res.send("I'm in get");
})

app.post("/",(req,res)=>{
    res.send("I'm in post");
})

app.delete("/",(req,res)=>{
    res.send("I'm in delete");
})

app.put("/",(req,res)=>{
    res.send("I'm in put");
})


app.use(express.urlencoded())
app.use(express.static("mydocs"))

app.get("/signin",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/student/:id",(req,res)=>{
    res.write("Your ID is : "+req.params.id);
    res.end()
})

app.post("/signup",(req,res)=>{
    res.send("Good afternoon!!! "+req.body.name);
})


app.listen(2025,()=>{
    console.log("listening..2025")
})
