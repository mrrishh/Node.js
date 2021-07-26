console.log('Starting the app');
const request = require('request');


let apiKey = 'a5319d03894a67a4598bd0eb21968ce9';
let city =  'New york';
var options = {
  url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
};

request(options, (err, response, body)=>{
    let weather = JSON.parse(body)
    let message = `Longitude: ${weather.coord.lon} and Latitude: ${weather.coord.lat}!`;
    console.log(`City: ${weather.name}`);
    console.log(message);
});
