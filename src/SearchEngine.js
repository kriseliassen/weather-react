import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function SearchEngine() {
  let [city, setCity] = useState(null);

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q={${city}&appid=84fd1cfe085aae87f6eca82b4b8c991a&units=metric`;
    axios.get(url).then(updateWeather);
  }

  function updateWeather(response) {
    let temperature = response.data.main.temp;
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
  }

  return (
    <div className="SearchEngine">
      <form>
        <input
          type="search"
          id="searchField"
          className="search-input"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus
          onSubmit={handleSubmit}
        />
        <button
          type="submit"
          className="formBtn search-button "
          id="searchBtn"
          onChange={updateCity}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button value="Local" className="formBtn" id="currentLocationBtn">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </button>
      </form>
    </div>
  );
}
