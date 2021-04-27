class TV{
	var brand,channel,volume;
	constructor(brand){
		this.brand=brand;
		this.channel=45;
		this.volume=10;
	}

	reset(){
		this.channel=45;
		this.volume=10;
	}

	increase_volume(vol){
	
			if(this.volume+vol<=100)
				this.volume+=vol;
	}

	deccrease_volume(vol){
		
			if(this.volume-vol>=0)
				this.volume-=vol;
		
	}
	
	set channel(newchannel){
		if(newchannel>0 && newchannel<100)
			this.channel=newchannel;
	}

	displaystatus(){
		console.log(this.brand);
		console.log(this.channel);
		console.log(this.volume);
	}

}

let tv=new TV("LG");
console.log(tv.displaystatus());