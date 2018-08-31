// Axios
const axios = require('axios')

// 4 HTTP Methods:

// C - Create - POST
// R - Read   - GET
// U - Update - PUT
// D - Delete - DELETE


// GET
axios.get('https://swapi.co/api/people/').then(response => {
    console.log(response.data)
})

// POST
axios.post('https://swapi.co/api/people/', newObj).then(response => {

})

// PUT
axios.put('https://swapi.co/api/people/' + id, updatedObj).then(response => {

})

// DELETE
axios.delete('https://swapi.co/api/people/' + id).then(response => {
    
})


