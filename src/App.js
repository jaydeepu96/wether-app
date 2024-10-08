import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import Highlights from './components/Highlights';
import './App.css';

function App() {
  const [city, setCity] = useState("Bhopal");
  const [units, setUnits] = useState("metric"); // Default to metric (Celsius)


  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };
  const toggleUnits = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  return (
    <div className="app">
      <div className="sidebar">
        <SearchBar onSearch={handleSearch} />


        <CurrentWeather city={city} />
      </div>
      <div className="main">
        <button onClick={toggleUnits}>
          Switch to {units === "metric" ? "Fahrenheit" : "Celsius"}
        </button>
        <WeatherForecast city={city} units={units} />
        <Highlights city={city} />
      </div>
    </div>
  );
}

export default App;
