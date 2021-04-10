
// var ans="."
// function findLocation(lat,lon){
//     console.log("here")

//     var request=new XMLHttpRequest();
//     var api="f825702b1fdb79c62f5c16e17cf0ee37"
//     let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`

//     setTimeout(fetch(url)
// .then((response)=>{
//     return response.json()
// }).then((data)=>
// {
//     console.log(data.name)
    
// }),2000)
    //console.log(url)
    
    // request.open('GET',url,true);
    // request.send();


    // request.onload=function(){
    //     var res=JSON.parse(this.response);

    //     //console.log(res)
    //     ans=res.name;
    // }
    // return ans
//}


function findCases(){
    
    var request=new XMLHttpRequest();
     let cname=document.getElementById("countryName").value
    let url="https://api.covid19api.com/live/country/"+cname
        
    console.log(url)

    request.open('GET',url,true);
    request.send();

    request.onload=function(){
        var res=JSON.parse(this.response);
        
            document.getElementById("covidTable").innerHTML=""
            document.getElementById("heading").innerHTML=""
            document.getElementById("current").innerHTML=""
            

        if(res.length==0 || cname==""){
            document.getElementById("heading").innerHTML="Enter proper country name"
        }
        else{
            document.getElementById("heading").innerHTML="Covid Cases of "+cname
            //document.getElementById("current").innerHTML=""
            let table=document.createElement("table");
            table.cellPadding="15"
            table.align="center";
            table.border="1";
            
            table.className="table-striped table-hover"
            
            let row=table.insertRow(-1)
            row.style.color="blue"
            row.align="center";
            let province=row.insertCell(-1)
            let date=row.insertCell(-1)
            let Confirmed=row.insertCell(-1)
            let Active=row.insertCell(-1)
            let Recovered=row.insertCell(-1)
            let Deaths=row.insertCell(-1)
            
            
            date.style.padding="20px"
            Deaths.style.padding="20px" 
            Confirmed.style.padding="20px" 
            Active.style.padding="20px" 
            Recovered.style.padding="20px" 
            province.style.padding="20px"
            
            province.innerHTML="Name of the Province";
            date.innerHTML="Date";
            Confirmed.innerHTML="Confirmed Cases";
            Active.innerHTML="Active Cases";
            Recovered.innerHTML="Recovered Cases";
            Deaths.innerHTML="Deaths";
            
            for(let i=0;i<res.length;i++){
               // console.log(i+"---"+res.length)
            let row2=table.insertRow(-1)
            row2.style.color="maroon"
            row2.align="center";
            let province2=row2.insertCell(-1)
            let date2=row2.insertCell(-1)
            let Confirmed2=row2.insertCell(-1)
            let Active2=row2.insertCell(-1)
            let Recovered2=row2.insertCell(-1)
            let Deaths2=row2.insertCell(-1)
            
            
            date2.style.padding="20px"
            Deaths2.style.padding="20px" 
            province2.style.padding="20px"
            province2.style.width="40%"

            let datenew=res[i].Date.split("T");

            province2.innerHTML=res[i].Province
            date2.innerHTML=datenew[0];
            Confirmed2.innerHTML=res[i].Confirmed
            Active2.innerHTML=res[i].Active
            Recovered2.innerHTML=res[i].Recovered
            Deaths2.innerHTML=res[i].Deaths
            }

            
            tab=document.getElementById("covidTable")
            tab.append(table);

            
            
            //console.log(data.Province+" "+data.Confirmed);
        }
    }
}