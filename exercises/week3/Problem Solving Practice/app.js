

// Requirements:
// Create a function that:
// 1.allows the user to enter new words and saves them into the original object (be sure to pass the object in as a parameter). 
// 2.The function should not allow duplicate words to be stored in the dictionary (This includes case-sensitivity).
// 3. Allows the user to look up words in the dictionary and see the definition of that word.
// Extra-extra-credit:
// 4.Do not allow any variation of the word to be saved as a duplicate. For example, if "brick" was entered your dictionary would reject "bricks" as a new word.


var dictionary = {
    // code to add entry to dictionary
}
function addEntry(word, definition){
    //code to retrieve work: definition from dictionary
    dictionary[word]= definition;
    
}

console.log(dictionary) //{}
addEntry('hello', 'A greeting')
console.log(dictionary) //{Hello: 'A greeting'}
addEntry('goodbye', 'A farewell')
// console.log(looItUp('hello')) // Hello: A greeting


        // console.log('Hi! Welcome to Your Dictionary');
        // options = ['Read Dictionary - see the words you have added. ', 'Search Dictionary - Can you find the word? ', 'Add New Word - give the word and definition. ', 'Exit Dictionary']
        // var userName = ask.question(options, 'What would you like to do? ')
        // While (options[i] === 'Exit Dictionary'){

        //     if (options[i] === 'Read Dictionary - see the words you have added. '){

        //     }else if(options[i] === 'Search Dictionary - Can you find the word? '){

        //     }else if(options[i] === 'Add New Word - give the word and definition. '){


        //     }else if(options[i] === 'Exit Dictionary'){
        //         console.log('See you next time!')
        //     }

        // }




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