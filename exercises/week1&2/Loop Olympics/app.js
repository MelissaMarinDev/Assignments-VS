// LOOP OLYMPICS!!!! 

// Preliminaries
// 1. Write a for loop that prints to the console the numbers 0 through 9.
for (i = 0; i < 10; i++){
    console.log(i);
  }

// 2. Write a for loop that prints to the console 9 through 0.

for (i = 9; i >= 0; i--) {
    console.log(i);
  }

// 3. Write a for loop that prints these fruits to the console. 
var fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++){
  console.log(fruit[i])
} 
//------------------
// Bronze Medal
//1.  Write a for loop that will push the numbers 0 through 9 to an array.
var num = [];
for (i = 0; i < 10; i++){
  
  console.log(num.push(i));
}
console.log(num);


//2. Write a for loop that prints to the console only even numbers 0 through 100.
for (i = 0; i < 101; i++){
    if (i % 2 === 0){
      console.log(i);
    }
  }


//3. Write a for loop that will push every other fruit to an array. 
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (i = 0; i < fruit.length; i++){
  if (i % 2 === 1){
    console.log(fruit[i])
  }
}

//  SILVER MEDAL         SILVER MEDAL              SILVER MEDAL


//GOLD MEDAL           GOLD MEDAL            GOLD MEDAL
// Gold Medal
// Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]
var array = [];
for (var i = 0; i < 3; i++){
  var temp = [];
    for ( var j = 0; j < 3; j++) {
      var k = 0;
      temp.push(k);
      console.log(temp);
    }
    array.push(temp);
}
console.log(array);

// 2.Create an array that mimics a grid like the following using for loops:

// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

var array = [];
for (var i = 0; i < 3; i++){
  var temp = [];
    for ( var j = 0; j < 3; j++) {
      temp.push(i);
      console.log(temp);
    }
    array.push(temp);
}
console.log(array);

// 3.Create an array that mimics a grid like the following using for loops:

// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]
var array = [];
for (var i = 0; i < 3; i++){
  var temp = [];
    for ( var j = 0; j < 3; j++) {
      temp.push(j);
      console.log(temp);
    }
    array.push(temp);
}
console.log(array);
