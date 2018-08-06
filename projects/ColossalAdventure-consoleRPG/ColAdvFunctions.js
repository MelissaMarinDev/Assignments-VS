var enemy, chance, enemyHP, damageToEnemy, damageToUser

function walk(userInfo, enemyInfo){
    var chance = chance();
    if (chance > 3){
       console.log('Walking is good for the soul and for you HP. Your HP just increased 10 points.');
        userInfo.userHP += 20;
        return userInfo.userHP;
    } else {
        enemyInfo = whatEnemy(enemyInfo) //will return the enemy or the type of enemy
        enemyAppears(userInfo, enemyInfo); 
    }  
}
function enemyAttack(){
    if (enemy === 'dwarf'){
        console.log(`The ${enemy} attacks.`)
         if (chance < 3){
            console.log(`Missed!`)    
         }else if (chance >= 3 && chance < 6){
            console.log(`Hit! Damage -3 to the ${enemy}.`)
            damageToUser = -3;
        return damageToUser;
         }else if (chance >= 6){
            console.log(`Direct Hit! Damage -5 to the ${enemy}.`)
            damageToUser = -5;
            return damageToUser;
    } else if (enemy === 'evil knight'){
        console.log(`The ${enemy} attacks.`)
         if (chance < 3){
            console.log(`Missed!`)    
        }else if (chance >= 3 && chance < 6){
            console.log(`Hit! Damage -5 to the ${enemy}.`)
            damageToUser = -5;
            return damageToUser;
        }else if (chance >= 6){
            console.log(`Direct Hit! Damage -10 to the ${enemy}.`)
            damageToUser = -10;
            return damageToUser;
    }else if (enemy === 'orge'){
            console.log(`The ${enemy} attacks.`)
             if (chance < 3){
            console.log(`Missed!`)    
        }else if (chance >= 3 && chance < 6){
            console.log(`Hit! Damage -10 to the ${enemy}.`)
            damageToUser = -10;
            return damageToUser;
        }else if (chance >= 6){
            console.log(`Direct Hit! Damage -20 to the ${enemy}.`)
            damageToUser = -20;
            return damageToUser;
        }
    }
}
function userAttack(enemyInfo){
    chance = chance();
    if (chance < 3){
        console.log(`Missed!`)    
    }else if (chance >= 3 && chance < 6){
        console.log(`Hit! Damage -5 to the ${enemy}.`)
        damageToEnemy = -5;
        return damageToEnemy;
    }else if (chance >= 6){
        console.log(`Direct Hit! Damage -15 to the ${enemy}.`)
        damageToEnemy = -10;
        return damageToEnemy;
    }
}
function enemyAppears(userInfo, enemyInfo){
    while(userInfo.userHP > 0 || enemyInfo.enemyHP > 0) {
        fightMenu = ['Run', 'Fight'];
        index = ask.keyInSelect(fightMenu, 'What would you like to do? '); 
        
        if (fightMenu === 'Run'){  // user chose to run
            var chance = chance();
            if (chance >= 5){  // user got away
                console.log(`That was close! You got away from the ${enemyInfo.enemyName}`);
                enemyInfo.enemyHP = 0;
            } else {  // user did not get away
                console.log(`The ${enemyInfo.enemyName} cut you off! Time to fight.`);
                var damageToEnemy = userAttack(enemyInfo);  //returns damageToEnemy
                var damageToUser = enemyAttack(userInfo); // returns damageToUser
                enemyInfo.enemyHP -= damageToEnemy;
                userInfo.userHP -+ damageToUser;
            }
        } else if (fightMenu === 'Fight'){
            console.log(`Fight!`)
            var damageToEnemy = userAttack(enemyInfo);  //returns damageToEnemy
            var damageToUser = enemyAttack(userInfo); // returns damageToUser
            enemyHP -= damageToEnemy;
            userHP -+ damageToUser;
        }
    if (enemyInfo.enemyHP === 0){
        console.log(`You defeated the ${enemyInfo.enemyName}! Great job!`)
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
    chance = Math.floor(Math.random() * 11);
    return chance;
}


module.exports = { 
    walk: walk,
    enemyInfo: enemyInfo,
    inventory: inventory,
    userHP: userHP,
}


