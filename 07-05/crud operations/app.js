var express= require("express")
var path=require("path")
var app=new express()
var firebase= require("firebase")

var firebaseConfig = {
    apiKey: "AIzaSyDdP4w8qQDmVKm30X7ndkqwDEn1aodp-Ro",
    authDomain: "awt2021.firebaseapp.com",
    databaseURL: "https://awt2021-default-rtdb.firebaseio.com",
    projectId: "awt2021",
    storageBucket: "awt2021.appspot.com",
    messagingSenderId: "358157256765",
    appId: "1:358157256765:web:f220b491c16c445a020254",
    measurementId: "G-V4X1DL9S7J"
  };

  firebase.initializeApp(firebaseConfig);
 
    app.use(express.urlencoded())



    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"index.html"))
    })


    var ref=firebase.database().ref().child("User")

    function deleteEmp(){
        var x=prompt("Enter Emp Id to delete","0")
        window.open("http://localhost:2025/deleteEmp/x")
    }

    app.post("/addEmp",(req,res)=>{
        id=req.body.empid
        console.log(id)
        ref.child(id).set({
            id:id,
            Name:req.body.name,
            Email:req.body.email
        })

        res.send("Added Successfully");
    })

    app.get("/getUsers",(req,res)=>{
        
        ref.once("value",(snap)=> {
            res.send(snap.val())
        })
    })

    app.delete("/deleteEmp/:id",(req,res)=>{
        id=req.params.id
        ref.child(id).remove()        
    })

    app.put("/updateEmp/:empId",(req,res)=>{
        id=req.params.empId
        console.log(id)
        ref.child(id).set({
            id:id,
            Name:req.body.name,
            Email:req.body.email
        })
        res.send("Updated Successfully");
    })



app.listen(2025,()=>{
    console.log("listening..2025")
})
