// if statements 
// if... else statement
//if...else if statement
//the syntax of an if statement
//if(){}
//if (expression){
//       statments to be executed if expression is true
/* }else {
    statments to be executed if expression is false
}*/
// Example
let weather ="cloudy";
if (weather == "shining"){
    console.log("we go swimming")
}else{
    console.log("stay in the house for a movie")
}
let age = 23;
if (age > 18){
    console.log("you are eligible to have a driving licence")
}else if(age == 18){
    console.log("you just became eligible to get a driving licence")
}else{
    console.log("you are not eligible to have a driving licence")
}

// tanary operator
// condition ? printed statement if condition is true:printed statement if condition is false
let cloudy = "carry your jacket"
let shiny = "wear light clothes"
console.log(weather = "cloudy"? cloudy:shiny)

//Switch statement or switch case
//EXAMPLES
let startRating = 1;
switch(startRating){
    case 1:
        console.log("very bad");
        break;
    case 2:
        console.log("Bad");
        break;
    case 3:
        console.log("Average");
        break;
    case 4:
        console.log("Good");
        break;
    case 5:
        console.log("Excellent"); 
        break;
    default:
        console.log("please enter a valid number between 1 and 5")                  
}
let car = "subaru";
switch(car){
    case "mercedes":
        console.log("very fast");
        break;
    case "lamborgin":
        console.log("luxarious");
        break;
    case "land rover":
        console.log("fascinating");
        break;
    case "BMW":
        console.log("Perfect proposal");
        break;
    case "Bently":
        console.log("classy"); 
        break;
    default:
        console.log("please enter a valid car model")
}
let car2 = "land rover";
switch(car2){
    case "mercedes":
        console.log("very fast");
        break;
    case "lamborgin":
        console.log("luxarious");
        break;
    case "land rover":
        console.log("fascinating");
        break;
    case "BMW":
        console.log("Perfect proposal");
        break;
    case "Bently":
        console.log("classy"); 
        break;
    default:
        console.log("please enter a valid car model")
}
let fruits  = ["apples" , "mangoes","pineapples","oranges","watermelon"];
for(let fruit of fruits){
switch(fruit){
    case "apples":
        console.log("delicious");
        break;
    case "mangoes":
        console.log("juicy");
        break;
    case "pineapples":
        console.log("scrumptious");
        break;
    case "oranges":
        console.log("hmmmn yeah");
        break;
    case "watermelon":
        console.log("red juice"); 
        break;
    default:
        console.log("please enter a valid fruit")
}}



switch(new Date().getDay()){
    case 0:
        console.log("sunday");
        break;
    case 1:
         console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    default:
         console.log("please enter a valid day")
}