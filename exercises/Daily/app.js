//Random Password Generator  7/27/2018

// Write a function that generates a random password which can include uppercase, lowercase, numeric, and symbol characters. The function should accept an integer as it's only argument, and that integer is how long the password should be. 

//Tip: Math.floor and Math.random
 
// var pswrdArray = [];
// var int 
// var randCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"]


// function createPassword(x){
//     var pswrdArray = [];
    
//       for (var i = 0; i < x; i++){
          
//             pswrdArray.push(Math.floor(Math.random() * x));
            
//             console.log(pswrdArray)
//           }
//         return pswrdArray
//     }   
//     console.log(createPassword(9));


// -----------------------------------------
// Fizzbuzz  7.26.2018
// Write a function that returns an array containing the numbers from 1 to 100. However, if the number is divisible by 3 it should be replaced by "fizz". If the number is divisible by 5, replace it with "buzz". If the number is divisible by both 3 and 5, replace

// var x = 1;
// var fizzbuzzArr = []
// var fizzbuzz = function (){
//    while (x <= 100) {
//    (x % 3 === 0 && x % 5 === 0) ? fizzbuzzArr.push ("fizzbuzz") : (x % 3 === 0) ? fizzbuzzArr.push("fizz") : (x % 5 === 0) ? fizzbuzzArr.push("buzz") : fizzbuzzArr.push(x);
//        x++;
//    }
//    return fizzbuzzArr
// }

// console.log(fizzbuzz());

// var numArray = [];
// function fizzBuzz(){
//     for (var i = 1; i < 101; i++){
//         // console.log(i);
//         if ( i % 3 === 0 && i % 5 === 0){
//             numArray.push("fizz buzz");
//             // console.log("%3 & %5")
//         } else if ((i % 3 === 0) && (i % 5 !== 0)){
//             numArray.push("fizz");
//             // console.log ("%3");
//         } else if (i % 3 !== 0 && i % 5 === 0){
//             numArray.push("buzz");
//             // console.log("%5")
//         } else {
//             numArray.push(i);
//         } 
//     }
//     return numArray;
// }

// console.log(fizzBuzz());