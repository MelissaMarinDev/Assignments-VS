
// Multiple Array Methods Part 2
// 19 DECEMBER 2017
// Warm up
// Create an array of everyone that has at least one dog and sort them by age.
// Create an array of pets' first names.
// Display the pets' names in <li>s.
// Only display names of pets if their owners are older than 20.
// Only display pets who have nicknames.
// Extra Credit:

// Give Everyone's first pet a method that returns a <li> for each of the owner's pets.
// Give Everyone's first pet a method that calls the next person's first pet.
// First Array of Objects:

let dogOwnersOnly = sortedDogOwners(peopleWithPets)

function sortedDogOwners(arr) {
    let tempArr=[]
    peopleWithPets.forEach((indexValue)=>{
        if(indexValue.pets === "dog"){
            tempArr.push(peopleWithPets[indexValue])
        }
    })
    console.log(tempArr) 
}

//Output: 
// ['<li>Alfred</li>',
// '<li>Charles</li>',
// '<li>Bark Obama</li>', 
// '<li>Christopher George Latore Wallace</li>',
// '<li>Morty Jr.</li>', 
// '<li>Snuffels</li>']



const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];

/// ANSEWR FROM CLASS------------
// const peopleWithDogs = peopleAndPets.filter(person => {
//     const hasDog = person.pets.some(pet => {
//         return pet.type === "dog"
//     })
//     return hasDog  
// }).sort((a, b) => {
//     return a.age > b.age
// })

// console.log(peopleWithDogs)

// const firstNames = peopleAndPets.reduce((agg, value)=>{
//     const names = value.pets.reduce((agg, value) => {
//         return [...agg, value.name]
//         return agg.concat(value.name)
//     }, [])
//     return [...agg, ...names]
//     return agg.concat(names)
// }, [])

// // ["<li>howard</li>", "<li>bear</li>", "<li>sparky</li>"]

// console.log(firstNames)

// const liArray = firstNames.map(name => `<li>${name}</li>`)

// console.log(liArray)