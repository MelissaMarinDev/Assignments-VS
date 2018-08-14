// Palindrome Finder
// 9 Aug 2018 on Warmup
// Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.

// A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.

// E.g.:

// isPalindrome("Star Rats!");  // true  
// isPalindrome("palindrome");  // false  
// isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true  

    function isPalindrome(str){
        var alphaNum = str.replace(/[^0-9a-z]/gi, "");
        console.log(alphaNum)
        var alphaArr = alphaNum.split("");
        console.log(alphaArr)
        var revStr = alphaArr.reverse().join("");
        console.log(revStr)
        return str === revStr
    }

console.log(isPalindrome("madam I love you"))/// this is still not working. The shouild return false.