/*
Work with a partner to create a monkey object, which has the following properties:

name
species
foodsEaten
And the following methods:

eatSomething(thingAsString)
introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets).

*/


class monkey {
    constructor(name, species, foodsEaten) {
        this.name = name;
        this.species = species;
        this.foodsEaten = foodsEaten;
    }
    get Name() {
        return this.name;
    }

    eatSomething() {
        var intro = "Hello, My name is " + this.name + ". I am a " + this.species + ", and I eat " + this.foodsEaten
        return intro;
    }


}


var animal1 = new monkey("sam", "gorila", "banana");
var animal2 = new monkey("john", "mandill", "banana");
var animal3 = new monkey("abe", "gorila", "mango");

console.log("animal1 :" + animal1.eatSomething());
console.log("animal1 :" + animal1.Name);
console.log("animal1 :" + animal1['species']);
console.log(" ");

console.log("animal2 :" + animal2.eatSomething());
console.log("animal1 :" + animal1.eatSomething());
console.log(" ");

console.log("animal3 :" + animal3.eatSomething());
console.log("animal1 :" + animal1.eatSomething());