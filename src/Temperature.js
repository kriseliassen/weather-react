import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <strong>{props.temperatureVal}</strong>
      <div className="units">
        <button className="unitBtn active">°C</button>
        <button className="unitBtn">°F</button>
      </div>
    </div>
  );
}
