// Array Filter Exercises
// 27 SEPTEMBER 2017
// Use the built-in array method .filter() to solve all of these problems
//.filter() will go through each index and filter out the ones that it is looking for in its parameters. Save the results in a variable

// // 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// function fiveAndGreaterOnly(arr) {
//     var only5nUp = arr.filter(function(indexV){
//         if (indexV > 4){
//             return indexV
//         }
//     })
//     return only5nUp
// }

// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8] 
//----------------------

// // 2) Given an array of numbers, return a new array that only includes the even numbers.
// function evensOnly(arr) {
//     var evenResult = arr.filter(function(indexV){
//         if (indexV % 2 === 0){
//             return indexV
//         }
//     })
//     return evenResult
// }

// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]  
//-----------------

// // 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// function fiveCharactersOrFewerOnly(arr) {
//     var charOneToFive = arr.filter(function(indexStr){
//         if (indexStr.length < 6){
//             return indexStr
//         }
//     })
//     return charOneToFive
// }

// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])) // ["by", "dog", "wolf", "eaten"] 
//----------------

// // 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// function peopleWhoBelongToTheIlluminati(arr){
//     var membersOnly = arr.filter(function(obj){
//         if (obj.member){
//             return obj
//         }
//     })
//     return membersOnly
// }

// console.log(peopleWhoBelongToTheIlluminati([  
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ]))
//----------------
 
// // 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)
// function ofAge(arr){
//     var onlyOfAge = arr.filter(function(obj){
//         if (obj.age > 17){
//             return obj
//         }
//     })
//     return onlyOfAge
// }

// console.log(ofAge([  
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
