var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

// After every command, console.log() your arrays. A good way to do that is to use:

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables);  

// Remove the last item from the vegetable array.
vegetables.pop();
// console.log(vegetables);
// Remove the first item from the fruit array.
fruit.shift();
// console.log(fruit);
// Find the index of "orange."
var indexNum = fruit.indexOf("orange")
// console.log(fruit.indexOf("orange"));
// Add that number to the end of the fruit array.
fruit.push(indexNum);
// console.log(fruit);
// Use the length property to find the length of the vegetable array. Log that to the console.
var vegLengthInd = vegetables.length;
// console.log(vegLengthInd);
// Add that number to the end of the vegetable array.
vegetables.push(vegLengthInd);
// console.log(vegetables);
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var concatArray = fruit.concat(vegetables);
// console.log(concatArray);
// Remove 2 elements from your new array starting at index 4 with one method.
concatArray.splice(4,2);
// console.log(concatArray);
// Reverse your array.
concatArray.reverse();
// console.log(concatArray);
// Log your array as a string to the console.
// If you've done everything correctly, the last step should print the following to the console:
console.log(concatArray.join(","))

// console.log(concatArray);
// 3,pepper,1,watermelon,orange,apple  




--------------------3 fuctions for each method:
// .concate() - puts 2 arrays together. Does not change the original array.
var livingRoom = "sofa";
var kitchen = "dining table";

// console.log(livingRoom);
// console.log(kitchen);
function toConcat(){
var home = livingRoom.concat(kitchen);
console.log(home);
}
// toConcat();
function makeSmall(str1, str2){
var livLower = str1.toLowerCase();
var livUpper = str2.toUpperCase();

console.log(livLower);
console.log(livUpper);
}

makeSmall('SEMI AUTOMATIC', 'hello');



// .indexOf()
// .lastIndexOf()
// .slice()
// .split()
// .toLowerCase()
// .toUpperCase()
// .substr()

// EXTRA: 
// .match()
// .replace()
