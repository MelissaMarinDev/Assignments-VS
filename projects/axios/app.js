//normally this done by adding the todo. When it is displayed, it will not be alterable unless you click on an 'edit' button.



axios.get('https://api.vschool.io/melissamarin/todo').then (function(response){
    console.log(response)
    displayData(response.data)

}).catch(function(err){
    console.log(err)
})

// Obtain the information from the input form
document.formTodo.addEventListener("submit", function(e){
        e.preventDefault();
        var newTodo = {};
        newTodo.title = formTodo.title.value;
        newTodo.description = formTodo.description.value;
        newTodo.price = formTodo.price.value;
        newTodo.imgUrl = formTodo.url.value;
        newTodo.completed = formTodo.completed.checked;
        console.log(newTodo);
        axios.post("https://api.vschool.io/melissamarin/todo", newTodo).then(function(response){
            console.log(response);
        })
});
function displayData(arr){
   
    
    arr.forEach(function(todo){
        var form = document.createElement("form");
       
        form.classList.add("todoItem");
        form.innerHTML +=` 
        <label for"x"><input type="checkbox" name="completed" placeholder="completed" id="checkbox"/>Completed </label>
        <br>
        <img src="">
        <div id="list" name="list">

                &#9829<input name="title"id="item" type="text" value=${todo.title}/>
                <br>
                &#9829<input name="price"id="price" type="text" value="${todo.price}"/>
                <br>
                &#9829<input name="url" id="newUrl" type="text" value="${todo.imgUrl}"/>
                &#9829<textarea name="description"id="description" type="text" value="${todo.description}" rows="2" cols="20" wrap="hard"></textarea>
        </div>
        <button id="submit" value="Edit/Update">Edit/Update</button>
       
    </form>
    <div></div>
    <br>
                `;
                document.getElementById("parentdiv").appendChild(form)
    })
 
}
    // var list = document.getElementById('list');
    //grab list from HTML
    //Loop through the array.
    // Obtain the information from the input form
         //My ATTEMPT   
        //     for (var i = 0; i<arr.length;i++){
        //         //for each Todo object in the array
        //         var title = document.createElement('form').setAttribute("name", "listFormAte");
                
        //         var todo = document.createElement('div').setAttribute("id", "item");
        //         var titleNode = document.createTextNode(`${arr[i].title}`);
        //         formTitle.appendChild(titleNode);
        //         title.appendChild(formTitle);
        //         formTitle.textContent = `Todo: ${arr[i].title}`

        //         var formPrice = document.createElement('div').setAttribute("id","price");
        //         formPrice.appendChild(title);
        //         formPrice.textContent = `Price: ${arr[i].price}`

        //         var formDesc = document.createElement('div').setAttribute("id","description");
        //         formDesc.appendChild(title);
        //         formDesc.textContent = `Note: ${arr[i].description}`
                
        //         // console.log(title.textContent)
        //         var br = document.createElement('br')
        //         br.appendChild(title)

        //         list.appendChild(title)
        //         //create a text element (p, ha-16, span)
                
        //         //put todo textin text element
        //         //append text element to list
        //     }
        // }



// axios.get("//address that you want").then (function(response){
//     console.log(response)
// }).catch(function(err){console.log(err)
// })





