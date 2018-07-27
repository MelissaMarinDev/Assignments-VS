//1.  Write a function that accepts two numbers as parameters, and returns the sum.
var a = 23;
var b = 12;

function sum (a, b){
    
    return a + b;
   
}
var total = sum(a, b)
console.log(total);

//2.  Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function addThreeNums(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1
    } else if (num2 > num1 && num2 > num3){
        return num2
    } else {
        return num3
    }
    
}
var sum3Nums = addThreeNums(12, 24, 10)
console.log(sum3Nums)


//3.  Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function mOdulus (num1){
    var test = num1 % 2
    if (test === 0){
        return "This argument is Even."
    } else if (test === 1){
        return "This argument is Odd."
    }else {
        return "Is this argument a number? Please check again."
    }
}
var moduResults = mOdulus("hi there")
console.log(moduResults)
//4.  Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
//functions letterTest (str){

//}