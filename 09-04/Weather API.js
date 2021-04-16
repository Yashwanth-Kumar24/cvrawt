function getCityCode(cityCode){
    return new Promise((resolve,reject)=>{
        console.log("Getting city code from db");
        setTimeout(()=>{
            resolve({
                userId:cityCode,
                pinCode: '500068'
            });
        },2000);
    })
}

function getCityName(cityDetails){
    return new Promise((resolve,reject)=>{
        console.log("Fetching Name of city with pincode "+cityDetails.pinCode+" from the API");
        setTimeout(()=>{
            resolve('Hyderabad');
        },3*1000);
    });
}


function getWeather(Name){
    return new Promise((resolve,reject)=>{
        console.log("Weather of "+Name+".");
        setTimeout(()=>{
            resolve(26.5+"degree C");
        },2*1000);
    });
}


getCityCode('HYD').
    then(getCityName).
    then(getWeather).
    then(console.log)

    // getUser(100).
    // then((result)=>getServices(result)).
    // then((res)=>getServiceCost(res)).
    // then((cres)=>console.log(cres))
