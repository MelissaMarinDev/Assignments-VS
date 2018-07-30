// Write a function that accepts a string as input. Write a loop to print out each letter of that string individually.

// function printByLetter(x){

//     var letter = x.length;
    
//     for(var i = 0; i < x.length; i++){  
//         console.log(x.charAt(i));
//     }
// }
// printByLetter("hello world");

// --------------------------
// Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.




// function findCharacter(string, x){
//     for (var i = 0; i < string.length; i++){
//             if (string[i] === x){
//                 console.log(x + " was found in position " + i + ".");
//                 return string[i];

//             } 
//     }
// }
// findCharacter('helloworld', 'o')


//----------------------------
// Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.

// var charArray = [23, 43, 12, 2, 42]

// function findCharacter(arr, x){
//         for (var i = 0; i < arr.length; i++){
//                 if (arr[i] === x){
//                     console.log(x + " was found in position " + i + ".");
//                     return arr[i];
    
//                 } 
//         }
//         if (x !==x.value) {
//             console.log(x + "not found.")
//         }
//     }

//     findCharacter(charArray, 12)

//--------------------------------------
// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()



// var numArray = [23,43,23, 54, 12, 65, 23, 64, ]
// var lowestNum = numArray[0];

// for (var i = 0; i < numArray.length; i++){
        
//     if (lowestNum > numArray[i]){
//         lowestNum = numArray[i];
//     }
// }
// console.log(lowestNum);

