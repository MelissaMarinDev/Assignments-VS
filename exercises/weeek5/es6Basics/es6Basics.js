    // //ES6 BASICS PRACTICE CONST AND LET

    // const name = "Ben";
    // let age = 24;
    // const dateOfBirth = "feb";

    // const statuses = [ 
    //   { code: 'OK', response: 'Request successful' },
    //   { code: 'FAILED', response: 'There was an error with your request' },
    //   { code: 'PENDING', response: 'Your reqeust is still pending' }
    // ];
    // let message = '';
    // let currentCode = 'OK';

    // for (let i = 0; i < statuses.length; i++) {
    //   if (statuses[i].code === currentCode) {
    //     message = statuses[i].response;
    //     console.log(message);
    //   }
    // }
// ---------------------

// ES6 PRACTICE ////
        // const name = 'John'
        // let age = 101
        // const pets = ["cat", "dog"]

        // const petObjects = []

        // for (let i = 0; i < pets.length; i++){
        //   const pet = {type: pets[i]}
        //   if (pets[i] === "cat"){
        //     let name = "fluffy"
        //     pet.name = name
        //   } else {
        //     let name = "spot"
        //     pet.name = name
        //   }
        //   petObjects.push(pet)
        // }
        // console.log(name)
        // console.log(age)
        // console.log(pets)
        // console.log(petObjects)
// -----------------------------

const carrots = [{"type":"type"},
{"name":"jamie"},
{"season": "all season"}]

        // const vegetables = carrots.map(function(carrot){
        //     return {type: "carrot", name: "carrot"}
        // })

const vegetables = carrots.map(carrot => {
    return {type: "carrot", name: carrot}
})
console.log(vegetables)
