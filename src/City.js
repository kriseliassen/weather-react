import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <h1>{props.cityVal}</h1>
      <h3>{props.descriptionVal}</h3>
      <p>{props.dateVal}</p>
    </div>
  );
}
