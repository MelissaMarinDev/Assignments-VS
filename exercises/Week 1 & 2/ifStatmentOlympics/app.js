// Preliminaries
// Write an if statement that prints "is greater than" if 5 is greater than 3

console.log("Preliminary Answers")

var a = 5
var b = 3

if (a > b) {
  console.log("1. 5 is greater than 3!")
}else {
  console.log ("1. That is less than 3")
}
// Write an if statement that prints "is the length" if the length of "cat" is 3
var cat = 2
if (cat === 3){
console.log ("2.Yes, 3 is the length of the cat")
}else{
  console.log ("2. No, that is not the length of the cat.")
}
// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
if ("cat" !== "dog"){
    console.log ("3. These are not the same")
  } else {
  console.log ("3. These are the same.")
  }

//   Bronze Medal
// Write an if statement that prints <theNameOfThePerson> + is allowed to go to the movie if they are old enough, and the opposite if they are not older than 18.

console.log("Bronze Answers")

var person = {  
  name: "Bobby",
  age: 12
}

if (person.age >= 9){
    console.log("1. " + person.name + " is allowed to go to the movies.")
} else {
    console.log("1. " + person.name + " is NOT allowed to go to the movies.")
}
// Using that same object, only allow them into the movie if their name starts with "B"
if (person.name[0] === "B"){
    console.log("2. " + person.name + " is allowed into the movies.")
}else{
    console.log("2. " + person.name + " is not allowed into the movies. Sorry, your name does not start with a 'B'.")
}

// Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
if (person.name[0] === "B" && person.age >= 18){
    console.log ("3. " + person.name + " is allowed into the movies.")
}else {
    console.log ("3. " + person.name + " is NOT allowed into the movies.")
}

//SILVER MEDAL
// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
console.log("Silver Answers")
var num = "1";

switch(num){
    case num === 1 :
        console.log ("1. strict")
        break;
    case num == 1 :
        console.log ("1. loose/abstract")
        break;
     default :
        console.log ("1. Not equal at all")
        break;
}

// Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
if (1 <= 2 && 2 === 4 ){
    console.log ("2. yes")
}else {
    console.log ("2. no")
}
// OR!!!
// 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.
if (4 > 10 && (5+10)>10 ){
    console.log ("3. yes")
}else {
    console.log ("3. no")
}

//GOLD MEDALS
console.log("Gold Medal Answers")
// Gold may take some googling! 
// 1. Write an if statement that checks to see if "dog" is a string 
// 2. Write an if statement that checks to see if "true" is a boolean 

var dataType = typeof "dog"

switch (dataType){
  case "string" : 
    console.log("This is a string.");
    break;
  case "boolean" :
    console.log("This is a boolean.");
    break;
  case "number":
    console.log("This is a number.");
    break;
  case "undefined":
    console.log("This is undefined. 'Aka' a falsey.")
}

// 3. Write an if statement tha// 3. Write an if statement that checks to see if a variable has been defined or not 

var testMe = Nan

if (testMe === null){
  console.log("Variable 'testMe' has nothing in it. It is NOT testMe.")
} else if (testMe !== null){
  console.log (" Variable 'testMe' HAS been defined. It has the value of " + testMe)
}


//TO DO       TO DO         TO DO           TODO              TODO
// 4. Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater than" other numbers or letters. For example: is "s" greater than 12? 
// 5. Write a ternary statement that console.logs whether a number is odd or even. For example:

// var myNum = 10;  
// // Write your ternary here to log if `myNum` is odd or even.
