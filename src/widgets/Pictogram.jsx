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

	return (
		<Card className="p-4 text-blue-500 rounded-2xl font-bold bd-dfc shadow-lg">
			<div className="grid grid-cols-2 gap-4">
				<div className="current">
					<div className="flex flex-col items-center justify-between space-y-4">
						<div className="text-2xl text-yellow-500">
							<RiTempHotFill size={38} />
						</div>
						<p className="text-md">{temperature} °C</p>
					</div>
				</div>

				<div className="current">
					<div className="flex flex-col items-center justify-between space-y-4">
						<div className="text-2xl text-blue-400">
							<RiWaterFlashFill size={38} />
						</div>
						<p className="text-md">{humidity} %</p>
					</div>
				</div>

				<div className="current">
					<div className="flex flex-col items-center justify-between space-y-4">
						<div className="text-2xl text-purple-500">
							<RiWindyFill size={38} />
						</div>
						<p className="text-md">{windSpeed} km/h</p>
					</div>
				</div>

				<div className="current">
					<div className="flex flex-col items-center justify-between space-y-4">
						<div className="text-2xl text-blue-400">
							<MdVisibility size={38} className="text-blue-500" />
						</div>
						<p className="text-md">{visibility} m</p>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default WeatherPictogram;
