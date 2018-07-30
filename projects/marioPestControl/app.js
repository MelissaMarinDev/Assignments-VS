

function Calculate(){
   
    var goomas= document.getElementById("countGoomas").valueAsNumber;
    var boboms= document.getElementById("countBoboms").valueAsNumber;
    var cheeps= document.getElementById("countCheeps").valueAsNumber;

    goomas *= 5;
    boboms *= 7;
    cheeps *= 11;
    var total = goomas + boboms + cheeps;

    document.getElementById("resultsGoombas").textContent = goomas;
    document.getElementById("resultsBobombs").textContent = boboms;
    document.getElementById("resultsCheeps").textContent = cheeps;
    document.getElementById("resultsTotal").textContent = total;

    


}

document.getElementById("enter#Baddies").addEventListener("click", Calculate);


// ------code from Renate---

// // JS code
// document.getElementById("total").innerHTML = `Total: ${document.calculate.goom.valueAsNumber * 5 + document.calculate.bob.valueAsNumber * 7 + document.calculate.cheep.valueAsNumber * 11} Coins`;
// });
