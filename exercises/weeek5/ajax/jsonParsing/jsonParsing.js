var xhr = new XMLHttpRequest()
console.log(xhr);

xhr.onreadystatechange = function (){
    console.log(xhr)
    if(xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.responseText)
        console.log(data)

        pokemonList(data.objects[0].pokemon)
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)

xhr.send()

function pokemonList(data){
  for (var i = 0; i<data.length; i++){ // create and add an element to your HTML
    var div = document.getElementById('list') 
    var h1 = document.createElement('h1')
    div.appendChild(h1)
    h1.textContent = `${data[i].name}` // or innerHTML is for extra tags.

  }
}