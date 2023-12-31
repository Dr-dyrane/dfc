import React from "react";
import { translateWeatherCode } from "../utils/weatherCodeTranslator";
import { translateToIcon } from "../utils/WeatherCodeToIcon";
import { Card } from "@tremor/react";

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
    <Card className="p-4 bd-dfc text-blue-900 rounded-2xl shadow-lg border-b-4 border-blue-900">
      <div className="hourly-forecast-container">
        {hourlyForecasts.slice(6,24).map((forecast, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 px-2 justify-between items-center"
          >
            <div className="col-span-1">
              <forecast.WeatherIcon size={30} />
            </div>
            <div className="col-span-3">
              <h3 className="text-md font-semibold">{forecast.time}</h3>
              <p className="text-gray-500 text-xs">
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
    </Card>
  );
};

export default HourlyForecast;
