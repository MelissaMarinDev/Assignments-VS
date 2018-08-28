// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1

// Given a string, write a function that determines whether it is a valid IP address.

const validateIPAddres = (str) => {
    let spltArr = [];
    const valid = "Valid IP address"
    const failed = "Not a valid IP address"
    spltArr = str.split(".")
    
     spltArr.every((indexValue) => {
        if (indexValue >=0 && indexValue < 256){
            console.log(valid)
        } else {
            console.log(failed)
        }
    })
}

validateIPAddres("172.777.254.1");


//------------------------------
//Renate's answer: const isValidIP = str => {
//     const valid = str.split(".").map((IP) => {
//         console.log(IP)
//         if (IP <= 255 && IP >= 0) {
//             return IP
//         }
//     })
//     if (valid.join(".") === str && valid.length === 4) {
//         return `${str} IS a valid IP address`
//     } else {
//         return `${str} is NOT a valid IP address.`
//     }
// }


// console.log(isValidIP("172.16.254.1.50"))
// console.log(isValidIP("abc.16.254.1"))
// console.log(isValidIP("2.192.254.0"))
// console.log(isValidIP("500.16.400.1"))
//----------------------------

// teachers result

// function validateIp(attempt){
//     const isFourLong = attempt.split(".").length === 4
//     const inRange = attempt.split(".").every(segment => {
//         return segment >= 0 && segment <= 255
//     })

//     return isFourLong && inRange
// }
