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

        var lettersWithStrings= (["#3", "$$$", "C%4!", "Hey!"], "!") // a VAR CAN ONLY TAKE ONE PARAMETER!!! Calling findStr(lettersWithString) will not run.
        
        // => ["C%4!", "Hey!"]  
        function findStr(arr, str){
            var temp = [] ;
            for (var i = 0; i < arr.length; i++){
                console.log(i);
                if (arr[i].includes(str) === true){
                    temp.push(arr[i]);
                    console.log (arr[i]);
                }
                 console.log(temp);
           
        
        }

        findStr(["#3", "$$$", "C%4!", "Hey!"], "!") 

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