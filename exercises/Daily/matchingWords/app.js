// Matching Words
// 17 August 2018
// Warm up
// You are a treasure hunter and you have found a cave that you believe holds One Eyed Willy's treasure. Several miles down this cave, you run into a wall with the following inscription:

// "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
// Below it says:
// Show the repeats and you shall enter

// There are 5 levers next to the wall, and as an experienced adventurer you know if you pull the wrong one you'll meet your final demise.

// Since we are programming adventurers, write a program that returns an array of every word that appears more than once in the phrase. Your final array should have just one instance of the repeated words. So if you were to find a word multiple times, your final array should have it just once.

// Create a function that accepts the pirate's inscription.
// Create an array to store all repeated words.
// Only list the repeated words once in the new array.
// Return the new array.
// Optional:

// Return the new array with a count of every time the word was repeated.
// Sort the array by count.
// Return a list of all repeats containing 3 or more characters.
 
let pirateInscription


const noRepeatWds = (string)=>{
    let pirateArr = string.split(" ");
    let newArr = []
    let doubleWord = [];
    pirateArr.forEach(indexV=> {
        if(newArr.includes(indexV) !== true){
            newArr.push(indexV);
        } else {
            if(doubleWord.includes(indexV) === false){
                doubleWord.push(indexV);
                
            }else{
                console.log(`alread in the array`)
            }
            // return doubleWord;
        }
        // return doubleWord
    })
    
return doubleWord
}

console.log(noRepeatWds("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))


///// Second solution using new Set() and spread operator[...obj]
Set is a constructor object. spread takes an object and makes it an Array.prototype
const matchingWords = str => {
    const arr = str.split(' ')
    const secretPhrase = []
    for(let i = 0; i < arr.length; i++){
      let firstIndex = arr.indexOf(arr[i])  
      let lastIndex = arr.lastIndexOf(arr[i]) 
      // if the first occurance of word's index is not equal to the last occurance of the word's index
        if(firstIndex !== lastIndex){
          secretPhrase.push(arr[i])
        }
      }
      const obj = new Set(secretPhrase)
      return [...obj].join()
  }
  
  
  console.log(matchingWords(phrase))
