var userInput = document.userInput


userInput.addEventListener('submit', function(e){
e.preventDefault()

// gather all of the values into an array
    var firstname = document.userInput.firstname.value
    var lastname = document.userInput.lastname.value
    var age = document.userInput.age.value
    var gender = document.userInput.gender.value


    //// how to get the input from a checkbox.   think of `querySelector` like `document.getElementsByTagName`, so it's looking for the literal HTML tag
    var checkedLocations = []
    var locationsCheckboxes = document.querySelectorAll("input[name=locations]:checked")
    for (var i = 0; i < locationsCheckboxes.length; i++){
        checkedLocations.push(checkedBoxes[i].value);
    }

    //here is our second checkbox
    var checkedDiets = [];
    var dietResults =
    document.querySelectorAll("input[name=diet]:checked")
    for (var i = 0; i < dietResults.length; i++){
        checkedDiets.push(dietResults[i].value);
    }

    //alert the object
    
    alert("First name: " + firstname + "\n Last name: " + lastname + "\n Age: " + age + "\n Gender: " + gender + "\n Locations: " + checkedLocations + "Diet: " + checkedDiets)


})

//put into function to put on the webpage. this would replace the alert.
// var display = document.getElementById("userResults")

// display.textContent= ("First name: " + firstname + "\n Last name: " + lastname + "\n Age: " + age + "\n Gender: " + gender + "\n Locations: " + locations+ "Diet: " + diet)



// document.createElement("h1")
// ----------.appendchild  <h1>
// display.appendChild()
// parent.appendChild(the child to be added--HTML element-tags)


//Notes on .querySelectorAll
//with `querySelector` you can give it tags, classes, or id's.  If it's and id or class, you just use the `id` or `class` notation (don't forget their css symbol of (#, ., or no symbol for the tag))
// ---document.querySelectorAll('.myClassName')
