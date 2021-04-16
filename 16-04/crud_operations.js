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
  

  var ref=firebase.database().ref().child("Students")

function addDetais(){

    let count=100;
    let k;

    ref.on('child_added',(snap)=>{
        
        if(snap.exists()){
        count++;
        k=snap.val().id
        }
        
    })

    

    let ids=100
    if(count==100)
        ids=100
    else
        ids=k+1
    
    var uname=document.getElementById("name").value
    var email=document.getElementById("email").value
    
    if(uname=="" || email=="")
        alert("Please enter values")
    else if(!(email.includes("@gmail.com") || email.includes("@cvr.ac.in")) )
        alert("Only google and cvr domains are allowed. Please try again")
    else{
    ref.child(ids).set({
        id:ids,
        name:uname,
        email:email
    });
    document.getElementById("email").value="";
    document.getElementById("name").value="";
    loadUsers();
    }
}


function loadUsers(){
    
    document.getElementById("studentList").innerHTML=""
    let k=0;
    ref.get().then((snapshot) => {
        if (snapshot.exists()) {
          
    let table=document.createElement("table");
    
    table.align="center";
    table.border="1";
            
    table.className="table-striped table-hover"
            
    let row=table.insertRow(-1)
    row.style.color="blue"
    row.align="center"

    sid=row.insertCell(-1);
    sname=row.insertCell(-1);
    email=row.insertCell(-1);
   operations=row.insertCell(-1);
    
   sid.innerHTML="Student ID"
   sname.innerHTML="Name";
   sname.style.padding="10"
   sid.style.padding="10"
   email.innerHTML="Mail id";
   operations.innerHTML="Operations";
   
    
   ref.on('child_added',(snap)=>{
    
    
    row2=table.insertRow(-1)
    sid2=row2.insertCell(-1)
    sname2=row2.insertCell(-1)
    email2=row2.insertCell(-1)
    sid2.innerHTML=snap.val().id
    sname2.innerHTML=snap.val().name
    email2.innerHTML=snap.val().email
    operations2=row2.insertCell(-1)

    sid2.style.padding="10"
    sname2.style.padding="10"
    email2.style.padding="10"
    operations2.style.padding="10"


    //Edit button
    let btnEdit=document.createElement("button");
    btnEdit.innerHTML="<i class='fa fa-edit'></i>"
    btnEdit.className="btn btn-primary"
    btnEdit.style.marginRight="10px";
    
    btnEdit.setAttribute("data-toggle","modal")
    btnEdit.setAttribute("data-target","#myModal")

    btnEdit.addEventListener("click",function(){
        document.getElementById("id").value=snap.val().id
        document.getElementById("username").value=snap.val().name
        document.getElementById("emailId").value=snap.val().email
    })


    //del button
    let btnDel=document.createElement("button");
    btnDel.innerHTML="<i class='fa fa-trash'></i>"
    btnDel.className="btn btn-danger"

    btnDel.addEventListener("click",function(){
            deleteStudent(snap.val().id)
    })

    operations2.appendChild(btnEdit);

    operations2.appendChild(btnDel);


    })
        
    userlist=document.getElementById("studentList")
    userlist.append(table)

    }
    else{
        
                document.getElementById("studentList").innerHTML="No students registered."
                document.getElementById("studentList").style.color="red";
                document.getElementById("studentList").style.fontSize="24px";
                k=1;
          
        }});
    
}

function editStudent(){
    var id=document.getElementById("id").value
    var uname=document.getElementById("username").value
    var email=document.getElementById("emailId").value
    
    ref.child(id).update({
        name:uname,
        email:email
    });
    
    loadUsers();
}

function deleteStudent(delId) {
    if (confirm('Are you sure to delete this record ?')) {
         
         
         ref.child(delId).remove();
         
         loadUsers();
     }
}