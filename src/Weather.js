import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(
      `The temperature in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=84fd1cfe085aae87f6eca82b4b8c991a&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
}
