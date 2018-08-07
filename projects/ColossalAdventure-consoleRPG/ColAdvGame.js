var ask = require('readline-sync')
var {walk} = require('./ColAdvFunctions.js')

// ***If attacking, you will choose a random attack power between a min and max
// ***If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
// ***If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
// **** If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory
var userInfo = { 
    userName : 'userName',
    userHP : 100, 
    enemiesKilled : 0,
    status: function(){
        if (userInfo.enemiesKilled < 3){
            console.log(`Status: Novice  \n/////////////////`);
        } else if (userInfo.enemiesKilled >= 3 && userInfo.enemiesKilled < 10){
           console.log(`Status: Intermediate \n/////////////////`);
        } else if (userInfo.enemiesKilled >= 10  && userInfo.enemiesKilled < 20){
            console.log(`Status: Advanced \n/////////////////`);
        } else if (userInfo.enemiesKilled > 20){
            console.log(`Status: Expert \n/////////////////`);       
        } 
    },
    inventory : [],

};

var enemyInfo = { 
    enemyName: 'name', 
    enemyHP: 'enemyHP',

};

console.log("\n Hello Player! Welcome to Colossal Adventures!");
userInfo.userName = ask.question('\t \t May I have your name? ');
console.log(`\t Hi ${userInfo.userName}! Lets get started.`); 

while(userInfo.userHP > 0){
menuChoice = ['Walking', 'Stats'];

//------------ research how to get the select options to show w, h, and i   https://www.npmjs.com/package/readline-sync#limit  
index = ask.keyInSelect(menuChoice, 'What would you like to do? ');

    if (index === 0){
        console.log('////////////////\nTime for a stroll.\n////////////');

        walk(userInfo, enemyInfo);
    }else if (index === 1){ // 
        console.log(`//////////////////// \n Here are your stats: \n Player: ${userInfo.userName}\n HP : ${userInfo.userHP} \n Kills: ${userInfo.enemiesKilled} \n
        Inventory: ${userInfo.inventory}\n///////////////`) 
         
    }else {
        console.log('/////////////////////\n Dont turn yellow now, you must choose one of the other options.')
    }

}
console.log(`///////////////////\n You died! Thank you for playing Colossal Adventures. GAME END`)

module.exports = {
    enemyInfo: enemyInfo,
    userInfo: userInfo,
}