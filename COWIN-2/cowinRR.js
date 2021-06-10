function getSlots(){
    
    var request=new XMLHttpRequest();

    var distcode="603"
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
        
       
        var today2 = new Date();
        var hrs = today2.getHours();
        
        var mints = today2.getMinutes();
  
        var scnds = today2.getSeconds();
        if(hrs>18){
            dd=parseInt(dd)+1
        }
        var today = dd + '-' + mm + '-' + yyyy;
        var time = hrs + ':' + mints + ':' + scnds;

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
            var distname=res.sessions[0].district_name
            if(res.sessions.length==0){
            document.getElementById("count").innerHTML="No Slots available"
            }
            else{
                var des="<p style='color: orange;font-size: 20px;'> Date : "+today+"<br> Current Time : "+time+"<br> <b style='color: red;'>Representation</b><br> <span style='color:pink;'>Pink - Unavailable</span><br>    <span style='color:lightgreen;'>Green - Available</span><br></p>"
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
            var free=0,paid=0,av=0
            dose1=0,dose2=0
            var vaccinename1=""
            var vaccinename2=""
            var centrenames=""
            res.forEach((data)=>{
                if(data.fee==0)
                    free+=1
                else
                    paid+=1
                if(data.available_capacity>0)
                    av+=1
                if(data.available_capacity>0)
                    centrenames+=data.name+" ; "
                if(data.available_capacity_dose1>0){
                    dose1+=data.available_capacity_dose1
                    if(!(vaccinename1.includes(data.vaccine))){
                        vaccinename1+=data.vaccine+" ; "
                    }
                }
                if(data.available_capacity_dose2>0){
                    dose2+=data.available_capacity_dose2
                    if(!vaccinename2.includes(data.vaccine)){
                        vaccinename2+=data.vaccine+" ; "
                    }
                }
            })

            document.getElementById("count").innerHTML="Paid Vaccine centres : "+paid+"<br>Free Vaccine Centres : "+free+"<br>Available Vaccine Centers : "+av;
            
            //console.log(av,dose1,dose2,centrenames)
            if(av>0)
                sendMessage(distname,av,dose1,dose2,centrenames,vaccinename1,vaccinename2)

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

function sendMessage(place,av,dose1,dose2,centrenames,vaccinename1,vaccinename2){
    var tempParams={
      location:place,
      to_name:"People",
      dose1:dose1,
      dose2:dose2,
      message:av,
      vaccine1:vaccinename1,
      vaccine2:vaccinename2,
      centername:centrenames,
      email:"yashwanthkumar.jannaikode@gmail.com"
    }
  
    emailjs.send('service_1bbmvxu','template_sdx7ulr',tempParams)
    .then(function(res){
        console.log("success ",res.status)
    })
  }