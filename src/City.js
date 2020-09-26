import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <h1>{props.cityVal}</h1>
      <h3>Broken clouds</h3>
      <p>Last updated on Tuesday at 19:50</p>
    </div>
  );
}
