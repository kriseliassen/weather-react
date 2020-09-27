import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";

import City from "./City";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import CurrentDetails from "./CurrentDetails";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
    });
  }

  function search() {
    const apiKey = "84fd1cfe085aae87f6eca82b4b8c991a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function myCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  function currentLocation(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const apiKey = "84fd1cfe085aae87f6eca82b4b8c991a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="SearchEngine">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="search-input"
              placeholder="Enter a city"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button
              type="submit"
              className="formBtn search-button "
              id="searchBtn"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button
              value="Local"
              className="formBtn"
              id="currentLocationBtn"
              onClick={myCurrentLocation}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </button>
          </form>
        </div>
        <div>
          <div className="City">
            <City
              cityVal={weatherData.city}
              descriptionVal={weatherData.description}
            />
            <FormattedDate date={weatherData.date} />
          </div>
          <div className="WeatherNow">
            <div className="Temperature">
              <WeatherIcon iconVal={weatherData.icon} />
              <Temperature temperatureVal={weatherData.temperature} />
            </div>
            <div className="CurrentDetails">
              <CurrentDetails
                humidityVal={weatherData.humidity}
                windVal={weatherData.wind}
                maxTempVal={weatherData.maxTemp}
                minTempVal={weatherData.minTemp}
              />
            </div>
          </div>
          <div className="Forecast">
            <Forecast city={weatherData.city} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <Loader type="Circles" color="#354f52;" height={100} width={100} />;
  }
}
