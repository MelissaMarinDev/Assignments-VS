var ask = require('readline-sync')
var extra = require('./ColAdvFunctions.js')
// Colossal Adventure (Console RPG)
// The year is 1985. Your job is to build a text-based (console) RPG game.

// The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

// Project Requirements:
// ----Console must greet player with a fun message
// ----Console must ask for the player's name and store it
// Walking: 
// The console will ask the user to enter a "w" to walk
// ---Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// If a wild enemy appears: 
// The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// The user can decide to attack or run
// If attacking, you will choose a random attack power between a min and max
// ----If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
// After the player attacks or runs the enemy attacks back for a random damage amount
// If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
// If the enemy kills the player the console prints an cool death message and the game ends
// Inventory 
// When the player kills enemies, they are awarded with items
// If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory

console.log("\n Hello Player! Welcome to Colossal Adventures!");
var userName = ask.question('May I have your name? ');
console.log(`\t Hi ${userName}! Lets get started.`); 

var userHP = 100; 
var enemy, chance, enemyHP;


while(userHP > 0){
menuChoice = ['Walking', 'Inventory', 'HP'];
//------------ research how to get the select options to show w, h, and i
index = ask.keyInSelect(menuChoice, 'What would you like to do? ');

    if (menuChoice === 'Walking'){
        console.log('you are in walking')
        walk();
    }else if (menuChoice === 'Inventory'){
        // inventory();
        console.log('you are in inventory')
    }else if (menuChoice === 'HP'){
        // hp();
        console.log('you are in HP')    
    }else {
        console.log('Dont turn yellow now, you must choose one of the other options.')
    }

}
