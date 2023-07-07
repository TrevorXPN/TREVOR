// Inheritance
//  A process where one class aquires properties(Methods and feilds) from another class
// Parent class--Child class
// Super class--Sub class
// Base class--Derived class
// Example
// Parent class
class Car{
    setName(carName){
        this.carName = carName;
    }
    getName(){
            // return this.carName;
            console.log("This car name is ",this.carName);
    }
    startEngine(){
        console.log("Starting the engine for "+this.carName);
    }
    stopEngine(){
        console.log("Stopping the engine for "+this.carName);
    }
       
}
// Child class
class Toyota extends Car{
    topSpeed(speed){
    console.log('top speed for '+ this.carName+' is '+ speed)

    }

}
let myCar = new Toyota()
myCar.setName('Beamer')
myCar.getName()
// myCar.startEngine()
myCar.stopEngine()
myCar.topSpeed(200)

class Person{
    setName(name) {
        this.name = name;
    }
    getName() {
    console.log('My name is ',this.name)
    }
    food(food1){
        this.food1 = food1;
        console.log('i love '+food1)
    }
    eat(){
        console.log('i love eating Eating '+this.food1)
    }

}
class Person1 extends Person {
    status(status){
        console.log('My status is that i an '+status)
    }
}
let clinton = new Person1()
clinton.setName('Clinton')
clinton.getName()
clinton.status('married')
clinton.food('matooke')
clinton.eat()