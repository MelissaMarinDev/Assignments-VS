/* Uptown function you up
14 JULY 2015 on JavaScript, Warmup, Problem Solving, Programming Principles, Level 2
You will create three functions.

Create a fourth function that reverses every two words. So the end result would look like this: "hit This ice that Michelle cold" ...*/

var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"]; 

              /* The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console */

function printPretty (){
    console.log(lyrics.join(" ")) 
}
// var second = printPretty();

/* The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.). */

// .reverse  .join
function goBackward(){
    lyrics.reverse();
    console.log(lyrics.join(" "));
    lyrics.reverse();
}
// goBackward();
// ----------------------How do I save this so the original Lyrics is not affected? _________-------

/* The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.
Optional Challenge: */
function withSpaces() {
    // for loop with i + 2 to print out every other word
    for (var i = 0; i < lyrics.length; i+= 2){
        console.log(lyrics[i]);
        // i++;
    }
}
withSpaces();




