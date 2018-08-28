///////////////
// Functions //
                        // Params
// const buildPersonObj = (name, age) => ({ name, age })
// const randomNumMaker = num => Math.floor(Math.random() * num)

                                    // Args
// const newPerson = buildPersonObj("Rick", 80)

// console.log(newPerson)

// const random1 = randomNumMaker(500)
// const random2 = randomNumMaker(10)
// const random3 = randomNumMaker(54)
// console.log(random1, random2, random3)

//////////////////////////////////////
// Conditionals (if, else if, else) //
// check conditions

// if  vs   switch

// if(variable === 0){
//   console.log("It's 0")
// } else if(variable === 1){
//   console.log("it's 1")
// } else if(variable === 2){
//   console.log("It's neither 0 or 1")
// } else if(variable === 3){

// } else if(variable === 10){

// } else {
//   console.log("Gimme a number")
// }

// const variable = "String"
// let weatherIcon;

// const mySwitch = variable => {
//   switch(weatherCondition){
//     case "stormy":
//       weatherIcon = './stormyIcon.jpg'
//     break;
//     case 1:
//       console.log("The number is 1")
//       break;
//     case 2:
//       console.log("The number is 2")
//       break;
//     default:
//       console.log("Gimme a Number")
//   }
// }

// const number = mySwitch(variable)
// console.log(number)


/////////////////////////////
// For Loops & While Loops //

// For doing tasks repeatedly, being able to customize the increment,
// starting and Stopping points

// 1.  Incrementor(starting point) - Initializer
// 2.  Stopping Point
// 3.  Increment Amount (or Decrement Amount)

// FIZZBUZZ
// num / 3 => "Fizz"
// num / 5 => "Buzz"
// num / 5 && num / 3 => "FizzBuzz"
// else return the number

// for(let i = 0; i <= 100; i++){
//   if(i % 5 === 0 && i % 3 === 0){
//     console.log("FizzBuzz")
//   } else if(i % 5 === 0){
//     console.log("Buzz")
//   } else if(i % 3 === 0){
//     console.log("Fizz")
//   } else {
//     console.log(i)
//   }
// }

//   const player = {
//     isAlive: true
//   }

// while(player.isAlive){
//   attack()
// }

// function attack(){
//   while(player.health > 0){

//   }
// }

///////////
// AXIOS //

// Get, Post, Put, Delete
// Promises ( high level )

// CRUD // - HTTP Methods
// C - create  - POST   - .post('url', newObj)
// R - read    - GET    - .get('url')
// U - update  - PUT    - .put('url/id', partsToUpdateObj)
// D - delete  - DELETE - .delete('url/id')

// axios.get('https://api.vschool.io/test/todo').then(response => {
//   console.log(response.data)
// })

// const newTodo = {
//   title: "Test Todo 2"
// }

// axios.post('https://api.vschool.io/test/todo', newTodo).then(response => {
//   console.log(response)
// })

// const updatedTodo = {
//   title: "Todo 3",
//   completed: true,
//   description: "Though it is done, It must be updated"
// }

// axios.put('https://api.vschool.io/test/todo/5b75eb1feec94d291400ba6d', updatedTodo).then(response => {
//   console.log(response)
// })

// axios.delete('https://api.vschool.io/test/todo/5b75eb75eec94d291400ba6e').then(response => {
//    console.log(response)
// }).catch(err => {
//   console.log(err)
// })

// Position / CSS Grid / Flex




// Constructor Prototypes ( High level )
// Classes

// Inheritance vs Composition ( High Level )
// What they are   vs   What they do

/////////////////////
//     CLASSES     //

// class - css . styling
// class - js .  defining an object template

// ICE CREAM CLASS
// NEOPOLITAN CLASS
  // html canvas //

// pre-es6 Constructor Function
// function Es5IceCream(flavor, texture, doesMelt, toppings){
//   this.flavor = flavor
//   this.texture = texture
//   this.doesMelt = doesMelt
//   this.toppings = toppings
// }

// Es5IceCream.prototype.melt = function () {
//   console.log('omg i am melting, glub glub')
// }


// es6 Class (new syntax to make contstructors)
// class Es6IceCream {
//   constructor(flavor, texture, doesMelt, toppings){
//     this.flavor = flavor
//     this.texture = texture
//     this.doesMelt = doesMelt
//     this.toppings = toppings
//   }
//   melt(){
//     console.log('omg i am melting, glub glub')
//   }
//   drips(){
//     console.log('drip drip drip')
//   }
// }


// class Neopolitan extends Es6IceCream {
//   constructor(flavor, texture, doesMelt, toppings, colors){
//     super(flavor, texture, doesMelt, toppings)
//     this.colors = colors
//   }
// }


// // const ice1 = new Es5IceCream('Vanilla', 'Silky Smooth', true, ['sprinkles', 'chocolate syrup'])
// const ice2 = new Es6IceCream('Vanilla', 'Silky Smooth', true, ['sprinkles', 'chocolate syrup'])
// const neopolitan = new Neopolitan('Neopolitan', 'Cold', true, ['none'], ['red', 'white', 'brown'])
// neopolitan.melt()

