// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.

// "()()" // -> true
// "(())" // -> true
// "()))" // -> false
// Also, every closing parentheses needs an opening partner before it.

// ")()(" // -> false
// "())(" // -> false

//filter the parenthasis out.
work with filter A and then filter out to discard Array.
if filter A is length 0 return true, else return false

filterFrenzy=(str)=>{
    str.split('')
    filterA = []
    str.filter((indexValue) =>{
        if (indexValue === '('){
            filterA.push(indexValue)
        } else if (indexValue === ')')(
            fileterA.push(indexValue)
        )

    })
    console.log(filterA)
}
console.log("()()")

///////////classroom solution//////////
// Michael Halstead [10:04 AM]
// Untitled 
// const parGroups = str => {
//  const stack = str.split('').filter(val => val === '(' || val === ')')
//  let even = str.split('(').length === str.split(')').length
//  let balanced = stack.every((val, i, arr) => {
//   return (arr[0] === ')' || arr[arr.length - 1] === '(' || !even) ? false : true
//  })
//  return balanced
// }


///////////////////////This code works but does not check to make sure an '(' is always befor the ')' in their pair.//////
//Pseudo: // Make an Array
// filter through each to find the 2 characters '(' & ')'
// count the characthers. 
// if equal = true, if not = false.


// toArray=(str)=>{
//     // console.log(str)
//     const tempArr = str.split("")
//     console.log(tempArr)
//     let tempOpen = 0;
//     let tempClose = 0;
    
//     tempArr.forEach((indexValue)=>{
//         if (indexValue === '('){
//             tempOpen += 1;
//             // console.log(`tempOpen = ${tempOpen}`)
//             return tempOpen;
//         } else if (indexValue === ')'){
//             tempClose += 1;

//             // console.log(`tempClose = ${tempClose}`)
//             return tempClose;
//         }

//     })
//     console.log(tempOpen)
//     console.log(tempClose)
//     if(tempOpen === tempClose){
//         console.log("I am in the true")
//         return true
//     }else{
//         return false
//     }
// }

// console.log(toArray("(I am the best $#@()()()"))

// "(())" // -> true
// "()))" // -> false
// Also, every closing parentheses needs an opening partner before it.

// ")()(" // -> false
// "())(" // -> false