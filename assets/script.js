const apiKey = "0b6be22b6e829dc7d6081e13fca60036";
const weatherForCityUrl = "https://api.openweathermap.org";

const fetchWeatherInfo = (cityName) => {
  const weatherApi = `${weatherForCityUrl}/geo/1.0/direct?q=${showBtn}&limit=5&appid=${apiKey}`;
  fetch(weatherApi)
    .then((response) => response.json())
    .then((formatedResponse) => console.log("formatedResponse"));
};

const searchForWeather = () => {
  const currentCity = $("#city").val();
  console.log(currentCity);
  fetchWeatherInfo(currentCity);
};

$("#showBtn").on("click", searchForWeather);
