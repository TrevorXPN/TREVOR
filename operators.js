// an operator is a symbol that usually represents an a action or process
// eg let sum = 10 + 20
// = this is an assignment operator
// + this is an arithmatic operator(addition)

// list of operators
// arithmatic operators
//assignment operators
// comparison operators
// logical operators
// type operators
// bitwise operators

// 1.ARITHMATIC OPERATORS
// + ADDITION
// - SUBTRACTION
// * MULTIPLICATION
// / DIVISION
// % MODULAS(Remainder of division)
// ** Exponation
//++ Increment
// -- Decrement

// let z = 6+2
// 6 and 2 are called operands;these are values on which the operator works

//1. Addition
let x = 23;
let y = 82;
let result1 = x+y;
console.log(result1)

// 2. Subtraction
var result2 = x-y;
console.log(result2)

// 3.multiplication
var result3 = x*y;
console.log(result3)

// 4. division
let result4 = x/y;
console.log(result4)

// 5. modulas
let result5 = y%x;
console.log(result5)
let result6 = x%y;
console.log(result6)
// the modulas returns a 0 if the number is divisible and returns the remainder if not divisible
var apples = 80;
var children = 20;
let ourResult = apples%children;
console.log(ourResult)

// Exponential
var s = 2;
var t = 5;
let resultp = s**t;
console.log(resultp)

// ++increment
//a.post increment
var keith = 3;
//this means you increase its value after an action
console.log(keith)
let result7 = 2 + keith++
console.log(result7)
console.log(keith)
let result8 = 2 + keith
console.log(result8)

// b.pre increment
var monica = 10;
 let result9 = 5 + ++monica
//increase value before action is done
console.log(result9)

// decrement
//a.post decrement
var edwin = 3;
let resultv = 2 + edwin--
console.log(resultv)
let resultv2 = 2 + edwin
console.log("____________",resultv2)

// b.pre decrement
var mary = 10;
let resultm = 5 + --mary
console.log(resultm)
let resultn = 2 + --edwin
console.log(resultn)

// INREMMENT BY MORE THAN ONE
var larry = 4;
larry +=2
//this is the same as larry + 2
console.log(larry)

// ASSIGNMENT OPERATOR
// 1.= Assign
// eg
let jules = 5;

// 2.+=add and assign
//eg
var gym = 20;
gym += 2

// 3. -=sub and assign
gym -= 3

//4.*= multiply and assign
gym *= 4

//5. /= divide and assign
gym /= 6

//6.%= modulas and assign
gym %= 10

// 7. ** exponetial and assign
gym **= 8

//copmaprison operators
var change1 = 20;
var change2 = 30;
var change3 = "30";
var change4 = 20;

//1. ==equal to
console.log( change1==change2)
console.log( change2==change3)
console.log( typeof change2)
console.log( typeof change3)

// 2. ===strict equal(equal value and equal data type)
console.log( change2===change3)

//3. != not equal to(! negation)
console.log(change1!=change4)
console.log(change2!=change3)

//4.!==strict not equal (not equal value and type)
console.log(change2!==change3)

//5. > greater than
console.log(change1 > change2)

//6. < less than
console.log(change1 < change2)

//7.>= greaterthan or equal to
console.log(change1 >= change4)

// 8. <= less or equal to
console.log(change1 <= change2)

//9. ? tanary operator
/*
this is like if -then-else
it takes three arguments/conditions? value if true,if false
*/
let age = 50;

let resulty = age > 18 ? "you can have a national id" : "you are below age so no id"
console.log(resulty)

if(age > 18){
 console.log("you can have a national id")   
}else{
    console.log("you are below age so no id")
}

//logical operators
var perry = true;
var perry1 = true;
var perry2 = false;
var perry3 = false;
//1. && logical AND -Returns true if both connditions are true
console.log(perry && perry1)
console.log(perry && perry2)
// or
console.log((age > 50) && (change1 > change2))
// false and false -result is false
// false and true -result is false
// true and false -result is false
// true and true -result is true

//2.||-logical OR- RETURNS TRUE IF ANY OF THE CONDITIONS IS TRUE
console.log(perry || perry1)
console.log(perry || perry2)
// false OR false -result is false
// false OR true -result is true
// true OR false -result is true
// true OR true -result is true

//3. ! -locical NOT -This return true if the conditition is fslse snd vise versa
console.log( ! perry)
console.log( ! perry2)
// false OR false -result is false
// false OR true -result is true
// true OR false -result is true
// true OR true -result is true

//type operators
//there are 2 type operators in javascript
// typeof andinstanceof
//type of returns the type of a variable
//we can use typeof operator to find the data type of a variable
// instanceof returns true if an object is an instance of an object type
//the instanceof operator returns a boolean value that indicates if an object is an instance of a particular class

//examples of typeof
let girl1 =20;
let girl2 ="beautiful"
console.log(typeof girl1)
console.log(typeof girl2)
console.log(typeof true)
console.log(typeof NaN)
console.log(typeof [1,2,3,4,5])
console.log(typeof {lastName : "June", color : "peach"})
console.log(typeof null)
console.log(typeof function(){})
console.log(typeof Dante)

//examples of instanceof
let lastName = new String("DOE")
let num1 = new Number(1234)
console.log(lastName instanceof String)
console.log(num1 instanceof Number)
