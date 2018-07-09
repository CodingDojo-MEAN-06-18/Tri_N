function Ninja(name){
	this.name = name;
	this.health = 100;
	var speed = 3;
	var stength = 3;

	this.showStats = function(){
		console.log("Name is " + this.name)
		console.log("Stength is " + stength)
		console.log("Speed is " + speed)
		console.log("Health is " + this.health)
		return this;
	}
}

Ninja.prototype.sayName = function(){
	console.log('Name is ' + this.name);
	return this;
}

Ninja.prototype.drinkSake = function(){
	this.health += 10;
	return this;
}


var ninja1 = new Ninja("Hello");
ninja1.sayName();
ninja1.showStats();
