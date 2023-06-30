console.log("hello world")

// 1.Comments
// used to provide information about the code
// can be used in general to provide any information o suggestion
// makes it easy  to understand the code or get more information about the code
// can also be used to comment out code sections
// comments are ignored by javascript engine
// comments can be single line o mulitiline
// examples
// this is a singleline comment
/*
this is a mulitline comment
*/

// 2.variables
// used to store data 
// can be looked at as containers for storing data values
// must contain only letters, digits or $ and _symbol

// guidelines for naming variables 
// must begin with a letter or _
// should not start with a number
// must not be a reserved key word like, if, else,boolean, let,var, const etc
// variables are case senstive
// use meaningful names
//  use camel casing
// 
// var was used in earlier versions but now we use let and const

// examples
// variable declaration
let age;
// variable initialisation
age = 23
// = this is called an assignment opperator
let studentName = "Monica"
console.log(studentName)
// declaring many variables on the same line
let firstName, lastName, cohort, year;
firstName = "ANGEL";
lastName = "UMWIZA";
cohort = 10;
year = 2000;
firstName = "Edwin"
console.log(firstName)

// dealing with constants
const carName = "Rangerover"
console.log(carName)
// carName = "Gipu"
// console.log(carName)

// naming conventions
// camelcase eg. firstName
//  pascalcase eg. FirstName
// snakecase eg. fist_name
// all caps snakecase eg. FIRST_NAME
// kebabcase eg first-name
 let trustMe;
 undefined;
console.log(trustMe)

// variable scopes
let num1 = 5;
let num2 = 10;
if (num1>num2) {
    console.log("num1 is greator than num2")
}else {
    console.log("num2 is greator than num1") 
}