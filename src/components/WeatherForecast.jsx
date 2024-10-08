import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherForecast = ({ city, units }) => {
  const [forecast, setForecast] = useState([]);
  const API_KEY = "3ccf256bbd6cb85d17ceb22fdd17621a"; // Your API key

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`
        );
        setForecast(response.data.list.slice(0, 7)); // Get 7 intervals of forecast data
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };
    if (city) {
      fetchForecast();
    }
  }, [city, units]); // Re-fetch forecast when the city or unit changes

  if (forecast.length === 0) return <p>Loading forecast...</p>;

  const getDayName = (dt_txt) => {
    const date = new Date(dt_txt);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div className="forecast-grid">
      {forecast.map((day, index) => (
        <div className="weather-card" key={index}>
          <h3>{getDayName(day.dt_txt)}</h3>
          <p>
            {Math.round(day.main.temp)}°{units === "metric" ? "C" : "F"}
          </p>
          <p>{day.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt={day.weather[0].description}
          />
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
