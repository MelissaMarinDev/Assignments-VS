// Catch Me If you Can
// 21 JUNE 2017 on JavaScript, Error-Handling

// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x, y){  
//   //check data types first and throw error

//   try{
//       if( typeof x != 'number' || typeof y != 'number'){
//          throw  "You have to enter two NUMBERS. Please try again."
//       } 
//     } catch(err){
//         console.log(err)
//     }
//   return x + y;
// }

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

// function sum(x, y){  
//   //check data types first and throw error
//   if( typeof x != 'number' || typeof y != 'number'){
//              throw  "You have to enter two NUMBERS. Please try again."
//           } 
//     return x + y;
// }
// try{
//     sum("1", "2")
// }
// catch(err){
//     console.log(err)
// }


//------------------------


// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

// var user = {username: "sam", password: "123abc"};  
// function login(username, password){  
//   //check credentials
//     try{
//         if(username === "sam" && password === "123abc"){
//         console.log(`Welcome back ${user.username}.`);
//         }else if (username !== "sam" && password !== "123abc"){
//             throw "Your user name or password is incorrect. Please try again."
//         }
//     }
//     catch(err){
//     console.log(err);
//     }
// }

// login("sam", "123abc");
// login("SAM", "ABC123");
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!
var user = {username: "sam", password: "123abc"};  
function login(username, password){  
  //check credentials  
        if(username === "sam" && password === "123abc"){
        console.log(`Welcome back ${user.username}.`);
        }else if (username !== "sam" && password !== "123abc"){
            throw "Your user name or password is incorrect. Please try again."
        }
}
try {
    login("sam", "123abc")
    // login("SAM", "ABC123");
}
catch(err){
    console.log(err);
    }

// ----------------------------
// Notes on how to create throw catch functions
// // Check out the example below and try running it ourself:
// var input = "";

// try {
//     if (input == ""){
//         throw "Input can not be empty.";
//     } else if(input.length){
//         throw "Input is too big.";
//     } else {
//         console.log("Your code runs fine!");
//     }
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     console.log("Runs no matter what.");
//     console.log("And the input was " + input);
// }