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

    this.kick = function(ninjakick){
        const damage = stength * 15;
        ninjakick.health -= damage;
        console.log(ninjakick.name + " was kicked by " + this.name + " and lost " + damage + " health ");
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

Ninja.prototype.punch = function(ninjapunch){
    ninjapunch.health -= 5;
    console.log(ninjapunch.name + " was punched by " + this.name + "and lost 5 health");
}


// var ninja1 = new Ninja("Hello");
// ninja1.sayName();
// ninja1.showStats();

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
blueNinja.sayName();
redNinja.sayName();

blueNinja.punch(redNinja);
redNinja.kick(blueNinja);

blueNinja.showStats();
redNinja.showStats();