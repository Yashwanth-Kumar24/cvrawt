function sendMessage(){
  var tempParams={
    from_name:"Hyderabad",
    to_name:"Siddhartha",
    message:"Hello",
    email:"yashwanthkumar.jannaikode@gmail.com"
  }

  emailjs.send('service_1bbmvxu','template_sdx7ulr',tempParams)
  .then(function(res){
      console.log("success ",res.status)
  })
}