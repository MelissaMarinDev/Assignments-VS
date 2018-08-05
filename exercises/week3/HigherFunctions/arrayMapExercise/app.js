// Array Map Exercises
// 27 SEPTEMBER 2017
// Use the built-in .map() method on arrays to solve all of these problems

// 1) Make an array of numbers that are doubles of the first array
        // function doubleNumbers(arr){
        // var doubled = arr.map(function(iAmTheIndex){
        //     return iAmTheIndex * 2;
        // })
        // console.log(doubled)
        // }

        // doubleNumbers([2, 5, 100]); // [4, 10, 200] 
// -----------------

// 2) Take an array of numbers and make them strings
        // function stringItUp(arr){
        //     var iAmString = arr.map(function(index){
        //         return index.toString()
        //     })
        //     return iAmString
        // }

        // console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"] 
//--------------------- 
// 3) Capitalize each of an array of names
        // function capitalizeNames(arr){
        //     var iCaps = arr.map(function(index){
        //         return index.toUpperCase()
        //     })
        //     return iCaps
        // }

        // console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//-------------
// 4) Make an array of strings of the names
    // function namesOnly(arr){
    //     var arrNames = arr.map(function(index){
    //         return index.name
    //     })
    //     return arrNames
    // }


    // console.log(namesOnly([  
    //     {
    //         name: "Angelina Jolie",
    //         age: 80
    //     },
    //     {
    //         name: "Eric Jones",
    //         age: 2
    //     },
    //     {
    //         name: "Paris Hilton",
    //         age: 5
    //     },
    //     {
    //         name: "Kayne West",
    //         age: 16
    //     },
    //     {
    //         name: "Bob Ziroll",
    //         age: 100
    //     }
    // ])) 
    // // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
//--------------------
// // 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//     var ofAge = arr.map(function(index){
//         if (index.age > 17){
//             return index.name + 'can go to The Matrix.'
//         }else{
//             return index.name + 'is underage.'
//         }
//     })
//     return ofAge
// }

// console.log(makeStrings([  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) )
// // ["Angelina Jolie can go to The Matrix", 
// // "Eric Jones is under age!!", 
// // "Paris Hilton is under age!!", 
// // "Kayne West is under age!!", 
// // "Bob Ziroll can go to The Matrix"]
//------------------------

// // 6) Make an array of the names in h1s, and the ages in h2s
// function readyToPutInTheDOM(arr){
//   var h1h2List = arr.map(function(indexV){
//     return `<h1>${indexV.name}<h1><h2>${indexV.age}<h2>`
//   })
//   return h1h2List
// }
// console.log(readyToPutInTheDOM([  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) )
// // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// // "<h1>Eric Jones</h1><h2>2</h2>", 
// // "<h1>Paris Hilton</h1><h2>5</h2>", 
// // "<h1>Kayne West</h1><h2>16</h2>", 
// // "<h1>Bob Ziroll</h1><h2>100</h2>"]