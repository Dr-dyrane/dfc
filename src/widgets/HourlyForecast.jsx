import React from "react";
import { translateWeatherCode } from "../utils/weatherCodeTranslator";
import { translateToIcon } from "../utils/WeatherCodeToIcon";

const HourlyForecast = ({ weatherData }) => {
  if (
    !weatherData ||
    !weatherData.hourly ||
    !Array.isArray(weatherData.hourly.temperature_2m)
  ) {
    return null;
  }

  const hourlyForecasts = weatherData.hourly.temperature_2m.map(
    (temperature, index) => {
      const time = new Date(weatherData.hourly.time[index]).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const weatherCode = weatherData.hourly.weathercode?.[index] || "N/A";
      const apparentTemperature = weatherData.hourly.apparent_temperature?.[index] || "N/A";
      const weatherDescription = translateWeatherCode(weatherCode);
      const WeatherIcon = translateToIcon(weatherCode);

      return {
        time,
        weatherCode,
        apparentTemperature,
        weatherDescription,
        WeatherIcon,
      };
    }
  );

  return (
    <div className="p-1">
      <div className="hourly-forecast-container">
        {hourlyForecasts.map((forecast, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 px-2 justify-between items-center"
          >
            <div className="col-span-1">
              <forecast.WeatherIcon size={30} />
            </div>
            <div className="col-span-3">
              <h3 className="text-md font-semibold">{forecast.time}</h3>
              <p className="text-gray-500">
                {forecast.weatherDescription}
              </p>
            </div>
            <div className="col-span-1 text-right justify-center items-center">
              <p className="text-md font-semibold">
                {forecast.apparentTemperature.toFixed(0)} °C
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
