import React from "react";
import { translateWeatherCode } from "../utils/weatherCodeTranslator";
import { translateToIcon } from "../utils/WeatherCodeToIcon";

const Info = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const weatherCode = weatherData.current.weathercode;
	const weatherDescription = translateWeatherCode(weatherCode);
	const WeatherIcon = translateToIcon(weatherCode);

	return (
		<div className="flex m-2.5 rounded-2xl font-bold items-center h-14 justify-center">
			<div className="text-2xl p-2 px-3 h-14 rounded-l-2xl bg-slate-800 text-white shadow-md shadow-slate-800/50 border-b-4 border-slate-900">
				<WeatherIcon size={36} />
			</div>
			<div className="p-3.5 items-center justify-center text-center h-14 rounded-r-2xl flex sm:flex-grow shadow-md border-b-4 border-slate-900">
				<p
					className="text-sm sm:text-base"
					style={{ whiteSpace: "nowrap", overflowX: "auto" }}
				>
					{weatherDescription}
				</p>
			</div>
		</div>
	);
};

export default Info;
