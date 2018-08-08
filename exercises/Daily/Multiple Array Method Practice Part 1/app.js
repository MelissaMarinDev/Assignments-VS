// Multiple Array Methods Part 1
// Aug 7, 2018
// Warm up
// You should use multiple array methods to solve these problems. Don't use for loops!
// Using the provided array sortedOfAge (below)

// Have the new list sorted by last name.
// Return each name and age with <li>'s.
// Example:

sortedOfAge(peopleArray);  
//Output: 
// ["<li>Rick Sanchez is 78</li>", 
// "<li>Sarah Palin is 47</li>", 
// "<li>Kyle Mooney is 27</li>", 
// "<li>Morty Smith is 13</li>", 
// "<li>Frank Zappa is 12</li>"]
// Provided Array:

var peopleArray = [  
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
// Return a list of everyone older than 18.
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
function olderThan18(arr){
    return arr
}


module.exports = { 
    peopleArray: peopleArray,
    olderThan18: olderThan18,
    over18: over18,
}