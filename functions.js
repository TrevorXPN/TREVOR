//a function is a reusable block of code

//SYNTAX OF A FUNCTION;
function functionName(){
    //function body/ statement
}

//example of non-parametarised function
//function without parameters

function add(){
    console.log(2 + 3)
}
add();//function invocation

//defining a parameterised function

function add2(a,b){
    console.log(a + b)
}
add2(5,4)

//THE RETURN KEYWORD

function add3(c,d){
    return (c+d)
}
console.log( add3(42,33) )
               //OR
function add4(h,v){
    let sum = h+v;
    return sum //used a variable
}
add4()
    console.log(add4(22,22))
    console.log(add4(22))//the 2nd argument is missing so the engin fills up with undefinined and result eill be
    //NaN BECOZ 22 + undefined will give us NaN

function greeting(){
    console.log("how are you")
}
greeting()

//VARIABLE SCOPE
//local variables and global variables
//A local variable has a limited scope(can be accessed only inside a function where it is defined)
//A global variable has a global scope (it is declared outside any function and can be accessed by any function)

//Examples of local variables
function multiply(){
    let localVariable1 = 5;//defined within a function
    let localVariable2 = 6;
    let product = localVariable1*localVariable2;
    return product
}
console.log(multiply())

// function addition(){
//     let total = localVariable1 + localVariable2;
//     return total
// } 
//console.log(addition())

//Examples of global variables
let globalVariable1 = 2;//(defined outside the function)
let globalVariable2 = 3;
function multiply2(){
    let product = globalVariable1*globalVariable2
    return product
}
console.log(multiply2())

function addition2 (){
    let total = globalVariable1+globalVariable2
    return total
}
console.log(addition2())

//ARROW FUNCTIONS

const sum=(m,b) =>{
    return m + b
}
console.log(sum(23,34))

//consise way of writing a non arrow function with one line of code in the bode
const sum1 = (a,b) => a+b

//Example
const sum2 = (a,b) => {
    let result = a+b 
    return `The result is ${result} per the calculation`
}
console.log(sum2(4,6))