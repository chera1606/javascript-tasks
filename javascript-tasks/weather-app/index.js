const queryWeather = async (city) => {
  try {
    showLoading();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd358c1d912c4c05b1d3c5f639c6591b&units=metric`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.querySelector(`#result`).innerText = `Error: ${error.message}`;
  } finally {
    hideLoading();
  }
};

document.querySelector(`#searchBtn`).addEventListener(`click`, () => {
  const city = document.querySelector(`#cityInput`).value;
  if (city) {
    queryWeather(city);
  }
});

function showLoading() {
  document.querySelector(`#loading`).innerText = `Loading...`;
}

function hideLoading() {
  document.querySelector(`#loading`).innerText = ``;
}

function displayWeather(data) {
  const resultDiv = document.querySelector(`#result`);
  resultDiv.innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon" />
  `;
}

function showError(message) {
  document.querySelector(
    `#result`
  ).innerHTML = `<p style="color:red;">${message}</p>`;
}
