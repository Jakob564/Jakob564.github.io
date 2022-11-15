erg = document.getElementById('erg')

input_name.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submitButton").click();
    }
  });
  
function loadPokemon() {

    // ------------ request ------------

    //(1) init new request object
    const input_name = document.getElementById('input_name').value
    if(input_name == "" ) {
        erg.innerHTML = 'Please enter a name!'
    } else {

        let xhttp = new XMLHttpRequest();

        //(4) define the callback function
        xhttp.onreadystatechange=function() {
            if(this.readyState == 4 && this.status == 200) {

                console.log('JUHU, die Antwort ist da')

                // convert answer into object
                let pokemon = JSON.parse(this.responseText)

                console.log(pokemon)
                console.log(pokemon.name)
                console.log(pokemon.weight)
                console.log(pokemon.types[0].type.name)

                document.getElementById('erg').innerHTML +=
                '<div><h2 style="text-transform: capitalize;">' + pokemon.name + '</h2>' + 
                '<p>' + (pokemon.weight/10) + 'kg schwer.</p>' + 
                '<p>Typ: ' + pokemon.types[0].type.name + '</p>' +
                '<img src="' + pokemon.sprites.front_shiny +'" alt="shiny_ditto" style="width:80%; margin-top: -15%;"></div>'
            }
        }

        //(2) set the target URL (public server path)
        xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + input_name , true)

        //(3) start AJAX request
        xhttp.send();
    }
    
}