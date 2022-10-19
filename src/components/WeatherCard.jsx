import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ name, temp, humidity, tempmax, tempmin }) => {
  return (
    <div className="container">
      <div className="box">
        <div className="container-city-name">
          <h1 className="city_name">{name}</h1>
        </div>
        <div className="container-temp">
          <h1>{temp}°F</h1>
        </div>
        <div className="buttom-container">
          <div>
            <h1>{humidity}%</h1>
            <h1>Humidity</h1>
          </div>
          <div>
            <h1>{tempmax}°F</h1>
            <h1>Temp Max</h1>
          </div>
          <div>
            <h1>{tempmin}°F</h1>
            <h1>Temp Min</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
