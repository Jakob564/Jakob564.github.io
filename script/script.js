/*Darkmode Button*/
let isDarkmodeActive = false;

function toggleDarkmode() {
  const dark_mode_button = document.getElementById("darkmodeButton");
  dark_mode_button.addEventListener("click", () => {
    document.body.classList.toggle("darkmode")
    isDarkmodeActive = !isDarkmodeActive;
  })
}

function keepUpDarkmode() {
  if(isDarkmodeActive == false) {
    document.body.classList.remove("darkmode");
    document.getElementById("darkmodeCheckbox").checked = false;
  } else if(isDarkmodeActive) {
    document.body.classList.add("darkmode")
    document.getElementById("darkmodeCheckbox").checked = true;

  }
}



/*Map Features*/
initMap();

function initMap() {
  const startPosition = {lat: -25.344, lng: 131.03}
  const map = new google.maps.Map(
    document.getElementById("map"),
    { center: startPosition, zoom: 4},
  );
  let marker = new google.maps.Marker({
    position: startPosition,
    map: map,
  })


  const drawingManager = new google.maps.drawing.DrawingManager;

  drawingManager.setMap(map);
}

window.initMap = initMap;

//Autocomplete

let autocomplete;
initAutocomplete();

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("destination"),
    {
      types: ['establishment'],
      componentRestrictions: {'country': ['AU']},
      fields: ['place_id', 'geometry', 'name']
    }
  );
}