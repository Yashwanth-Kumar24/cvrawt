function findWeather(){
    
    var api="f825702b1fdb79c62f5c16e17cf0ee37"
    let city=document.getElementById("cityName").value;
    //console.log(city)
     
        let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api}`
        let url2=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
        
        console.log(url2)

        

        Promise.all([
            fetch(url2),         
            fetch(url)            
        ])
        .then((responses)=>{
            return Promise.all(responses.map((response)=>{
                return response.json()
            }))
        })
        .then((data)=>
        {   

            
            res=data[1]
            res2=data[0]
            // console.log(res)
            // console.log(res2.cod)

            //reset all values
            document.getElementById("current").innerHTML=""
            document.getElementById("heading").innerHTML=""
            document.getElementById("tempTable").innerHTML=""
            //Current Weather
            if(res2.cod==200)
            document.getElementById("current").innerHTML="Current weather of "+city+" is "+res2.main.temp+" C";
            else
            document.getElementById("current").innerHTML="Please enter proper city name"

            //Forecast
           // console.log(res)
            if(res.cod==200)
            document.getElementById("heading").innerHTML="Weather forecast of "+city;

            let table=document.createElement("table");
            table.cellPadding="15"
            table.align="center";
            table.border="1";
            
            table.className="table-striped table-hover"
            
            let row=table.insertRow(-1)
            row.style.color="blue"
            row.align="center"
            let date=row.insertCell(-1)
            let time=row.insertCell(-1)
            let temp=row.insertCell(-1)
            let temp2=row.insertCell(-1)
            let temp3=row.insertCell(-1)
            let icon=row.insertCell(-1);
            temp.style.padding="10px"
            temp2.style.padding="10px"
            temp3.style.padding="10px"

            date.innerHTML="Date";
            time.innerHTML="Time";
            temp.innerHTML="Temperature";
            temp2.innerHTML="Min Temperature";
            temp3.innerHTML="Max Temperature";
            icon.innerHTML="Status";
            
            res.list.forEach((dis)=>{
                let row2=table.insertRow(-1)
                
                row2.align="center"
                row2.style.color="orange"
                let dateDis=row2.insertCell(-1);
                let timeDis=row2.insertCell(-1);
                let tempDis=row2.insertCell(-1);
                let tempDis2=row2.insertCell(-1);
                let tempDis3=row2.insertCell(-1);
                let icon2=row2.insertCell(-1);
                dateDis.style.padding="10px";
                timeDis.style.padding="10px";
                
                let imgs=document.createElement("img");
                imgs.src="http://openweathermap.org/img/wn/"+dis.weather[0].icon+"@2x.png"
                icon2.style.padding="10px"
                var s=dis.dt_txt.split(" ");
                icon2.style.color="red"
                dateDis.innerHTML=s[0];
                timeDis.innerHTML=s[1];
                tempDis.innerHTML=dis.main.temp;
                tempDis2.innerHTML=dis.main.temp_min;
                tempDis3.innerHTML=dis.main.temp_max;
                icon2.append(imgs)
                icon2.innerHTML+="<br>"+dis.weather[0].description;
                            
            });
            
            tab=document.getElementById("tempTable")
            tab.append(table);
        })
        
  

}
