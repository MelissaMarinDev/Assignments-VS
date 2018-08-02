// 1.    Looping through an OBJECT
//     * Var myObj = {
//                             name: “Rick”,
//                             age: 20, 
//                             isAlive: true,
//                         }

        console.log(myObj)  // This will print the keys: value
        myObj.friend = "my Friend"  // this will create a new key on the array.
        console.log(myObj)

        




//     *    //loop through an object:
//     * for (var key in myObj){
//                         Console.log(key) //prints out : name age isAlive
//                         Console.log(myObj[key]) // prints out : ‘Rick’ 20 true

var phrase = 'slimy smelly solution';

//loop to make each letter a key, checking to see if they are the same.
// add to the value each time a key is made or added to.

var myObj = {};

function countLetters(str){
    for (var i = 0; i < phrase.length; i++){
        //check for key match, if not a match.push into my object & ++ key
        var value = phrase[i];

        for (var j = 0; j < myObj.length; j++){
            console.log(j)

            // if (value !== myObj){
            //     myObj.push(value)   //
            //     myObj[key] +=1;
            // } else if (value === myObj){
            //     myObj[key] +=1;
            // }
           
            // console.log(myObj, myObj[j])
        }
    }
}

countLetters(phrase);