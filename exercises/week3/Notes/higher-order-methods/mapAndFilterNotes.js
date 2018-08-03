// Higher order Array Methods //
  // a function that takes another function as a parameter

  /* Basic Syntax: */  
  /* array.filter( function(arrayItem){} )*/ 

  // Filter // - Returns new array, does not alter original array
  var array = [1, 2, 3, 4]
  var something = array.filter(function(num){
        if(num < 3){
          return num
        }
  })

  // Map // - Returns new array, does not alter original array
  var mappedArray = array.map(function(num){
        return num + 1
  })


// console.log(mappedArray)

var dogs = [
  { name: 'Fluffy', isFluffy: true },
  { name: 'Fido', isFluffy: true },
  { name: 'Scooby', isFluffy: true },
  { name: 'Ralph', isFluffy: false },
]


// Use filter to return an array of all fluffy dogs
function filterFluffy(arr) {
  var fluffed = arr.filter(function (dog) {
    if (dog.isFluffy) {
      return dog
    }
  })
  return fluffed
}

console.log(filterFluffy(dogs))
// => [
//     { name: 'Fluffy', isFluffy: true },
//     { name: 'Fido',   isFluffy: true },
//     { name: 'Scooby', isFluffy: true },
//    ]




// Use Map to return an array of just the dog names
var dogNames = dogs.map(function (dog) {
  return dog.name
})

console.log(dogNames)
  // => ['Fluffy', 'Fido', 'Scooby', "Ralph"]

  //-----------
  //2nd option  Here the function called has been saved in a variable, crating that function as reusable
var adder = function (num){
  return num + 1
}

function add1 (arr){
  return arr.map(adder)
}

//common way to call Higher Function, the higher method with the called function written in there
function add1 (arr){
  return arr.map(function(num){
    return num + 1
  })
}

add1([1,2,3,4,5,6])