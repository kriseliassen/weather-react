import React from "react";
import "./CurrentDetails.css";

export default function CurrentDetails(props) {
  return (
    <div className="CurrentDetails">
      <ul>
        <li>
          <strong>Humidity: </strong>
          <br />
          {props.humidityVal}%
        </li>
        <li>
          <strong>Wind: </strong>
          <br />
          {props.windVal} m/s
        </li>
      </ul>
    </div>
  );
}
