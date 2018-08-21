// Warm up
// Write a function that returns the missing number from an unsorted array of numbers.
// Create a function that identifies the range of numbers within a given array.
// Have the function return all numbers missing within the range.
// Example:

// function findMissingNo([3,5,4,8,1,2,7]){
// //Find and return the missing number(s)
// }

// //Output: 6
// Conditions:

// The array has at least 3 elements.
// There are no repeated numbers.

// Optional Conditions:

// The array has any number of elements.
// The array has repeated numbers.
// The function returns the mean, median, and mode.

// need to sort the array first, then compare it to an array that has everything already in place. 
// watch out for negative numbers

// Test cases:

// const findMissingNo = (arr) => {
//     arr.sort((a, b) => a - b)
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i + 1] !== arr[i] + 1){
//         return arr[i] + 1
//       }
//     }  
//   }
  
  
//   console.log(findMissingNo([2, 1, 3, 5]))
//   //Output: 4
//   console.log(findMissingNo([12, 10, 9]))
//   //Output: 11
//   console.log(findMissingNo([-3, 0, -2, 3, 2, -1]))
//   //Output: 1const findMissingNo = (arr) => {
//   arr.sort((a, b) => a - b)
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i + 1] !== arr[i] + 1){
//       return arr[i] + 1
//     }
//   }  
// }


// console.log(findMissingNo([2, 1, 3, 5]))
// //Output: 4
// console.log(findMissingNo([12, 10, 9]))
// //Output: 11
// console.log(findMissingNo([-3, 0, -2, 3, 2, -1]))
// //Output: 1
// // console.log(findMissNum(arr2))
// // console.log(findMissNum(arr3))


// CLASS ROOM ANSWERS ----- I WAS SOOOO CLOSE!
const findMissingNo = (arr) => {
    arr.sort((a, b) => a - b)
    for(let i = 0; i < arr.length; i++){
      if(arr[i + 1] !== arr[i] + 1){
        return arr[i] + 1
      }
    }  
  }
  
  
  console.log(findMissingNo([2, 1, 3, 5]))
  //Output: 4
  console.log(findMissingNo([12, 10, 9]))
  //Output: 11
  console.log(findMissingNo([-3, 0, -2, 3, 2, -1]))
  //Output: 1
