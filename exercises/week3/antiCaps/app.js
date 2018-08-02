// Write a function called antiCaps which accepts a string and returns a string. The purpose of the function is to invert the capitalization of each letter in a string. For example:

// antiCaps('Hello') // hELLO  
// antiCaps('racEcar') // RACeCAR  
// antiCaps('bAnAnA') // BaNaNa  
// Here is a helper function that will return true if the letter is uppercase, and false if the letter is lowercase:

// function isCaps(letter) {  
//   return letter === letter.toUpperCase();
// } bAnAnA
// str[b]

// function flipUpperCase(str){
//     output='';
//     for (var i = 0; i < str.length; i++){}
//             if (isCaps(str[i])){
//                 output += str[i].toLowerCase();
//             }else {
//                 output += str[i].toUpperCase();
//             }
//         }

//     }
//     return output; 
// }


// flipUpperCase('bAnAnA');


// another way: 

function antiCaps(str) {
    var newStr = ''
    for (var i =0; i < str.length; i++){
        if (str[i] === str[i].toUpperCase()){
            newStr += str[i].toLowerCase();
        }else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}
console.log(antiCaps('racEcar'))  //RACeCAR

