import React from "react";
import { translateWeatherCode } from "../utils/weatherCodeTranslator";
import { translateToIcon } from "../utils/WeatherCodeToIcon";


const Pill = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const weatherCode = weatherData.current.weathercode;
	const weatherDescription = translateWeatherCode(weatherCode);
    const WeatherIcon = translateToIcon(weatherCode);


	return (
		<div className="flex m-2.5 rounded-2xl font-bold shadow-l items-center h-14 justify-center">
			<div className="text-2xl p-2 px-3 h-14 rounded-l-2xl bg-blue-700">
            <WeatherIcon size={38} />
			</div>
			<div className="p-3.5 items-center justify-center text-center h-14 rounded-r-2xl flex">
				<p className="text-md">{weatherDescription}</p>
			</div>
		</div>
	);
};

export default Pill;
