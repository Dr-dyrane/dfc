import React from "react";
import { RiSunCloudyFill } from "react-icons/ri";
import { translateWeatherCode } from "../utils/weatherCodeTranslator";

const Pill = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const weatherCode = weatherData.current.weathercode;
	const weatherDescription = translateWeatherCode(weatherCode);

	return (
		<div className="flex m-2.5 rounded-2xl font-bold shadow-l items-center h-14 justify-center">
			<div className="text-2xl text-blue-400 bg-blue-900 p-2 h-14 rounded-l-2xl">
				<RiSunCloudyFill size={38} />
			</div>
			<div className="p-3.5 items-center justify-center text-center bg-blue-900 h-14  rounded-r-2xl">
				<p className="text-md">{weatherDescription}</p>
			</div>
		</div>
	);
};

export default Pill;
