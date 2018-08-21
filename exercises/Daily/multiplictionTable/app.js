// Warm up
// Write a function that returns a 10 X 10 multiplication table (2D array).

// For example:

// multTable = (j) => {
//     if(j){
//         const table = [];
//         for (let x = 1; x <= 11; x++){
            
//             tempArr = [];
//             for (let y = 0; y <= j; y++){
                
//                 tempArr.push( x * y );
//             }
//             table.push(tempArr);
//         }
//         console.log(table);

//     }else{
//         const table = [];
//         for (let x = 1; x < 11; x++){
            
//             tempArr = [];
//             for (let y = 1; y < 11; y++){
                
//                 tempArr.push( x * y );
//             }
//             table.push(tempArr);
//         }
//         console.log(table);
//     }
// }
function multTable(n){
    const table = []
    for(let i = 1; i < n + 1; i++){
        const tempArray = []
        for(let j = 1; j < n + 1; j++){
            tempArray.push(i * j)
        }
        table.push(tempArray)
    }
    return table
}

console.log(multTable())

multTable()
// Output:
//  [
//    [1,2,3,4,5...],
//    [2,4,6,8,10...],
//    [3,6,9,12,15...],
//    ...
//  ]
// BONUS:
// Allow for the function to take a parameter n and return a table with n * n cells.