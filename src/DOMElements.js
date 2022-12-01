import { getWeatherToday } from "./index.js";

const createWeatherInfo = (data) => {
  //ids
  const minTemp = document.getElementById("minTemp");
  const maxTemp = document.getElementById("maxTemp");
  const feelsLike = document.getElementById("feelsLike");
  const pressure = document.getElementById("pressure");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");
  minTemp.textContent = "Minimum Temperature: " + data.main.temp_min + "°";
  maxTemp.textContent = "Maximum Temperature: " + data.main.temp_max + "°";
  feelsLike.textContent = "Feels Like: " + data.main.feels_like + "°";
  pressure.textContent = "Pressure: " + data.main.pressure + " Pa";
  humidity.textContent = "Humidity: " + data.main.humidity + " %rh";
  wind.textContent = "Wind Speed: " + data.wind.speed + " kn";
};

export const createMainWeatherCard = async (response) => {
  //ids
  const cityName = document.getElementById("cityName");
  const mainTemp = document.getElementById("mainTemp");
  const weatherIcon = document.getElementById("weatherIcon");
  const country = document.getElementById("country");
  const weatherDesc = document.getElementById("weatherDesc");
  //method
  const data = await getWeatherToday(response);
  createWeatherInfo(data);
  cityName.textContent = `${data.name}:`;
  mainTemp.textContent = `${data.main.temp}°`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  country.textContent = data.sys.country + " ,";
  weatherDesc.textContent = data.weather[0].description;
};
