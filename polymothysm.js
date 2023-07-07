//POLY- MANY
//MORPH - Change
//This in OOP is the ability to create avariable , a function or an object that has more than one form.
//


//EXAMPLE;
class Animal{
    constructor(animalName){
            this.animalName = animalName;
        }
        //this method / function is poly morphic becoz it also exists in the child class Aligator
        eats(){
            console.log(this.animalName + " eats meat.");
        }
        walks() {
            console.log(this.animalName + " walks.");
        }
}

class Aligator extends Animal{//this means aligator inherits from animal
    eats() {
        super.eats();//"super"means that its getting the function from parent class
                console.log(this.animalName + " eats fish.");
    }
    walks() {
        super.walks();
        console.log(this.animalName + " walks.");
}          
}

let vinity = new Aligator("Vincent"); //new is used when creating an object from a class
vinity.eats()//functions always have parenthesis()

// class Dog extends Animal{
//     eats() {
//         super.eats();
//         console.log(this.animalName + " eats meat.");
//     }
// }
// let dai = new Dog("joach")
// dai.eats()
vinity.walks()