import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
var key = process.env.WEATHER_API;

const weatherReport = async (location) => {
  var link = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;
  try {
    var response = await axios.get(link);
    var weatherData = response.data;
    var city = weatherData.location.name;
    var temp = weatherData.current.temp_c;
    var weatherCondition = weatherData.current.condition.text;
    var region = weatherData.location.region;
    var country = weatherData.location.country;
    var windspeed = weatherData.current.wind_kph;
    var humidity = weatherData.current.humidity;
    var weathermsg = `The temperature in ${city} is ${temp}°C with ${weatherCondition} Sky, Wind is blowing at a speed of ${windspeed} km/h and humidity is ${humidity}. ${city} is in ${region}, ${country}.`;
    return weathermsg;
  } catch (error) {
    console.error(error);
    return `sorry i don't know ${location}`;
  }
};

export default weatherReport;
