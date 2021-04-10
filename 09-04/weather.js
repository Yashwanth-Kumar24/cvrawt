fetch=  require('node-fetch');
var api="f825702b1fdb79c62f5c16e17cf0ee37"
var city="Delhi"
var url="https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=f825702b1fdb79c62f5c16e17cf0ee37"
fetch(url)
.then((response)=>{
    return response.json()
}).then((data)=>
{
    console.log("Lat and Lon: "+data.coord);
    console.log("Temp :"+data.main.temp);
    console.log("Max temp: "+data.main.temp_max);
    console.log("Min temp: "+data.main.temp_min);
})
//request.open('GET',url,true);




// var onload=function(){
//     var res=JSON.parse(this.response);
//     table=document.createElement("table");
//     table.border="1";
//     row=table.insertRow(-1);
// }

