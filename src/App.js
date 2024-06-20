import React from "react";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, api_key } from "../src/source/api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentweather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${api_key}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentweather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err0r) => console.log(err0r));
  };

  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
