import React from "react";
import { RiSunCloudyFill, RiTempHotFill, RiWaterFlashFill, RiWindyFill } from "react-icons/ri";
import { translateWeatherCode } from "../utils/weatherCodeTranslator";

const WeatherPictogram = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const temperature = weatherData.current.temperature_2m;
	const humidity = weatherData.current.relativehumidity_2m;
	const windSpeed = weatherData.current.windspeed_10m;
	const weatherCode = weatherData.current.weathercode;

	// Translate the weather code into a description
	const weatherDescription = translateWeatherCode(weatherCode);

	return (
		<div className="p-4 m-4 rounded-2xl font-bold shadow-lg bg-blue-800">
			<div className="flex items-center justify-between space-x-4 p-4">
				<div className="text-2xl text-yellow-400">
					<RiTempHotFill />
				</div>
				<p className="text-lg">{temperature} °C</p>
			</div>

			<div className="flex items-center justify-between space-x-4 p-4">
				<div className="text-2xl text-blue-400">
					<RiWaterFlashFill />
				</div>
				<p className="text-lg">{humidity} %</p>
			</div>

			<div className="flex items-center justify-between space-x-4 p-4">
				<div className="text-2xl text-purple-400">
					<RiWindyFill />
				</div>
				<p className="text-lg">{windSpeed} km/h</p>
			</div>
			<div className="flex items-center justify-between space-x-4 p-4">
				<div className="text-2xl text-blue-400">
					<RiSunCloudyFill />
				</div>
				<p className="text-lg">{weatherDescription}</p>
			</div>
		</div>
	);
};

export default WeatherPictogram;
