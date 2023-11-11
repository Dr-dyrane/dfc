// WeatherProvider.jsx
import React, { useState, useEffect } from "react";
import {
  fetchWeatherData,
  startFetchingWeatherPeriodically,
} from "../api/WeatherData";

const WeatherProvider = ({ latitude, longitude, children }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Check if both latitude and longitude are defined
    if (latitude && longitude) {
      // Fetch weather data from the API
      fetchWeatherData(latitude, longitude)
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });

      // Start fetching weather data periodically
      const intervalId = startFetchingWeatherPeriodically(
        latitude,
        longitude,
        (data) => {
          setWeatherData(data);
        },
        60
      ); // Set the interval time in minutes

      return () => {
        // Clean up the interval when the component unmounts
        clearInterval(intervalId);
      };
    }
  }, [latitude, longitude]);

  return <>{children(weatherData)}</>;
};

export default WeatherProvider;
