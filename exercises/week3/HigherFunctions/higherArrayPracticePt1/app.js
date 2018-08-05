// forEach(), find(), findIndex(), some(), and every() Wizard Battle Practice
// 1. Log to the console every Wizard in the array using forEach().
    // var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]  

    // wizards.forEach(function(indexV){
    //         console.log(indexV)
    //     })

// //-----------------
// 2. Using the following array, complete the following tasks in order. Some tasks will change the behavior of later tasks.

var  wizards = [  
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil"
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
]
// forEach(), find(), findIndex(), some(), and every()
//-------------

// 2. Log to the console every wizard's name using.
    wizards.forEach(function(indexV){
    //             console.log(indexV.name)
    // });
//-------------
// 3 Add an isAlive property to every wizard, setting it to true.

    wizards.forEach(function(arr){
        arr.isAlive = true;
        
    })
    // console.log(wizards)
//-------------
// 4 Make a new array of all the Wizards that are "neutral good".
    var wizNeutralGood = wizards.filter(function(indexV){
        if (indexV.alignment === "neutral good"){
            return indexV
        }   
    })
    // console.log(wizNeutralGood)

//-------------
// 5 Find the index of a wizard that is "lawful good".
    var lawfulGoodWiz = wizards.findIndex(function(indexV){
        if(indexV.alignment === "lawful good"){
            return indexV
        }
    });
    // console.log(lawfulGoodWiz)
//-------------
// 6 Return a Boolean that states whether or not all the wizards are alive.
    var stillAlive = wizards.every(function(indexV){
            if (indexV.isAlive){
                return indexV
            }
        });
    // console.log(`Are the wizards still alive? ${stillAlive}`)

//-------------
// 7 Return a Boolean that states whether or not at least one wizard is "neutral good".j
    // var isOneGood = wizards.some(function(indexV){
    //     if (indexV.alignment){
    //         return indexV  // we return this so that .some can see if it is true or false
    //     }
    // })
    // console.log(`Is there at least 1 neutral good wizard? ${isOneGood}`)

//-------------
// 8 Check every "alignment" for every wizard. Kill every "neutral good" wizard. (Modify every "neutral good" wizard's isAlive property to false.)
    // wizards.forEach(function(indexV){
    //     if(indexV.alignment === "neutral good"){
    //         indexV.isAlive = false;
    //     }
    // });
    // console.log(wizards);

//-------------
// 9 Return a Boolean that states whether or not all the wizards are alive.

//     console.log(`Are the wizards still alive? ${stillAlive}`);

// //-------------
// // 10Return a Boolean that states whether or not some of the wizards are alive
// var anyAlive = wizards.some(function(indexV){
//     if (indexV.isAlive){
//         return indexV
//     }
// });
// console.log(anyAlive);
