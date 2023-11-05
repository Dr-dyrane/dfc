import React from "react";
import {
	RiRainyFill,
	RiTempHotFill,
	RiWaterFlashFill,
	RiWindyFill,
} from "react-icons/ri";

const WeatherPictogram = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const temperature = weatherData.current.apparent_temperature;
	const humidity = weatherData.current.relativehumidity_2m;
	const windSpeed = weatherData.current.windspeed_10m;
	const precipitation = weatherData.current.precipitation;

	return (
		<div className="p-2 m-2 rounded-2xl font-bold shadow-l">
			<div className="grid grid-cols-2 gap-4">
				<div className="p-4 rounded-2xl font-bold shadow-lg ">
					<div className="flex flex-col items-center justify-between space-y-4">
						<div className="text-2xl text-yellow-400">
							<RiTempHotFill size={38} />
						</div>
						<p className="text-md">{temperature} °C</p>
					</div>
				</div>

				<div className="p-4 rounded-2xl font-bold shadow-lg ">
					<div className="flex flex-col items-center justify-between space-y-4">
						<div className="text-2xl text-blue-400">
							<RiWaterFlashFill size={38} />
						</div>
						<p className="text-md">{humidity} %</p>
					</div>
				</div>

				<div className="p-4 rounded-2xl font-bold shadow-lg ">
					<div className="flex flex-col items-center justify-between space-y-4">
						<div className="text-2xl text-purple-400">
							<RiWindyFill size={38} />
						</div>
						<p className="text-md">{windSpeed} km/h</p>
					</div>
				</div>

				<div className="p-4 rounded-2xl font-bold shadow-lg ">
					<div className="flex flex-col items-center justify-between space-y-4">
						<div className="text-2xl text-blue-400">
							<RiRainyFill size={38} style={{ color: 'blue' }}/>
						</div>
						<p className="text-md">{precipitation} mm</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherPictogram;
