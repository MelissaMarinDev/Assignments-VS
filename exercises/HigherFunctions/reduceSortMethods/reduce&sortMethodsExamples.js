//.reduce(arg1, arg2)  takes two arguments and adds them together. the result becomes a and is added to the next.

// var newArr = numbers.reduce(function(a, b) {
//   console.log("a: " + a);
//   console.log("b: " + b);
//   return a + b;
// });

// console.log(newArr);

//.sort (arg1, arg2) 
//ARRAYS.SORT()
    // var highToLow = [23, 45, 8, 17, 100];
    // var lowToHigh = [23, 45, 8, 17, 100];

    // lowToHigh.sort(function(a, b) {
    //   return a - b;
    // });

    // highToLow.sort(function(a, b) {
    //   return b - a;
    // });
    // console.log(lowToHigh);
    // console.log(highToLow);
//STRINGS.SORT()
    // var animals = ["penguin", "giraffe", "platypus", "rat", "mouse"];

    // animals.sort();
    // console.log(animals);)
//OBJECTS.SORT()

var people = [
    {
      name: "joe",
      age: 390
    },
    {
      name: "terry",
      age: 90
    },
    {
      name: "penny",
      age: 390000
    }
  ];
  
  people.sort(function(a, b) {
    return a.name < b.name;
  });
  
  people.forEach(function(person) {
    console.log(person);
  });