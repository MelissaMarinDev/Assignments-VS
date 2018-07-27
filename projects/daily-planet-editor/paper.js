/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

// using variables correctly?
// using operators correctly?
// spelling things correctly? (Misspelled programs don't just look bad, they can break!)
// following best practices with JavaScript code conventions?



function whoWins(isThereKryptonite, enemyName){
    if (!isThereKryptonite){  
        return "Superman beats " + enemyName + ", of course.";
    }else{
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}


var enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];
var enemyName;

for (var i = 0; i < enemies.length; i++){
    var isThereKryptonite;
    enemyName = enemies [i];
    if (i % 2 === 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }

    console.log(whoWins(isThereKryptonite,enemies[i]));
}

function howAttractedIsLoisLaneToMe (){
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) + 1);
}

console.log(howAttractedIsLoisLaneToMe ()) ;

var clarkKent = true;
var superman = false;

while (clarkKent){

    console.log("I'm just a nerdy columnist.");
    var phoneBoothQuickChange = Math.random();

    if (phoneBoothQuickChange >= 0.5) {

        clarkKent = false;

        superman = true;
        console.log("Now I'm Superman!");
    }
}

 


