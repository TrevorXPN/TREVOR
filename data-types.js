// data types

// 1.strings
// represents textual data
// examples
let dogName = "Freddie"
console.log(dogName)

// WORKING WITH STRINGS
console.log("He said,'hi there'")
console.log("He said,\"hi there\"")
console.log('He said,\'hi there\'')
console.log('He said,"hi there"')

let num3 = "5"
console.log(typeof num3)

// Number
// stands for floating point number, integers
// eg
// 5, 4.7,2e-5

// undefined
// a data type whose variable is not initialised
// eg
let a;
let ab = undefined;
console.log(a)
console.log(ab)

// Null
// it denotes a null value
let b = null;
console.log(typeof b)

// boolean
// any of two values ie true or false
// eg true or false
let num4 = 5;
let num5 = 5;
let num6 = 2;
console.log(num4==num5)
console.log(num4==num6)
console.log(num6>num4)

// bigint
// An integer with abituary length
// a big number

// Symbol
// data type whose instances are unique and imutable
let value = Symbol("how are you")

// Object
// key value pairs of a collection of data
let student = {firstName:"Angel",lastName:"King"}

// LITERALS
// not a  data type
// eg
"how are you" //string literal
1.2 //numeric literal
true //boolean literal
//{a:1,b:2,c:3}//object literal
[1,2,3,4]//array literal
undefined//undefined literal
