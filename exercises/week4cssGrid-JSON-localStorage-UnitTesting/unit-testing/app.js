
// function addS(arr){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "number"){
//             return 'no numbers'
//         } else if( arr[i].lastIndexOf('s') !== arr[i].length - 1 ){
//             newArr.push(`${arr[i]}s`)
//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

//   'dogs'
//  arr[i].lastIndexOf('s') !== arr[i].length - 1
//      3               !==     3


function addS(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            return 'no numbers'
        } else if(arr[i].endsWith('s')){
            newArr.push(`${arr[i]}`)
        } else {
            newArr.push(`${arr[i]}s`)
        }
    }
    return newArr
}

module.exports = { 
    addS: addS
}




















// HOW ASSERT FUNCTIONS WORK

// var assert = function(actual, expected){
//     try {
//         if(actual !== expected){
//             throw { 
//                 type: "Fail",
//                 details: { actual: actual, expected: expected } 
//             }
//         } else {
//             console.log("Success", { type: "Test Passed", details: { actual: actual, expected: expected }})
//         }
//     } 
//     catch(err){
//         console.log(err)
//     }
// }

// function addTwoNums(num1, num2){
//     return num1 + num2
// }

// assert(addTwoNums(1, 2), 3)
// assert(addTwoNums(5, 20), 25)