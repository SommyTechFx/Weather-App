import React from "react";
import "../current-weather/current-weather.css";
function CurrentWeather({ data }) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather}</p>
        </div>

        <img alt="weather" src="icon/01d.png " className="weather-icon" />
      </div>

      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-Value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-Value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-Value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-Value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
