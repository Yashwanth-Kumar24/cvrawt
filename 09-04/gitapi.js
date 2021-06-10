function findDetails(){
    
    var request=new XMLHttpRequest();
        
    //console.log("hi")

    var uname=document.getElementById("userName").value;

    let url='https://api.github.com/users/'+uname+'/repos'
        
    //console.log(url)

    request.open('GET',url,true);
    request.send();

    document.getElementById("heading").innerHTML=""
    document.getElementById("tempTable").innerHTML=""
    document.getElementById("count").innerHTML=""

    request.onload=function(){
        var res=JSON.parse(this.response);
        //console.log(res)
        if(res.message)
        document.getElementById("heading").innerHTML="Enter proper username"
        else if(res.length==0)
        {document.getElementById("heading").innerHTML="No repos found"
        window.stop()
        }
        else
        {
            document.getElementById("heading").innerHTML="Public repositories of "+uname;
            document.getElementById("count").innerHTML="Total public repositories : "+res.length;
        
       
            let table=document.createElement("table");
            table.cellPadding="15"
            table.align="center";
            table.border="1";
            
            table.className="table-striped table-hover"
            
            let row=table.insertRow(-1)
            row.style.color="blue"
            row.align="center";
            let name=row.insertCell(-1)
            let date=row.insertCell(-1)
            let description=row.insertCell(-1)
            let updated=row.insertCell(-1)
            let openrepos=row.insertCell(-1)
            name.style.padding="10px"

            name.innerHTML="Name of the Repos";
            date.innerHTML="Created on";
            description.innerHTML="Description";
            updated.innerHTML="Updated on";
            openrepos.innerHTML="Open Repos";
            
            res.forEach((dis)=>{
                let row2=table.insertRow(-1)
                
                row2.align="center"
                row2.style.color="maroon"
                let name2=row2.insertCell(-1)
                let date2=row2.insertCell(-1)
                let description2=row2.insertCell(-1)
                let updated2=row2.insertCell(-1)
                let openrepos2=row2.insertCell(-1)
                
                description2.style.width="30%"
                name2.style.width="25%" 
                openrepos2.style.padding="20px"

                let btn=document.createElement("button");
                btn.innerHTML="Open"
                btn.className="btn btn-primary"

                btn.addEventListener("click",function(){
                    location.href = dis.html_url;
                })

                var datenew=dis.created_at.split("T")
                var datenew2=dis.updated_at.split("T")
                name2.innerHTML=dis.name;
                date2.innerHTML=datenew[0];
                if(dis.description)
                description2.innerHTML=dis.description;
                else
                description2.innerHTML="--";
                updated2.innerHTML=datenew2[0];
                openrepos2.append(btn);
                          
            });
            tab=document.getElementById("tempTable")
            tab.append(table);

    
    
        }
    }

}

