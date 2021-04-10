XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;
const request=new XMLHttpRequest();
request.open("GET","https://api.covid19api.com/country/india",true);
request.send();
request.onload=function(){
   
            console.log(request.responseText);
            
  
}
