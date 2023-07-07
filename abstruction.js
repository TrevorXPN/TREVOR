// Is a way of hiding the implementation details and showing only the functionality to the users
//This hides certain details about the    only shows the essential ft of the object
//this process improve understandability and maintainability of the code
// Hide details and show essentialsa

// EXAMPLE

//NO ABSTRACTION
function Employee(empName, age,baseSalary){
    this.empName = empName;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus= 1000
    this.calculateFinalSalary = function(){
        let finalSalary = this.baseSalary + this.monthlyBonus
        console.log("final salary is :" + finalSalary)
    }
    this.getempDetails = function(){
        console.log("Name" + this.empName + " age" + this.age)
    }
}
let emp1 = new Employee("Trevor",30, 2000)
emp1.getempDetails()
emp1.calculateFinalSalary()

//WITH ABSTRUCTION

function Employee(empName, age,baseSalary){
    this.empName = empName;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus= 1000// let turns it to a private / hidden variable
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus
        console.log("final salary is :" + finalSalary)
    }
    //another private method
    let calculateempService = function(){
        let startYear = 1990
        let yearNow = 2023
        let yearsWorked = yearNow - startYear
        if(yearsWorked>30){
            console.log("This employee is due for retirement")
        }else if(yearsWorked===30) {   
            console.log("This employee is working for 30 years")
       }else
       console.log("This employee is still in service")
       
    this.getempDetails = function(){
        console.log("Name" + this.empName + " age" + this.age)
        calculateempService()
    }
}
let emp2 = new Employee("Trevor",30, 2000)
emp2.getempDetails()
emp2.calculateFinalSalary()
