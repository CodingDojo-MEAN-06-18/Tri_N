class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My Ninja name is ${this.name}`);
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Stength: ${this.stength} `);
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}
class Sensei extends Ninja {
	constructor(name){
		super(name);
		this.speed = 10;
		this.health = 210;
		this.strength = 10;
		this.wisdom = 10;
	}

	speakWisdom(){
		super.drinkSake();
		console.log("what one programmer can do in one month, 2 programers can do in 2 months.")
		return this;
	}
	showStats() {
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
	}

}

const ninja1 = new Ninja("Hello");
ninja1.sayName(); 
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();