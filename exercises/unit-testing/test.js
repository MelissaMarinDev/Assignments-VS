var chai = require('chai')
var myFunctions = require('./app.js')
var addS = myFunctions.addS
var assert = chai.assert


//   describe,   it    //
// assert.equal  (actual, expected)    // Great for strings and numbers and booleans
// assert.deepEqual (actual, expected) // 


// it(should not add an 's' if the word ends with an 's' already
    // Write the it test:
    // Run the text (mocha) - to prove that it should fail
    // Go re-factor the function
    // Run test again.
    
describe("Create a function that adds an 's' to the end of every word in an array", function(){
    it("should end with an s", function(){
        assert.deepEqual(addS(['dog', 'cat', 'unicorn']), ['dogs', 'cats', 'unicorns'])
    })
    it("should not allow numbers into the array", function(){
        assert.equal(addS(['dog', 0, 3]), 'no numbers')
    })
    it("should not add an 's' if the word ends with an 's' already", function(){
        assert.deepEqual(addS(['dogs','cats', 'penguins']), ['dogs', 'cats', 'penguins'])
    })
})
