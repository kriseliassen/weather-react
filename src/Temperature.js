import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.temperatureVal * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <strong>{props.temperatureVal}</strong>
        <div className="units">
          <span className="unitBtn active">°C</span>
          <a href="/" className="unitBtn inactive" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <strong>{fahrenheit()}</strong>
        <div className="units">
          <a href="/" className="unitBtn inactive" onClick={showCelsius}>
            °C
          </a>
          <span className="unitBtn active">°F</span>
        </div>
      </div>
    );
  }
}
