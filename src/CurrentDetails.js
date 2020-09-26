import React from "react";
import "./CurrentDetails.css";

export default function CurrentDetails(props) {
  return (
    <div className="CurrentDetails">
      <ul>
        <li>Humidity: {props.humidityVal}%</li>
        <li>Wind: {props.windVal}m/s</li>
        <li>
          Max/min: <br></br>
          {props.maxTempVal}°C | {props.minTempVal}°C
        </li>
      </ul>
    </div>
  );
}
