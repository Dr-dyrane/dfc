import React from 'react';
import { RiTempHotFill, RiWaterFlashFill, RiUmbrellaFill } from 'react-icons/ri';

const WeatherPictogram = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const temperature = weatherData.current.temperature_2m;
  const humidity = weatherData.current.relativehumidity_2m;
  const precipitation = weatherData.current.precipitation;

  return (
    <div className="p-4 rounded-lg shadow-lg bg-gradient-to-t from-cyan-600 to-blue-500">
      <div className="flex items-center justify-start space-x-4 p-4">
        <div className="text-4xl text-yellow-400">
          <RiTempHotFill />
        </div>
        <p className="text-2xl text-blue-900 font-semibold">Temperature</p>
        <p className="text-2xl">{temperature} °C</p>
      </div>

      <div className="flex items-center justify-start space-x-4 p-4">
        <div className="text-4xl text-blue-400">
          <RiWaterFlashFill />
        </div>
        <p className="text-2xl text-blue-900 font-semibold">Humidity</p>
        <p className="text-2xl">{humidity}%</p>
      </div>

      <div className="flex items-center justify-start space-x-4 p-4">
        <div className="text-4xl text-green-400">
          <RiUmbrellaFill />
        </div>
        <p className="text-2xl text-blue-900 font-semibold">Precipitation</p>
        <p className="text-2xl">{precipitation} mm</p>
      </div>
    </div>
  );
};

export default WeatherPictogram;
