
function walk(){
    chance();
    if (chance > 3){
       console.log('Walking is good for the soul and for you HP. Your HP just increased 10 points.');
        userHP += 20;
        return userHP;
    } else {
        whatEnemy() //will return the enemy or the type of enemy
        enemyAppears() 
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
function userAttack(){
    chance()
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
function enemyAppears(){
    while(userHP > 0 || enemyHP > 0) {
        fightMenu = ['Run', 'Fight'];
        index = ask.keyInSelect(fightMenu, 'What would you like to do? '); 
        if (fightMenu === 'Run'){  // user chose to run
            chance()
            if (chance > 5){  // user got away
                console.log(`That was close! You got away from the ${enemy}`)
                enemyHP = 0;
            } else {  // user did not get away
                console.log(`The ${enemy} cut you off! Time to fight.`)
                enemyAttack(); // returns damageToUser
                userAttack();  //returns damageToEnemy
                enemyHP -= damageToEnemy;
                userHP -+ damageToUser;
            }
        } else if (fightMenu === 'Fight'){
            console.log(`Fight!`)
            enemyAttack(); // returns damageToUser
            userAttack();  //returns damageToEnemy
            enemyHP -= damageToEnemy;
            userHP -+ damageToUser;
        }
    if (enemyHP === 0){
        console.log(`You defeated the ${enemy}! Great job!`)
    }
    
}
function whatEnemy(){
    var temp = Math.floor(Math.random() * 3); // will have options 0 to 2
    if (temp === 0 ){
        console.log('It is a dwarf!');
        enemy = 'dwarf';
        enemyHP = 20;
        return enemy enemyHP;
    }
    if (temp === 1 ){
        console.log('It is an evil knight!');
        enemy = 'evil knight';
        enemyHP = 40;
        return enemy enemyHP;
    }
    if (temp === 2 ){
        console.log('It is an orge!');
        enemy = 'orge';
        enemyHP = 60;
        return enemy enemyHP;
    }
    
}
fuction chance(){
    chance = Math.floor(Math.random() * 11);
    return chance;
}


module.exports = { 
    walk: walk,
    inventory: inventory,
    hp: hp,
    fight: fight,
    run: run,
}
