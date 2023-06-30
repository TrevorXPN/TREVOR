// there are a number of operations available for strings
// converting a string to upper case or lower case
//removing specified characters
// determining the length or number of characters for a string
// taking the alphabetical odering of string values
// removingleading or trailing white space from values
// extract the first or last and characters from a string

// 1.Declaration
let string1 = "goint to school";

// 2.Escape sequences
let escape1 = "He said,'hi there'";
let escape2 = "He said,\"hi there\"";
let escape3 = 'He said,\'hi there\'';
let escape4 = 'He said,"hi there"';
console.log(escape1)
console.log(escape2)
console.log(escape3)
console.log(escape4)

// 3.concatenation
var beatifulName = "Angels are beautiful";
var others = "they are priceless";
console.log(beatifulName + " and  " + others)

// 4.string literals
let string5 = "Butterfly"

// 5. string interpolation
// this is a handy way to merge javascript expressions
// the basic syntax is
// `something space ${expression} something`
var age = 25;
console.log(`Edwin is ${age} years old`)

// string methods
// a.string length
// the length property returns the length of a string
let myString = "abcdefghijklmnopqrstuvwxyz"
console.log("The length of this string is ...",myString.length)

let myString1 = "Smile, Jesus loves you!"
console.log(myString1.length)

//b.extracting parts of a string
// slice( start,end )
// slice extracts part of a string and returns the extracted part in a new string
// the method takes two parameters ie start and end position
console.log(myString.slice(5,13))
console.log(myString1.slice(7,12))
console.log(myString.substring(4,9))

// data type inversion
let num = 4;
let num2 ="9";
console.log(num + num2)
console.log(num + Number (num2))

let num3 = 9;
let num4 = 7;
console.log(num3 + num4)
console.log(num3 + String (num4))

// Objects
// objects store a collection of key value pairs
// each item in the collection has a name that we call a key and an associated value
let person = {firstName: "Trevor",age: 24, hobbies:["gaming","reading","discussions"]};

//accessing properties of an object
// dot notation
console.log(person.age)
console.log(person.hobbies)

//bracket notation
console.log(person["age"])
console.log("Trevor is " + person.age + " years old")

// adding properties of an object
person.height = "6.5ft";
console.log(person)
person["gender"] = "male";
console.log(person)

// deleting properties of an object
// delete removes the key value pair from the object and returns true
// unless it can not delete the propety ie if the property is non configurable
console.log(delete person.age)
console.log(person)
console.log(delete person["gender"])
console.log(person)

//object immutability
// YOU CAN NOT CHANGE AN ASSIGNMENT TO A CONSTANT VARIABLE
// CONST DECLARATION PROHIBITS ONE THING THE CONSTANT POINTS TO,BUT IT DOESNT PROHIBIT CHANGING THE CONTENT OF THAT THING
// thus we can change the property in a constant object but we cant change which the contants points to
const myObject = {firstName: "Trinity;",height: "4.3ft",carName: "GIPU"};
console.log(myObject)
myObject.firstName = "Angel";
myObject.height = "4.5ft";
console.log(myObject)
//myObject = {lastName: "sugar",fruit: "kiwi"}
myObject.beatifulName = "Dante";
console.log(myObject)
myObject1 = {lastName: "sugar",fruit: "kiwi"}
console.log(myObject1)

// object freeze
// the object.freeza method is ment to freeza an object
// this doesnt allow new properties to be added to the object and prevents removing or altering the existing properties
//Object. freeze preserves the enumerability,configurability,and wrtability and prototype of object
const myObject2 = Object.freeze({dogName:"Freddie",age:12,city:"Kampala"})
console.log(myObject2)

//EXERCISE
// 1.Create 2 string variables
// 2.Create 2 number variables
// 3.Use concatenation
// 4.Use Escape characters
// 5.Create 3 objects with 2properties
//  *const
//  *const.frozen
//   *object
// 5b.add 2 properties to each objct
// 5c. delete one property from each
