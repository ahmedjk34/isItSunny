export { getWeatherToday } from "./weatherAPI";
import { createMainWeatherCard } from "./DOMElements";
//search bar
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("search");
//get the location & show weather on load
window.onload = () => {};
//search Functionality
searchButton.addEventListener("click", () => {
  createMainWeatherCard(searchBar.value);
});
//change temp button
const changeTemp = document.getElementById("changeTemp");
changeTemp.addEventListener("click", () => {
  Array.prototype.slice.call(changeTemp.childNodes).forEach((child) => {
    if (child instanceof Element) {
      if (child.classList.contains("bold")) {
        child.classList.remove("bold");
        child.classList.add("light");
      } else {
        child.classList.remove("light");
        child.classList.add("bold");
      }
    }
  });
  createMainWeatherCard(searchBar.value);
});
