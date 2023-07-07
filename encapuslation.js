// Encapulation
// A mechanism of restriting diret access to some of the objects components
// A mechanisim of bundling data with methods that operate on that data
// There are two ways of encapulation in javascript
// 1. Making data members private using var/let keywords
// 2.Set the data using setter methods and get the data using getter methods
// We can manage read and write access of objects properties using encapsulation
// Read Only Access: if we declare getter methods only then it facilitates the read only access
// Write Only Access: if we declare setter methods only then it facilitates the write only access
// Read And Write Access: if we declare both getter and setter methods then it facilitates both read and write access

// Why Encapsulation
// 1. Security- Controlled access- guards an object against illegal access
// 2. Hide implementations and expose behaviour- helps to archieve a level without revelining its complex details
// 3. Loose Coupling- Modify the implementation any time
// 4. Make the application more flexible and managable
// 5. Simplifies the application

// Example
class Worker{
    constructor(){
        // these are encapsulated
        let workName;
        let rating;
        let number;
    }
    // getter method
    getWorkName(){
        return this.workName;
    }
    // setter method
    setWorkName(workName){
        this.workName = workName;
    }
    // getter method
    // getRating(){
    //     return this.rating;
    // }
    //setter method
    setRating(rating){
        this.rating = rating;
    }
    // // getter method
    // getNumber(){
    //     return this.number;
    // }
    //setter method
    setNumber(number){
        this.number = number;
    }

}
let worker = new Worker();
worker.setWorkName('Clinton')
worker.setRating(5)
worker.setNumber(345)
// console.log(worker.getWorkName(), worker.getRating(), worker.getNumber())
console.log(worker)
console.log(worker.getWorkName())

// example 2
class Employee{
    setEmpDetails(EmpName, id, PhoneNumber){
        this.EmpName = EmpName;
        this.id = id;
        this.PhoneNumber = PhoneNumber;
    }
    getEmpName(){
        return this.EmpName;
    }
    getId(){
        return this.id;
    }
    getPhoneNumber(){
        return this.PhoneNumber;
    }
}
let Emp1 = new Employee();
Emp1.setEmpDetails('John', 123456789, '1234567890')
console.log(Emp1.getEmpName(), Emp1.getPhoneNumber(), Emp1.getId())
console.log(Emp1.getEmpName())
