var ask = require('readline-sync')
var enemiesKilled, inventory, userInfo = require('./ColAdvFunctions.js')

// ***If attacking, you will choose a random attack power between a min and max
// ***If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
// ***If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
// **** If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory
var userInfo = { 
    userName = 'userName',
    userHP = 100, 
    enemiesKilled = 'enemiesKilled',
    inventory = [],

}

var enemyInfo = { 
    name= 'name', 
    enemyHP= 'enemyHP',

}

console.log("\n Hello Player! Welcome to Colossal Adventures!");
userInfo.userName = ask.question('May I have your name? ');
console.log(`\t Hi ${userInfo.userName}! Lets get started.`); 

while(userInfo.userHP > 0){
menuChoice = ['Walking', 'Stats'];

//------------ research how to get the select options to show w, h, and i
index = ask.keyInSelect(menuChoice, 'What would you like to do? ');

    if (menuChoice === 'Walking'){
        console.log('Time for a stroll.')

        userInfo = walk(userInfo, enemyInfo);
    }else if (menuChoice === 'Stats'){
        console.log(`Here are your stats: \n Player: ${userInfo.userName}\n HP : ${userInfo.userHP} \n Kills: ${userInfo.enemiesKilled}`) 
        if (userInfo.enemiesKilled < 3){
            console.log(`Status: Novice`);
        } else if (userInfo.enemiesKilled >= 3 && userInfo.enemiesKilled < 10){
           console.log(`Status: Intermediate`);
        } else if (userInfo.enemiesKilled >= 10  && userInfo.enemiesKilled < 20){
            console.log(`Status: Advanced`);
        } else if (userInfo.enemiesKilled > 20){
            console.log(`Status: Expert`);       
        }  
    }else {
        console.log('Dont turn yellow now, you must choose one of the other options.')
    }

}
console.log(`You died! Thank you for playing Colossal Adventures. GAME END`);