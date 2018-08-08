var chai = require('chai')
var myData = require('./app.js')
var peopleArray = myData.peopleArray
var olderThan18 = myData.olderThan18
var over18 = myData.over18
var assert = chai.assert 

//write the basic framework for your function in the app.js file
//     // *
// //////////THIS IS THE BASIC LAYOUT FOR THE TEST //////////
// describe("", function(){
//     it("", function(){
//         assert.deepEqual(actual, expected)
//     })
// })

describe("Creat a function that returns a array of people older than 18", function(){
        it("returns an array of only 18+ yrs old.", function(){
            assert.deepEqual(olderThan18(people), over18)
        })
    })
