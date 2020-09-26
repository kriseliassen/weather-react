import React from "react";
import "./SearchEngine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <input
          type="text"
          id="searchField"
          className="search-input"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className="formBtn search-button " id="searchBtn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button value="Local" className="formBtn" id="currentLocationBtn">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </button>
      </form>
    </div>
  );
}