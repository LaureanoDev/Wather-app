import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import WeatherCard from "./WeatherCard";

const SearchBar = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const getData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b94000f652a71a0e78dfd279a7478875`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setCity("");
    console.log(data);
  };

  return (
    <>
      <div className="full-section">
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="search-text">Search</h2>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="search-bar"
              type="text"
              placeholder="Enter Location"
            />
          </div>
        </form>
      </div>
      <WeatherCard
        name={data.name}
        temp={data.main ? data.main.temp : null}
        humidity={data.main ? data.main.humidity : null}
        tempmax={data.main ? data.main.temp_max : null}
        tempmin={data.main ? data.main.temp_min : null}
      />
    </>
  );
};

export default SearchBar;
