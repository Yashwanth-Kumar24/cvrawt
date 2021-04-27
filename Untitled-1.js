function getUser(userId){
    return new Promise((resolve,reject)=>{
        console.log("User details being fetched from db");
        setTimeout(()=>{
            resolve({
                userId:userId,
                userName: 'Yashwanth'
            });
        },2000);
    })
}

function getServices(user){
    return new Promise((resolve,reject)=>{
        console.log("Getching services of "+user.userName+" from the API");
        setTimeout(()=>{
            resolve(['VPN','Phone calls','CDN']);
        },3*1000);
    });
}


function getServiceCost(services){
    return new Promise((resolve,reject)=>{
        console.log("Computing the services cost of "+services+".");
        setTimeout(()=>{
            resolve(services+" "+services.length*500);
        },2*1000);
    });
}


getUser(100).
    then(getServices).
    then(getServiceCost).
    then(console.log)
console.log("=======********===========\n\n\n")
    getUser(100).
    then((result)=>getServices(result)).
    then((res)=>getServiceCost(res)).
    then((cres)=>console.log(cres))
