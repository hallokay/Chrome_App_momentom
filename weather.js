const weather = document.querySelector('.weather');


const COORDS = 'coords';

const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';

function getWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
    .then( res => {
       return res.json()
    }).then( json => {
        const temp = json.main.temp,
            place = json.name;
            weather.innerText = `${temp} ${place}`

    }

    )

}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleSuccess(position) {

    // console.log(position.coords.longitude);
    
 const latitude = position.coords.latitude, 
    longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handlegeoError () { 
console.log('Error');
}

function askForCoords () {
navigator.geolocation.getCurrentPosition(handleSuccess, handlegeoError);

}


function loadCoords () {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
       getWeather(parsedCoords.latitude, parsedCoords.longitude);
    } 
}; 

(function init () {
    loadCoords();

})();