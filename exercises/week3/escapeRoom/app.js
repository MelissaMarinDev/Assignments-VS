var readline = require('readline-sync');
//reminder on npm ---------
//npm init -y
//npm install --save readline-sync
//or
//npm i -S readline-sync
//-----------hint on program------------

// var readline = require('readline-sync');

// var name = readline.question('Welcome to the Escape Room, what is your name? ');

// //template literals
// console.log(`Hello ${name}, you have entered a room. Your goal is to escape, good luck ${name}! \n`)

// var isAlive = true;
// var hasKey = false;

// while(isAlive){
//     var choices = ['Put hand in hole', 'Find the key', 'Open the door'];
//     var index = readline.keyInSelect(choices, "What would you like to do? ");

//     if(choices[index] === 'Open the door'){
//         if(hasKey){
//             console.log('the door was opened')
//             isAlive = false
//         }else{
//             console.log('go find the key')
//             isAlive = false
//         }
//     }
// }------------------------------
    // Game Requirements: 
// Game start:
// Tell the user their options:

// Put hand in hole
// Find the key, or
// Open the door
// They can't open the door unless they find the key first. 
// They die if they put their hand in the hole.

// JavaScript tools that may help
// while loop
// variables
// booleans
// if/else if/else OR switch statement
// readline-sync (syntax for installing and using below)

var enterGame = readline.keyInYN('\n Welcome to the Escape Room. Enter... If you dare... \n \t Do you accept this challenge?  \n')


if (enterGame === false){
    console.log('\nNot everyone can be brave. This game is not for babies.\n');
}else {
    console.log ('\nWelcome to the Escape Room. Escape, if you can. \n');

    var isAlive = true;
    var hasKey = false;

    while(isAlive){
        var choice = [ 'Put hand in hole.', 'Find the key.', 'Open the door.'];
        var index = readline.keyInSelect(choice, "What would you like to do?  ");

        switch(choice [index]) {
            case 'Put hand in hole.':
                console.log(' \n Your arm is quickly pulled through the hole and chopped off. You die quickly from blood loss. Better luck next time. \n');
                isAlive = false;
                break;
            case 'Find the key.':
                if (hasKey === false){
                    console.log('\n As you search the room for the key you find it behind a painting of Thomas Edison. Good job finding the key.\n');
                    hasKey = true;
                    break;
                } else {
                    console.log('\n You have already found the key. Dont cha know what to do with it? ... hmmm I am not sure you are going to survive. \n')
                    break;
                }
            case 'Open the door.':
                if (hasKey===false){
                    console.log('\n Did you really think it would be that easy? The game is called "Escape Room". You need to find the way to escape it.\n ');
                    break;
                }else if (hasKey===true){
                    console.log('\n Congradulations! You have won this Escape Room! Great job!\n')
                    isAlive = false;
                    break;
                }
        }


    }
}



