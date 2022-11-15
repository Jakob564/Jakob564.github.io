erg = document.getElementById('erg')
  
function loadPokemon() {
    let selectedName = document.getElementById('pokemon').value;
    // ------------ request ------------

    //(1) init new request object

    let xhttp = new XMLHttpRequest();

    //(4) define the callback function
    xhttp.onreadystatechange=function() {
        if(this.readyState == 4 && this.status == 200) {

            // convert answer into object
            let pokemon = JSON.parse(this.responseText)

            document.getElementById('erg').innerHTML =
            '<div><h2 style="text-transform: capitalize;">' + pokemon.name + '</h2>' + 
            '<p>' + (pokemon.weight/10) + 'kg schwer.</p>' + 
            '<p>Typ: ' + pokemon.types[0].type.name + '</p>' +
            '<img src="' + pokemon.sprites.front_shiny +'" alt="shiny_ditto" style="width:80%; margin-top: -15%;"></div>'
        }
    }

    //(2) set the target URL (public server path)
    xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + selectedName , true)

    //(3) start AJAX request
    xhttp.send();

    
}