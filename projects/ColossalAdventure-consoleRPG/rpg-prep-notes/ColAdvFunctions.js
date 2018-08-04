
function walk(){
    chance();
    if (chance > 3){
       console.log('Walking is good for the soul and for you HP. Your HP just increased 10 points.');
        userHP += 10;
        return userHP;
    } else {
        whatEnemy() //will return the enemy or the type of enemy
        enemyAppears() 
    }
    
}
function enemyAppears(){
    while(userHP > 0 || enemyHP > 0) {
        fightMenu = ['Run', 'Fight'];

        index = ask.keyInSelect(fightMenu, 'What would you like to do? ');   
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
