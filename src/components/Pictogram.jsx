import React from "react";
import {
	RiTempHotFill,
	RiWaterFlashFill,
	RiWindyFill,
} from "react-icons/ri";

const WeatherPictogram = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const temperature = weatherData.current.temperature_2m;
	const humidity = weatherData.current.relativehumidity_2m;
	const windSpeed  = weatherData.current.windspeed_10m;

	return (
		<div className="p-4 m-4 rounded-2xl font-bold shadow-lg bg-gradient-to-br from-blue-600 to-purple-600">
			<div className="flex items-center justify-between space-x-4 p-4">
				<div className="text-2xl text-yellow-400">
					<RiTempHotFill />
				</div>
				<p className="text-xl text-blue-900 font-semibold"></p>
				<p className="text-lg">{temperature} °C</p>
			</div>

			<div className="flex items-center justify-between space-x-4 p-4">
				<div className="text-2xl text-blue-400">
					<RiWaterFlashFill />
				</div>
				<p className="text-xl text-blue-900 font-semibold"></p>
				<p className="text-xlg">{humidity}%</p>
			</div>

			<div className="flex items-center justify-between space-x-4 p-4">
				<div className="text-2xl text-purple-400">
					<RiWindyFill  />
				</div>
				<p className="text-xl text-blue-900 font-semibold"></p>
				<p className="text-lg">{windSpeed} km/h</p>
			</div>
		</div>
	);
};

export default WeatherPictogram;
