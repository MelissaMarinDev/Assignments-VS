//JS  
    // in our JavaScript, we refer to our HTML page with 'doc.'    

    // HOW TO CREATE ELEMENTS
        //doument.createElement() ==> with the string we want created. ex. ('div') 
        var h1 = document.createElement('h1')
        var display = document.getElementById('list')
    // HOW TO APPEND HTML ELEMENTS
        h1.textContent = "hey I'm in h1."//to put text on the page
        h1.innerHTML = "<span> Hey I'm an h1</span>" // To put h1 plus text.
        display.appendChild(h1)

//C-R-U-D ******
    // //Http:
    // Post: //create - an account
    // Get: //read
    // Put: // Update -something that has already been created, like password
    // Delete: // Destroy
    // = CRUD


//AJAX - Asynchronous JavaScript and XML (Extensible Markup Language)
//      Asynchronous - two things happening at once.

    //1. Start by getting a new instance of a constructor
    var xhr = new XMLHttpRequest()
    // We are working with readystate, onreadystatechange
    console.dir(xhr)
 

    //4. 5. 
   xhr.onreadystatechange = function(){
       //code to do the request stuff
       console.dir(xhr)
       //we want to know when data comes back so se can use it.
       if(xhr.readyState == 4 && xhr.status == 200){
            // console.log(xhr.resonseText) // to see the object in a string form
            //parsing - turing JSON data (string) into a JS Object we can access
            var data = JSON.parse(xhr.responseText)
            displayData(data)
       }
   } 

        //2.first arg is the request, 2nd URL, 3 is Asynchronous
   xhr.open("GET", "https://swapi.co/api/people/1/", true )
        //3. now send it
   xhr.send()


   //ex.
   function displayData(data){
    var display = document.getElementById('list')
    display.innerHTML = `
                        <h1 class="box">${data.name}</h1>
                        <p> Eye color: ${data.eye_color}</p>
                        <p> Hair Color: ${data.hair_color} </p>
                        `
    display.style.backgroundColor = data.eye_color
    display.classList.add('anotherClass') //.add .remove . toggle
}