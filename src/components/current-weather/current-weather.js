// import React from "react";
import "../current-weather/current-weather.css";
function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">London</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img alt="weather" src=" " className="weather-icon" />
    </div>
  );
}

export default CurrentWeather;
