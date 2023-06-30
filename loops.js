//1.for loops
//2.while loops
//3.do while loops

// 1.For loops
//for(initialisation; condition; increment){
//    body
//}
let studentNumber;
for(studentNumber = 0; studentNumber <= 10; studentNumber+=2){
     console.log("value of studentnumber is"  +" "  +  studentNumber)
}
let oddNumbers;
for(oddNumber = 1; oddNumber <= 10; oddNumber+=2){
    console.log("oddnumbers"  +" "  +  oddNumber)
}
//create 5 if statements
//create 5 switch cases
//create a switch case for arrays

//for of__the loop
//it allows you to itarate objects(arrays,sets,maps,strings etc)
//syntax is
//for(element of iterable){
       //body  of for  of
    //EXAMPLE
const stringA = "camel"
for(let i of stringA){
    console.log(i)
}

let fruits =  [{"apples":10},{"grapes":6},{"berries":8},{"banana":4}]
for (fruit of fruits){
    console.log(fruit)
}

// for___in loops
//the for in loop allows you to iterate all the property key of an object
for (fruit in fruits){
    console.log(fruits[fruit])
}
//example 
const stringH = "refactory"
for (i in stringH){
    console.log(stringH[i])
}
// while loops
let counter = 0;
while(counter <= 10){
    console.log("counter is=" + counter)
    counter++
}

//do-while loop
//there is an execution even when the condition is false
//normally not used because of the loophole it will have.

let counter2 = 23
do{
 counter2--
 console.log("value of counter is = " + counter2)
}while(counter2 >= 0)