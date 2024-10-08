import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrentWeather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "3ccf256bbd6cb85d17ceb22fdd17621a"; // Your API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    if (city) {
      fetchWeather();
    }
  }, [city]); // Fetch weather whenever the city changes

  if (!weather) return <p>Loading...</p>;

  const currentWeather = weather.list[0];
  const temperature = currentWeather.main.temp;
  const description = currentWeather.weather[0].description;
  const cityName = weather.city.name;
  const country = weather.city.country;

  return (
    <div className="current-weather">
      <h1>{temperature}°C</h1>
      <p>{description}</p>
      <p>
        {cityName}, {country}
      </p>
    </div>
  );
};

export default CurrentWeather;
