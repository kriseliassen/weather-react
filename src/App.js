import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
import City from "./City";
import Temperature from "./Temperature";
import CurrentDetails from "./CurrentDetails";
import Forecast from "./Forecast";
import Credit from "./Credit";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="SearchEngine">
          <SearchEngine />
        </div>
        <div className="City">
          <City cityVal="Stavanger" countryVal="Norway" />
        </div>
        <div className="WeatherNow">
          <div className="Temperature">
            <Temperature temperatureVal={13} />
          </div>
          <div className="CurrentDetails">
            <CurrentDetails
              humidityVal={80}
              windVal={3}
              maxTempVal={16}
              minTempVal={11}
            />
          </div>
        </div>
        <div className="Forecast">
          <Forecast />
        </div>
      </div>
      <div className="Credit">
        <Credit />
      </div>
    </div>
  );
}
