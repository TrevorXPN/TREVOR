//A class is a blueprint of an object 
//A CLASS WILL ALWAYS HAVE ITS NAME IN SINGULAR

//THIS keyword refers to the object of the class

//Syntax of a class
class ClassName{
    statements
}
//EXAMPLES
class Employee{
    //a class always has a  constructor which is called whenever a class is instantiated or an object of the class is created
    //the constructor helps us to define
    constructor(name,id,gender,age,color,education){
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.color = color;
        this.education = education;
    }
}

//An object is an infant of a class

//CREATING OBJECTS OF EMPLOYEE CLASS
let emp1 = new Employee("Trevor",1,"male",22,"black","bachlars in Public Speaking")
let emp2 = new Employee("Sam",2,"male",33,"brown","S.6 leaver")
console.log(emp1)
console.log(emp2)
//dot notation
console.log(emp1.name)
console.log(emp2.color)
//bracket notation
console.log(emp1["gender"])
console.log(emp2["gender"])

class Car{
    constructor(carName, manufacturer,speed,color){
        this.carName = carName;
        this.manufacturer = manufacturer;
        this.speed = speed;
        this.color = color;
    }
}

let car1 = new Car("vitz","toyota", "100km/hr","black");

console.log(car1)
