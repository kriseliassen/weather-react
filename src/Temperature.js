import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <img src={props.iconVal} alt={props.iconDescription} />
      <strong>{props.temperatureVal}</strong>
      <div className="units">
        <button className="unitBtn active">°C</button>
        <button className="unitBtn">°F</button>
      </div>
    </div>
  );
}
