var ask = require('readline-sync')
var {enemyInfo, userInfo} = require('./ColAdvGame.js')
var enemy, chance, enemyHP, damageToEnemy, damageToUser


function enemyAttack(userInfo, enemyInfo){
    strengthOfHit = chance()
    console.log(`${enemyInfo.enemyName}'s strength: ${strengthOfHit}`)

    if (enemy === 'dwarf'){
        console.log(`The ${enemyInfo.enemyName} attacks.`)
         if (strengthOfHit < 3){
            console.log(`Missed!`)    
         }else if (strengthOfHit >= 3 && strengthOfHit < 6){
            console.log(`Hit! Damage -3 to ${userInfo.userName}.`)
            damageToUser = -3;
        return damageToUser;
         }else if (strengthOfHit >= 6){
            console.log(`Direct Hit! Damage -5 to the ${userInfo.userName}.`)
            damageToUser = -5;
            return damageToUser;
         }
    } else if (enemyInfo.enemyName === 'evil knight'){
        console.log(`The ${enemyInfo.enemyName} attacks.`)
         if (strengthOfHit < 3){
            console.log(`Missed!`)    
        }else if (strengthOfHit >= 3 && strengthOfHit < 6){
            console.log(`Hit! Damage -5 to the ${userInfo.userName}.`)
            damageToUser = 5;
            return damageToUser;
        }else if (strengthOfHit >= 6){
            console.log(`Direct Hit! Damage -10 to ${userInfo.userName}.`)
            damageToUser = 10;
            return damageToUser;
        }
    }else if (enemyInfo.enemyName === 'orge'){
            console.log(`The ${enemyInfo.enemyName} attacks.`)
             if (strengthOfHit < 3){
            console.log(`Missed!`)    
        }else if (strengthOfHit >= 3 && strengthOfHit < 6){
            console.log(`Hit! Damage -10 to ${userInfo.userName}.`)
            damageToUser = 10;
            return damageToUser;
        }else if (strengthOfHit >= 6){
            console.log(`Direct Hit! Damage -20 to the ${userInfo.userName}.`)
            damageToUser = 20;
            return damageToUser;
        }
    }
}
function userAttack(userInfo, enemyInfo){
    strengthOfHit = chance();

    console.log(`${userInfo.userName}'s strength: ${strengthOfHit}`)

    if (strengthOfHit < 3){
        console.log(`Missed!`)  
        return damageToEnemy;
     }else if (strengthOfHit >= 3 && strengthOfHit < 6){
        console.log(`Hit! Damage -5 to the ${enemyInfo.enemyName}.`)
        damageToEnemy = 5;
        return damageToEnemy;
    }else if (strengthOfHit >= 6){
        console.log(`Direct Hit! Damage -15 to the ${enemyInfo.enemyName}.`)
        damageToEnemy = 15;
        return damageToEnemy;
        
    }
}
function fightTime(userInfo, enemyInfo){
    while (userInfo.userHP> 0 || enemyInfo.enemyHP > 0){
            console.log(`Attack him ${userInfo.userName}!`)
        var damageToEnemy = userAttack(userInfo, enemyInfo);  //returns damageToEnemy
        var damageToUser = enemyAttack(userInfo, enemyInfo)// returns   damageToUser

            console.log(`Before fight: \n ${userInfo.userName}HP:${userInfo.userHP}\t\t\t${enemyInfo.enemyName}'s HP: ${enemyInfo.enemyHP}`)

        enemyInfo.enemyHP -= damageToEnemy;
        userInfo.userHP -= damageToUser;
        
            console.log(`After this fight: \n ${userInfo.userName}'s HP: ${userInfo.userHP} \t\t\t ${enemyInfo.enemyName}'s HP: ${enemyInfo.enemyHP}`)
        
        return userInfo, enemyInfo
    }
}
function enemyAppears(userInfo, enemyInfo){
    while(userInfo.userHP > 0 || enemyInfo.enemyHP > 0) {
        fightMenu = ['Run', 'Fight'];
        index = ask.keyInSelect(fightMenu, 'What would you like to do? '); 
        
        if (index === 0){  // user chose to run
            var randomRun = chance(); /// 0-4 fights, 5-10 gets away

            console.log(`0-4 fights, 5-10 gets away. Your roll = ${randomRun}`)
            
            if (randomRun >= 5){  // user got away
                    console.log(`////////////////\n That was close! You got away from the ${enemyInfo.enemyName}.`);
                enemyInfo.enemyHP === 0;
                return enemyInfo;
            } else {  // user did not get away
                    console.log(`The ${enemyInfo.enemyName} cut you off! \n\t\t Time to fight.`);
                fightTime(userInfo, enemyInfo);
                return userInfo, enemyInfo;
            }
        } else if (index === 1){  // The user chose to fight
                console.log(`Fight!`)
            fightTime(userInfo, enemyInfo);
            return userInfo, enemyInfo;
        }
    }
    if (enemyInfo.enemyHP === 0){
        console.log(`You defeated the ${enemyInfo.enemyName}! Great job!`);
    }   
}
function whatEnemy(enemyInfo){
    var temp = Math.floor(Math.random() * 3); // will have options 0 to 2
    if (temp === 0 ){
        console.log('It is a dwarf!');
        enemyInfo.enemyName = 'dwarf';
        enemyInfo.enemyHP = 20;
        return enemyInfo;
    }
    if (temp === 1 ){
        console.log('It is an evil knight!');
        enemyInfo.enemyName = 'evil knight';
        enemyInfo.enemyHP = 40;
        return enemyInfo;
    }
    if (temp === 2 ){
        console.log('It is an orge!');
        enemyInfo.enemyName = 'orge';
        enemyInfo.enemyHP = 60;
        return enemyInfo; 
    }
    
}
function chance(){
    var chance = Math.floor(Math.random() * 11);
    return chance;
}
function walk(userInfo, enemyInfo){
    var randomNumZeroToTen = chance();
    console.log(`more than 3 is walk, 0, 1, 2 is enemy === ${randomNumZeroToTen}`)
    if (randomNumZeroToTen > 3){
       console.log('Walking is good for the soul and for you HP. Your HP just increased 20 points.');
        userInfo.userHP += 20;

        console.log(`${userInfo.userName} = ${userInfo.userHP}`)

        return userInfo.userHP;
    } else {
        console.log(`//////////////// \n Oh no! A monster! `)
        whatEnemy(enemyInfo) //will return the enemy or the type of enemy
        enemyAppears(userInfo, enemyInfo);
        
        
    }  
}

module.exports = {
    walk: walk,
}