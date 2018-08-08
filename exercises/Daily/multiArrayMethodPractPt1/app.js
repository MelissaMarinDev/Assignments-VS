// Multiple Array Methods Part 1
// Aug 7, 2018
// Warm up
// You should use multiple array methods to solve these problems. Don't use for loops!
// Using the provided array sortedOfAge (below)

// Return a list of everyone older than 18.
// Have the new list sorted by last name.
// Return each name and age with <li>'s.
// Example:

// sortedOfAge(people);  
//Output: 
// ["<li>Rick Sanchez is 78</li>", 
// "<li>Sarah Palin is 47</li>", 
// "<li>Kyle Mooney is 27</li>", 
// "<li>Morty Smith is 13</li>", 
// "<li>Frank Zappa is 12</li>"]
// Provided Array:

var people = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 29
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  },{
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
  },{
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
  }
]; 
var over18 = [
  {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
  },
  {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
  },
  {
      firstName: "Morty",
      lastName: "Smith",
      age: 29
  },
  {
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
  },
  {
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
  },
]
//return those older than 18 only.
 function olderThan18(arr){
   return arr.filter(function(indexV){
     return (indexV.age > 18)
   })
 }
var ofAge = olderThan18(people);

module.exports = { 
    people: people,
    over18: over18,
    olderThan18: olderThan18,
    ofAge: ofAge
}