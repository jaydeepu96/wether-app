import React, { useState, useEffect } from "react";
import axios from "axios";

const Highlights = ({ city }) => {
  const [highlights, setHighlights] = useState(null);
  const API_KEY = "3ccf256bbd6cb85d17ceb22fdd17621a"; // Your API key

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setHighlights(response.data);
      } catch (error) {
        console.error("Error fetching highlight data:", error);
      }
    };
    if (city) {
      fetchHighlights();
    }
  }, [city]); // Fetch highlights when the city changes

  if (!highlights) return <p>Loading...</p>;

  const { wind, main, visibility } = highlights;
  const windSpeed = wind.speed;
  const humidity = main.humidity;
  const visibilityKm = (visibility / 1000).toFixed(1); // Convert visibility to km
  const airQualityIndex = 105; // Placeholder for AQI; you'll need a separate API to fetch real-time AQI data

  return (
    <div className="highlights">
      <h2>Today's Highlights</h2>
      <div className="highlight-grid">
        <div className="highlight-card">
          <h3>UV Index</h3>
          <p>5 (Moderate)</p>
        </div>
        <div className="highlight-card">
          <h3>Wind Status</h3>
          <p>{windSpeed} km/h</p>
        </div>
        <div className="highlight-card">
          <h3>Sunrise & Sunset</h3>
          {/* Replace these with actual sunrise/sunset data if available */}
          <p>Sunrise: 6:00 AM</p>
          <p>Sunset: 6:45 PM</p>
        </div>
        <div className="highlight-card">
          <h3>Humidity</h3>
          <p>{humidity}%</p>
        </div>
        <div className="highlight-card">
          <h3>Visibility</h3>
          <p>{visibilityKm} km</p>
        </div>
        <div className="highlight-card">
          <h3>Air Quality</h3>
          <p>{airQualityIndex} (Unhealthy)</p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
