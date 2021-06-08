function getSlots(){
    //name,address,min_age_limit,vaccine,district_name, state_name, fee_type, fee,available_capacity_dose2,available_capacity_dose1
    var request=new XMLHttpRequest();

    var dist=[{"district_id":582,"district_name":"Adilabad"},
    {"district_id":583,"district_name":"Bhadradri Kothagudem"},
    {"district_id":581,"district_name":"Hyderabad"},
    {"district_id":584,"district_name":"Jagtial"},
    {"district_id":585,"district_name":"Jangaon"},
    {"district_id":586,"district_name":"Jayashankar Bhupalpally"},
    {"district_id":587,"district_name":"Jogulamba Gadwal"},
    {"district_id":588,"district_name":"Kamareddy"},
    {"district_id":589,"district_name":"Karimnagar"},
    {"district_id":590,"district_name":"Khammam"},
    {"district_id":591,"district_name":"Kumuram Bheem"},
    {"district_id":592,"district_name":"Mahabubabad"},
    {"district_id":593,"district_name":"Mahabubnagar"},
    {"district_id":594,"district_name":"Mancherial"},
    {"district_id":595,"district_name":"Medak"},
    {"district_id":596,"district_name":"Medchal"},
    {"district_id":612,"district_name":"Mulugu"},
    {"district_id":597,"district_name":"Nagarkurnool"},
    {"district_id":598,"district_name":"Nalgonda"},
    {"district_id":613,"district_name":"Narayanpet"},
    {"district_id":599,"district_name":"Nirmal"},
    {"district_id":600,"district_name":"Nizamabad"},
    {"district_id":601,"district_name":"Peddapalli"},
    {"district_id":602,"district_name":"Rajanna Sircilla"},
    {"district_id":603,"district_name":"Rangareddy"},
    {"district_id":604,"district_name":"Sangareddy"},
    {"district_id":605,"district_name":"Siddipet"},
    {"district_id":606,"district_name":"Suryapet"},
    {"district_id":607,"district_name":"Vikarabad"},
    {"district_id":608,"district_name":"Wanaparthy"},
    {"district_id":609,"district_name":"Warangal(Rural)"},
    {"district_id":610,"district_name":"Warangal(Urban)"},
    {"district_id":611,"district_name":"Yadadri Bhuvanagiri"}
    ]

    var district=document.getElementById("dist").value;
    //console.log(district)

    var distcode=""

    dist.forEach((data)=>{
        if(data.district_name.includes(district))
             distcode=data.district_id
    })

    //console.log(district+" "+distcode)
    var selectedDate=document.getElementById("Date").value;
    if(selectedDate==""){
        alert("Please select a date - Today's slots are displayed")
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
  
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '-' + mm + '-' + yyyy;
        document.getElementById("Date").value=yyyy + '-' + mm + '-' + dd
    }
    
    else{
    var dl=selectedDate.split("-")
    var today=dl[2]+"-"+dl[1]+"-"+dl[0]
    }

    let url='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+distcode+'&date='+today
    
    
    
    //console.log(url)

    request.open('GET',url,true);
    request.send();

    document.getElementById("heading").innerHTML=""
    document.getElementById("cowinTable").innerHTML=""
    document.getElementById("count").innerHTML=""
    document.getElementById("description").innerHTML=""

    request.onload=function(){
        var res=JSON.parse(this.response);
       // console.log(res.sessions)
        
            if(res.sessions.length==0){
            document.getElementById("count").innerHTML="No Slots available"
            }
            else{
                var des="<p style='color: orange;font-size: 20px;'> Date : "+today+"<br> <b style='color: red;'>Representation</b><br> <span style='color:pink;'>Pink - Unavailable</span><br>    <span style='color:lightgreen;'>Green - Available</span><br></p>"
                document.getElementById("description").innerHTML=des;
            document.getElementById("heading").innerHTML="Vaccine available slots in "+res.sessions[0].district_name+", "+res.sessions[0].state_name;
            let table=document.createElement("table");
            table.cellPadding="15"
            table.align="center";
            table.border="1";
            
            table.className="table-striped table-hover"
            
            let row=table.insertRow(-1)
            row.style.color="blue"
            row.style.backgroundColor="lightcoral"
            row.align="center";
            let center_name=row.insertCell(-1)
            let address=row.insertCell(-1)
            let minAge=row.insertCell(-1)
            let vaccine=row.insertCell(-1)
            let feeType=row.insertCell(-1)
            let fee=row.insertCell(-1)
            let dose1=row.insertCell(-1)
            let dose2=row.insertCell(-1)

            center_name.style.padding='20px'
            
            address.style.width="20%"
            center_name.style.width="10%" 
            minAge.style.width="15%" 
            fee.style.width="10%" 
            feeType.style.width="10%" 
            dose1.style.width="10%" 
            dose2.style.width="10%" 
            vaccine.style.width="15%"


            center_name.innerHTML="Centre Name";
            address.innerHTML="Address";
            minAge.innerHTML="Min Age Limit";
            vaccine.innerHTML="Vaccine Name";
            feeType.innerHTML="Fee Type";
            fee.innerHTML="Fee";
            dose1.innerHTML="Dose 1";
            dose2.innerHTML="Dose 2";
            res=res.sessions
            var free=0,paid=0,av=0;

            res.forEach((data)=>{
                if(data.fee==0)
                    free+=1
                else
                    paid+=1
                if(data.available_capacity>0)
                    av+=1
            })
            document.getElementById("count").innerHTML="Paid Vaccine centres : "+paid+"<br>Free Vaccine Centres : "+free+"<br>Available Vaccine Centers : "+av;
            
            res.forEach((data)=>{

                if(data.available_capacity>0){
                let row2=table.insertRow(-1)    
                
                row2.align="center"
                row2.style.color="maroon"
                let center_name2=row2.insertCell(-1)
                let address2=row2.insertCell(-1)
                let minAge2=row2.insertCell(-1)
                let vaccine2=row2.insertCell(-1)
                let feeType2=row2.insertCell(-1)
                let fee2=row2.insertCell(-1)
                let dose12=row2.insertCell(-1)
                let dose22=row2.insertCell(-1)
                
                address2.style.padding="20px"
                center_name2.style.padding="15px"

                center_name2.innerHTML=data.name;
                address2.innerHTML=data.address+", "+data.pincode;
                minAge2.innerHTML=data.min_age_limit
                vaccine2.innerHTML=data.vaccine
                feeType2.innerHTML=data.fee_type
                fee2.innerHTML=data.fee
                if((data.fee_type)=="Free")
                    feeType2.style.border="2px solid green"
                else
                    feeType2.style.border="2px solid red"
                if(parseInt(data.available_capacity)>0)
                    row2.style.backgroundColor="lightgreen"
                if(parseInt(data.available_capacity)==0)
                    row2.style.backgroundColor="pink"
                dose12.innerHTML=data.available_capacity_dose1
                dose22.innerHTML=data.available_capacity_dose2
                
                }    
            });
            tab=document.getElementById("cowinTable")
            tab.append(table);
        

            res.forEach((data)=>{

                if(data.available_capacity==0){
                let row2=table.insertRow(-1)    
                
                row2.align="center"
                row2.style.color="maroon"
                let center_name2=row2.insertCell(-1)
                let address2=row2.insertCell(-1)
                let minAge2=row2.insertCell(-1)
                let vaccine2=row2.insertCell(-1)
                let feeType2=row2.insertCell(-1)
                let fee2=row2.insertCell(-1)
                let dose12=row2.insertCell(-1)
                let dose22=row2.insertCell(-1)
                
                address2.style.padding="20px"
                center_name2.style.padding="15px"

                center_name2.innerHTML=data.name;
                address2.innerHTML=data.address+", "+data.pincode;
                minAge2.innerHTML=data.min_age_limit
                vaccine2.innerHTML=data.vaccine
                feeType2.innerHTML=data.fee_type
                fee2.innerHTML=data.fee
                if((data.fee_type)=="Free")
                    feeType2.style.border="2px solid green"
                else
                    feeType2.style.border="2px solid red"
                if(parseInt(data.available_capacity)>0)
                    row2.style.backgroundColor="lightgreen"
                if(parseInt(data.available_capacity)==0)
                    row2.style.backgroundColor="pink"
                dose12.innerHTML=data.available_capacity_dose1
                dose22.innerHTML=data.available_capacity_dose2
                
                }    
            });
            tab=document.getElementById("cowinTable")
            tab.append(table);
        }
    }
}

// fetch=  require('node-fetch');
// var  url=    

// fetch(url)
// .then((response)=>{
//     return response.json()
// }).then((data)=>
// {
//     console.log(data)
// })