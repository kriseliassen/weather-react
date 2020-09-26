import React from "react";
import "./WeatherIcon.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon() {
  return (
    <div className="WeatherIcon">
      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="#2f3e46"
        size={90}
        animate={true}
      />
    </div>
  );
}
