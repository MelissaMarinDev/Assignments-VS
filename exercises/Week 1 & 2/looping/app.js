// Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".
for (i = 0; i < 101; i++){
    if (i % 2 === 0) {
        console.log( i + " is EVEN")
    }else if (i % 2 === 1) {
        console.log (i + " is Odd")
    } else {
        console.log ("This is not a number.")
    }
   }
//LOOPS AND ARRAYS PRACTICE
// #1
// Loop through the following array and count how many "computers" there are. Log the final count:
 
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]  
count = 0;
for (i = 0; i < officeItems.length; i++){
  console.log(officeItems[i])
  count ++;
}
console.log("");
console.log("There are " + count + "types of computers.");


// #2
// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  
  for (i = 0; i< peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    var gender;
     if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
          gender = " Ma'am ";
      }else {
        gender = " Sir ";
      }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " - Congradulations " + gender + "you ARE old enough! :-)")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 ){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " - Sorry" + gender + "you are NOT old enough :-(")
    }else {
      console.log("We do not know your age so how can we know if you can go or not? Try again.")
    }
  }

  // Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with===0. Log to the console whether or not the light is on at the end.

// Sample Arrays:
var array1 = [2, 5, 435, 4, 3]
var array2 = [1, 1, 1, 1, 3]
var array3 = [9, 3, 4, 2]

var onOffCounter = 0
var toggle = 0
//toggle . add the number to the onOffCounter
for (i = 0; i < array1.length; i ++){
  onOffCounter += array1[i];
console.log(array1[i])
}
console.log(onOffCounter)

toggle = onOffCounter % 2
if (toggle === 0) {
  console.log("The light is OFF.")
}else {
  console.log("The light is ON.")
}

for (i = 0; i < array2.length; i ++){
  onOffCounter += array1[i];
console.log(array2[i])
}
console.log(onOffCounter)

toggle = onOffCounter % 2
if (toggle === 0) {
  console.log("The light is OFF.")
}else {
  console.log("The light is ON.")
}


for (i = 0; i < array3.length; i ++){
  onOffCounter += array1[i];
console.log(array3[i])
}
console.log(onOffCounter)

toggle = onOffCounter % 2
if (toggle === 0) {
  console.log("The light is OFF.")
}else {
  console.log("The light is ON.")
}
