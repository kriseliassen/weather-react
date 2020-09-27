import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <h4>Forecast</h4>
        <div className="ForecastRow">
          <WeatherForecastPreview data={forecast.list[0]} />
          <WeatherForecastPreview data={forecast.list[1]} />
          <WeatherForecastPreview data={forecast.list[2]} />
          <WeatherForecastPreview data={forecast.list[3]} />
          <WeatherForecastPreview data={forecast.list[4]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "84fd1cfe085aae87f6eca82b4b8c991a";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
