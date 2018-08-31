// ES6 Arrow Functions
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const vegetables = carrots.map(carrot => {type: "carrot", name: carrot}
)
// Re-write this .filter() using a fat arrow function:

friends = people.filter(person=> !!person.friendly)
// re-write the following functions to be fat arrow functions:

const doMathSum = (a, b)=> a + b

var produceProduct = (a, b)=>  a * b

// write a functions that takes a firstName, a lastName, an age and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

const firstName = "jane";
let lastName = "Doe";
let age = 100;

const feelStr = () => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

// Use the shorthand syntax to make the following code block take up one line.

const dogs = animals.filter(animal=>animal.type === "dog" ? true : false)
// Template Literals

// Write a function that will take `location` and `name` and output this if `location="Hawaii"` and `name="Janice"`: ``` Hi Janice!
// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.


// If you didn't do that with Template Literals, do it now with Template Literals. 