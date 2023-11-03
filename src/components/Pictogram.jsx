import React from "react";
import {
	RiSunCloudyFill,
	RiTempHotFill,
	RiWaterFlashFill,
	RiWindyFill,
} from "react-icons/ri";
import { translateWeatherCode } from "../utils/weatherCodeTranslator";

const WeatherPictogram = ({ weatherData }) => {
	if (!weatherData) {
	  return null;
	}
  
	const temperature = weatherData.current.temperature_2m;
	const humidity = weatherData.current.relativehumidity_2m;
	const windSpeed = weatherData.current.windspeed_10m;
	const weatherCode = weatherData.current.weathercode;
	const weatherDescription = translateWeatherCode(weatherCode);
  
	return (
	  <div className="p-2 m-2 rounded-2xl font-bold shadow-l">
		<div className="grid grid-cols-2 gap-4">
		  <div className="p-4 rounded-2xl font-bold shadow-lg bg-blue-800">
			<div className="flex flex-col items-center justify-between space-y-4">
			  <div className="text-2xl text-yellow-400">
				<RiTempHotFill size={38}/>
			  </div>
			  <p className="text-md">{temperature} °C</p>
			</div>
		  </div>
  
		  <div className="p-4 rounded-2xl font-bold shadow-lg bg-blue-800">
			<div className="flex flex-col items-center justify-between space-y-4">
			  <div className="text-2xl text-blue-400">
				<RiWaterFlashFill size={38}/>
			  </div>
			  <p className="text-md">{humidity} %</p>
			</div>
		  </div>
  
		  <div className="p-4 rounded-2xl font-bold shadow-lg bg-blue-800">
			<div className="flex flex-col items-center justify-between space-y-4">
			  <div className="text-2xl text-purple-400">
				<RiWindyFill size={38}/>
			  </div>
			  <p className="text-md">{windSpeed} km/h</p>
			</div>
		  </div>
  
		  <div className="p-4 rounded-2xl font-bold shadow-lg bg-blue-800">
			<div className="flex flex-col items-center justify-between space-y-4">
			  <div className="text-2xl text-blue-400">
				<RiSunCloudyFill size={38}/>
			  </div>
			  <p className="text-md justify-center">{weatherDescription}</p>
			</div>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default WeatherPictogram;
