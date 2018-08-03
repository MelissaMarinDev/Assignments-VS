// Write a filter that only has the fluffy objects:

var dogs = [
        {name: 'Fluffy', isFluffy: true},
        {name: 'Fido', isFluffy: true},
        {name: 'Scooby', isFluffy: true},
        {name: 'Ralph', isFluffy: false},
]
// filter returns an array of what it took out.
        var yesFluffy = dogs.filter(function(derg){ // derg is the place holder for the array index
                if (dogs.isFluffy){
                return derg
                console.log(yesFluffy);
                }
        })

/// use .map to return the dog names
var dogNames = dogs.map(function)
        





//------------------------
// Look It UP! Dictionary Exercise Fri Aug 3, 2018
// 04 JUNE 2015 on Warmup, Problem Solving, Programming Principles, Level 2
// Using objects, create a dictionary that allows a user to save words and their definitions and look them up again.

// Requirements:
// Create a function that:
// 1.allows the user to enter new words and saves them into the original object (be sure to pass the object in as a parameter). 
// 2.The function should not allow duplicate words to be stored in the dictionary (This includes case-sensitivity).
// 3. Allows the user to look up words in the dictionary and see the definition of that word.
// Extra-extra-credit:
// 4.Do not allow any variation of the word to be saved as a duplicate. For example, if "brick" was entered your dictionary would reject "bricks" as a new word.


// var dictionary = {}

// function addEntry(word, definition){
//         // if (dictionary[word]){
//         //         console.log('this word is already in the dictionary')
//         // }else{
//         // dictionary[word] = definition;
//         // } --or---
//         if (!dictionary.hasOwnProperty(word)){
//                 dictionary[word] = definition;
//         }
// }

// console.log(dictionary) // {}

// addEntry('hello', 'A greeting')
// console.log(dictionary) // {hello: /A greeting'}
// addEntry('hello', 'A farewell')
// console.log(lookItUp('hello')) //hello: A greeting 


// ----------------------------------
// Write a function that takes an array of numbers and returns the largest (without using Math.max())

    // var largest = [3, 5, 2, 8, 1]; // => 8  

    // function highestNumber(largest){
    //     var winner = 0;
    //     for (var i = 0; i < largest.length; i++){
    //     if (winner < largest[i]){
    //         winner = largest[i];
    //     }
    //     }
    //     console.log(winner);
    //     return winner;  
    // }
    // highestNumber(largest);

    // --------------------
// Write a function that takes an array of words and a character and return each word that has that letter present.

        // var lettersWithStrings= (["#3", "$$$", "C%4!", "Hey!"], "!") // a VAR CAN ONLY TAKE ONE PARAMETER!!! Calling findStr(lettersWithString) will not run.
        
        // // => ["C%4!", "Hey!"]  
        // function findStr(arr, str){
        //     var temp = [] ;
        //     for (var i = 0; i < arr.length; i++){
        //         console.log(i);
        //         if (arr[i].includes(str) === true){
        //             temp.push(arr[i]);
        //             console.log (arr[i]);
        //         }
        //          console.log(temp);
           
        
        // }

        // findStr(["#3", "$$$", "C%4!", "Hey!"], "!") 

// -------------------
// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.



        // function isDivisible(num1, num2){
        //     if (num1 % num2 === 0){
        //         console.log('true');
        //     } else {
        //         console.log('false');
        //     }
        // }

        // isDivisible(4, 2) // => true  
        // isDivisible(9, 3) // => true  
        // isDivisible(15, 4) // => false 