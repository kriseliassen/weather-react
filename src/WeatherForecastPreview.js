import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    return Math.round(props.data.main.temp);
  }
  return (
    <div className="ForecastCol">
      {hours()}
      <WeatherIcon iconVal={props.data.weather[0].icon} />
      {temperature()}°C
    </div>
  );
}
