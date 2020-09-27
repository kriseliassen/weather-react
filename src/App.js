import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";

import Credit from "./Credit";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="SearchEngine">
          <SearchEngine defaultCity="Oslo" />
        </div>
      </div>
      <div className="Credit">
        <Credit />
      </div>
    </div>
  );
}
