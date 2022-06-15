//Global declarations

document.getElementById("fiveDays").hidden = true;
const apiKey = "52f454eaf054eab60d1845136494f9f1";
const weatherForCityUrl = "https://api.openweathermap.org";
const appendToHistory = () => {};
function fetchWeather(location) {
  console.log(location);
  var { lat } = location;
  var { lon } = location;
  var city = location.name;
  var apiUrl = `${weatherForCityUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderWeatherInfo(city, data);
    })
    .catch(function (err) {
      console.error(err);
    });
}

const fetchWeatherInfo = (search) => {
  const apiUrl = `${weatherForCityUrl}/data/2.5/weather?q=${search}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then(function (data) {
      if (data.cod !== 200) {
        alert("Location not found");
      } else {
        appendToHistory(search);
        fetchWeather(data.coord);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
};
function renderWeatherInfo(city, data) {
  const todaysWeather = data.daily[0];
  var displayCurrentWeather = document.getElementById("weatherSection");
  $("#showBtn").on("click", function (fetchWeatherInfo) {
    `<section>
    <div id="weatherSection" class="currentWeather">
      <ul id="city name">
        <li id="date">date</li>
        <img id="weather-icon" alt="weather icon" />
        <li id="temp">temperature</li>
        <li id="humidity">humdity</li>
        <li id="wind">wind speed</li>
        <li id="uv">uv index</li>
        <li id="colour">colour coded</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </section>`;
  });
}
// user input value is validated if city is inputted api will be called to find longitude and latitude of city
const searchForWeather = (event) => {
  event.preventDefault();
  const currentCity = $("#city").val();
  console.log(currentCity);
  fetchWeatherInfo(currentCity);
};
//click event for show button
$("#showBtn").on("click", searchForWeather);
