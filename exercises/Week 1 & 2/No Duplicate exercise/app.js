// function noDuplicates(str) {
//     //code to remove duplicates
//     var temp = "";
//     for (i = 0; i < str.length; i++){
//         temp += str[i];
//         if (str[i] )  
//         }
//     }
//     return temp;
// }

console.log(noDuplicates("bookkeeper larry"))

function noDuplicates(str){
    var noDupes = "";
    for (i = 0; i < str.length; i++){
        if (noDupes.indexOf (str[i]) === -1){
            noDupes += str[i]
        }
    }
    return noDupes;
}
consolelog(noDuplicates("bookkeeper larry"))