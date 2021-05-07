var express = require("express")
var app = new express()
var jwt = require("jsonwebtoken")

var secret = "secret"
var employee = [
    {
        id:101,
        name:"Yashwanth"
    },
    {
        id:102,
        name:"Yash"
    }
]

app.get("/",(req,res)=>{
    res.send("Welcome")
})

// app.get("/employee/:id",verifyToken,(req,res)=>{
//     res.send(employee)
// })

app.get("/employee",verifyToken,(req,res)=>{
    res.send(employee)
})

app.post("/login",(req,res)=>{
    const user = 
    {
        username : "Yashwanth",
        password : "CVR12345"
    }
    jwt.sign({user : user} , secret ,(err,token)=>{
        res.send({token : token});
    })
})

function verifyToken(req,res,next) {

    let token = req.headers['authorization'] // Express headers are auto connected
    token = token.split(" ")[1] 
    if(token)
    {
        jwt.verify(token,secret,(err,decoded)=>{
            if(err)
                return res.json({success : false,
                    message : "Invalid token"
                })
            else
                {
                    req.decoded = decoded;
                    next()
                }
        })
    }

}

app.listen(2028,()=>{
    console.log("Listening...2028")
})