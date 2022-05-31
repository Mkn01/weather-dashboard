//Global declarations
document.getElementById("weatherSection").hidden = true;
document.getElementById("fiveDays").hidden = true;
const apiKey = "52f454eaf054eab60d1845136494f9f1";
const weatherForCityUrl = "https://api.openweathermap.org";

function renderWeatherInfo() {
  var displayCurrentWeather = (document.getElementById(
    "weatherSection"
  ).hidden = false);
  var displayNextFiveDays = document.getElementById("fiveDays");
}

function fetchWeather(location) {
  var { lat } = location;
  var { lon } = location;
  var city = location.name;
  var apiUrl = `${weatherForCityUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      renderItems(city, data);
    })
    .catch(function (err) {
      console.error(err);
    });
  renderWeatherInfo();
}

function fetchWeatherInfo(search) {
  var apiUrl = `${weatherForCityUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (!data[0]) {
        alert("Location not found");
      } else {
        appendToHistory(search);
        fetchWeather(data[0]);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}
// user input value is validated if city is inputted api will be called to find longitude and latitude of city
const searchForWeather = () => {
  const currentCity = $("#city").val();
  console.log(currentCity);
  fetchWeatherInfo(currentCity);
};
//click event for show button
$("#showBtn").on("click", searchForWeather);
