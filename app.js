//1//
function formatDate(date){
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
  let dayIndex = date.getDay();
  let days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
  ];
  let day = days[dayIndex];
  return `${day} ${hours} :${minutes}`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

  //2//
  function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
  }
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);

  //3//
  function convertToFahrenheit(event){
    event.preventDefault();
    let degreeElement = document.querySelector("#degree");
    degreeElement.innerHTML = 82;
  }
  function convertToCelsius(event) {
    event.preventDefault();
    let degreeElement = document.querySelector("#degree");
    degreeElement.innerHTML=28;
  }
  let fahrenheit = document.querySelector("#degree");
  degree.addEventListener("submit", convertToFahrenheit );

  let celsius = document.querySelector("#degree");
  degree.addEventListener("submit" , convertToCelsius);