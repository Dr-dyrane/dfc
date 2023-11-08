import React from "react";
import { RiTempHotFill, RiWaterFlashFill, RiWindyFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { Card } from "@tremor/react";

const WeatherPictogram = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const temperature = weatherData.current.apparent_temperature;
	const humidity = weatherData.current.relativehumidity_2m;
	const windSpeed = weatherData.current.windspeed_10m;
	const visibility = weatherData.current.visibility;

	const dewPoint = temperature - (100 - humidity) / 5;

	return (
		<Card className="p-4 text-blue-500 rounded-2xl font-bold bd-dfc shadow-lg">
			<div className="grid grid-cols-2 gap-4">
				<div className="current">
					<div className="current-wt">
						<p>Feels like</p>
						<p className="text-lg text-white">{temperature} °C</p>
						<RiTempHotFill size={20} className="text-yellow-400" />
						<p>The temperature you actually feel</p>
					</div>
				</div>

				<div className="current">
					<div className="current-wt">
						<p>Humidity</p>
						<p className="text-lg text-white">{humidity} %</p>
						<RiWaterFlashFill size={20} className="text-blue-300" />
						<p>The dew point is {dewPoint.toFixed(2)}° right now</p>
					</div>
				</div>

				<div className="current">
					<div className="current-wt">
						<p>Wind Speed</p>
						<p className="text-lg text-white">{windSpeed} km/h</p>
						<RiWindyFill size={20} className="text-purple-400" />
						<p>Air movement velocity</p>
					</div>
				</div>

				<div className="current">
					<div className="current-wt">
						<p>Visibility</p>
						<p className="text-lg text-white">{visibility} m</p>
						<MdVisibility size={20} className="text-blue-700" />
						<p >The distance you can see clearly.</p>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default WeatherPictogram;
