// s=(a,b)=>(a*b)
// console.log(s(5,4));

// class car{
//     constructor(name,brand="",){
//         this.name=name;
//         this.speed=speed;
        
//     }

//     accelerate(speed){
//         if(speed+)
//     }
// }


// a=[1,2,3,4,5,6]
// b=[...a]
// b[0]=8
// console.log(a)
// console.log(b)

// // console.log(a)
// // console.lo                       

// let name=["Ram","A"]

// let[firstname,lastname]=name
// console.log(firstname)
// console.log(lastname)

// let [,,age]=[,,52]

// console.log(age)

// let [fname="yash",lname="J",age1]=["Yashwanth","Kumar"]
// console.log(fname)
// console.log(lname)
// console.log(age1)

// let names=["hi",1,2,3,4,5,6]
// let [a,...b]=names
// console.log(a)
// console.log(b)
// function *sum(n){
//     n1=n*2;
//     n2=yield n1
//     n2=n2*4
//     return n2;
// }

// itr=sum(10);
// p=itr.next();
// x=p.value*3

// ans=itr.next(x);
// console.log(ans.value)

// class TV{
//     constructor(brand,channel=2,volume=67){
//         this.brand=brand
//         this.channel=channel
//         this.volume=volume
//     }

//     increase_vol(vol){
//         if(this.volume+vol<=100)
//             this.volume+=vol
//         else
//             console.log("Volume is exceeding more than limit")
//     }

//     decrease_vol(vol){
//         if(this.volume-vol>=0)
//             this.volume-=vol
//         else
//             console.log("Volume is less than limit")
//     }

//     set changeChannel(channel){
//         if(channel<=100 && channel>=1)
//             this.channel=channel
        
//     }

//     get channelNum(){
//         return this.channel
//     }

//     get volumes(){
//         return this.volume
//     }

//     get brandName(){
//         return this.brand
//     }

//     display(){
//         console.log("Brand : "+this.brand);
//         console.log("Channel : "+this.channel);
//         console.log("Volume : "+this.volume);
//     }
// }

// let t=new TV("LG");
// console.log(t.channelNum);
// t.increase_vol(3);
// t.changeChannel=45;
// console.log(t.channelNum);
// console.log(t.volumes);
// t.decrease_vol(3);
// console.log(t.volumes);
// console.log(t.brandName);
// t.display();
class Car{
    constructor(model = "Q8",brand = "Audi",currentSpeed=28,topSpeed=240)
    {
        this.model = model;
        this.brand = brand;
        this.currentSpeed = currentSpeed;
        this.topSpeed = topSpeed;
    }
    accelerate(n=5)
    {
        let x = this.currentSpeed + parseInt(n);
        if(x <= this.topSpeed)
            this.currentSpeed = x;
        else
        {
            this.currentSpeed = this.topSpeed;
            console.log("Top Speed reached");
        }
    }
    decelerate(n=6)
    {
        let x = this.currentSpeed - parseInt(n);
        if(x >= 0)
            this.currentSpeed = x;
        else
            console.log("Can't decelerate");
    }
    Stop()
    {
        this.currentSpeed = 0;
        console.log("Car is stopped");
    }
    displayCarStatus()
    {
        console.log("Car Model : "+this.model+"\nBrand : "+this.brand+"\nCurrent Speed : "+this.currentSpeed+"\nTopSpeed = "+this.topSpeed);
    }
}
let Car1 = new Car("Honda",'City');
Car1.displayCarStatus();
console.log();
Car1.accelerate();
console.log("Car Accelerated");
Car1.displayCarStatus();
Car1.decelerate();
Car1.Stop()
Car1.displayCarStatus();