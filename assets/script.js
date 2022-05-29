const apiKey = "0b6be22b6e829dc7d6081e13fca60036";

const fetchWeatherInfo = (cityName) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((formatedResponse) => console.log(formatedResponse));
};

const searchForWeather = () => {
  const currentCity = $("#city").val();
  console.log(currentCity);
  fetchWeatherInfo(currentCity);
};

$("#showBtn").on("click", searchForWeather);
