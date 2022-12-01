export const getWeatherToday = async (cityName) => {
  let currentUnit = document.querySelector(".bold");
  if (currentUnit.textContent == "°C") {
    currentUnit = "metric";
  } else {
    currentUnit = "imperial";
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${currentUnit}&appid=e28d24812e288f4afbafe94df2f7631c`,
    {
      mode: "cors",
    }
  );
  const data = await response.json();
  if (response.ok) return data;
};
export const getWeatherOnLoad = async () => {};
