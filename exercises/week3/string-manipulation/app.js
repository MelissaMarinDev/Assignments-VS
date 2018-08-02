var readlineSync = require('readline-sync');

// Using the NodeJS package readline-sync, create an interactive program that asks you some personal information (name, age, favorite color, etc.) and reports back to you what you entered. Make sure to include the following string manipulations:
// ----Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”)
// ----Report back the number of characters in a given input
// -------Concatenate (add) two separate strings together
// ------Given a long message (more than twenty letters), return only the last half of the message
// Using the same long message (but without making the user type it in again), have your program print it to the terminal for the user to read again, but specify from where it will print. 
// Example: If the long message given in #4 was hello my name is John and I'm 30 then the user could give any number. So if the user entered 14 it would print off s John and I'm 30
// ------Program specifications:

// -------You must use the readline-sync package.
// --------Make sure to store all input from the user in a variable USING THE QUESTION method of the readline-sync package.
// -------Use special string characters such as the newline character \n, or the tab character \t to make your output more readable.
// Helpful hints:

// Use Google to learn how to perform the appropriate string manipulations


var userName = readlineSync.question('May I have your name?   ');
var upCase = userName.toUpperCase();
var countNmLtrs = userName.length;
console.log('\n Hi ' + upCase + '! Did you know your name has ' + countNmLtrs + ' letters in it? \n \n');

var userAge = readlineSync.question('How old are you?  ');
    if (userAge < 70){
        console.log( '\n Ooooh! You are just a baby!  I do not remember when I was that young.  I have changed so much over the years. ' )
    }else{
        console.log(' Well, now that you have some experience. I was born in 1950 you know. We can work together. \t')
    }
 var pswdCreator = upCase.concat(userAge);
console.log(' Lets make a password for you. It will be ' + pswdCreator + '. Dont forget it now! If your mama taught you to write, you should write it down.\n  ');

var text2Slice = '\n \t "Lets practice slice(). This will be our text and we are going to cut it." \n'
var text2SliceLength = text2Slice.length;

console.log('------' + text2Slice + '------------')
var userNum = readlineSync.question('Choose a number between 0 and ' + text2SliceLength + ' and that is where we will cut the message. \n ')

console.log('-------' + text2Slice.slice(userNum, text2Slice.length + '--------- \n'))

console.log('\t OH NO! I did not think you would actually DO it! You cant go arround just slicing things you know! You cut if off at index ' + userNum + '... We cannot just have sliced data... Geez, you need to learn to take a joke. Do not worry. I will fix this. \n  ------' + text2Slice + '------- \n There, that looks better, right?  I think you need to grow up a little bit more before I can work with you. \n  ')
