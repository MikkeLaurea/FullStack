const axios = require('axios');


const API_KEY = 'e9f4fdd9c10fa873d8afb59232cd998f'; 
const CITY = 'Helsinki';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;


axios.get(API_URL)
    .then(response => {
        console.log('Weather Data:', response.data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });

    // Exercise 3: Updating and Removing Packages. En tiedä miten tämä pitäisi logata niin, että sem näkee tehtynä mutta tämä kommentti saa olla log siitä, että harjoitus on suoritettu.
    