// Count Count Code   Aug 2, 2018

// `Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

// console.log(countCode("aaacodebbb")) //-> 1 
// console.log(countCode("codexxcode")) //-> 2 
// console.log(countCode("cozexxcope")) //-> 2

// https://www.w3schools.com/jsref/jsref_match.asp 
//  ----------------answer--1-------
            // // function countCode(str){
            //     return str.match(/co.e/gi).length;
            // }


            // -----------answer  2 --------------https://www.w3schools.com/jsref/jsref_obj_regexp.asp
            // function altCodeCount(str) {
            //     var count = 0;
            //     for (var i = 0; i < str.length; i++) {
            //         if (str[i] + str[i+1] + str[i+3] === 'coe'){
            //             count++
            //         }
            //     }
            //     return count;
            // }
//-----------------My attempt * incomplete----------------
function countCode(string) {
for (var i = 0; i < string.length; i++) //will loop through the string
var tempCounter = 0;
//count the 'co*e' in each string. Find the 'c0' and return the index=indexOf(). 
var foundC = string.indexOf("co");
var checkE = 0;
    if (foundC === "co"){
        checkE = string.charAt(foundC + 3)
        console.log(checkE);
        if (checkE === 'e'){
        tempCounter ++;
        }
    }

// Check the fourth index for the 'e' by returning the character at a specified index = charAt(). 
// Check to see if the 3 indices are the correct letters. If so, temp++ (starts at zero.)

// start from the last indice and check for 'co*e' again. - else if start check from indice ended .slice(x,x) 

// }
// console.log(countCode("aaacodebbb")) //-> 1 
// console.log(countCode("codexxcode")) //-> 2 
// console.log(countCode("cozexxcope")) //-> 2


// ---------------------------------
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