function findDetails(){
    var request=new XMLHttpRequest();
        
    console.log("hi")

    var uname=document.getElementById("userName").value;

    let url='http://api.github.com/users/'+uname+'/repos'
        
    console.log(url)

    request.open('GET',url,true);
    request.send();

    document.getElementById("tempTable").innerHTML=""
    request.onload=function(){
        var res=JSON.parse(this.response);
        console.log(res)
        
        res.forEach((ele)=>{
            console.log(ele.created_at);
        });

        // if(res.cod==200)
        // document.getElementById("heading").innerHTML="Weather forecast of "+city;
        // else
        // document.getElementById("heading").innerHTML=res.message
        //     let table=document.createElement("table");
        //     table.cellPadding="15"
        //     table.align="center";
        //     table.border="1";
            
        //     table.className="table-striped table-hover"
            
        //     let row=table.insertRow(-1)

        //     let date=row.insertCell(-1)
        //     let temp=row.insertCell(-1)
        //     let temp2=row.insertCell(-1)
        //     let temp3=row.insertCell(-1)
            

        //     date.innerHTML="Date";
        //     temp.innerHTML="Temperature";
        //     temp2.innerHTML="Min Temperature";
        //     temp3.innerHTML="Max Temperature";
            
        //     res.list.forEach((dis)=>{
        //         let row2=table.insertRow(-1)
                
        //         row2.align="center"

        //         let dateDis=row2.insertCell(-1);
        //         let tempDis=row2.insertCell(-1);
        //         let tempDis2=row2.insertCell(-1);
        //         let tempDis3=row2.insertCell(-1);

        //         var s=dis.dt_txt.split(" ");
                
        //         dateDis.innerHTML=s[0];
        //         tempDis.innerHTML=dis.main.temp;
        //         tempDis2.innerHTML=dis.main.temp_min;
        //         tempDis3.innerHTML=dis.main.temp_max;
                            
        //     });
            

        //     tab=document.getElementById("tempTable")
        //     tab.append(table);
    }

}

