import React from "react";
import { translateWeatherCode } from "../utils/weatherCodeTranslator";
import { translateToIcon } from "../utils/WeatherCodeToIcon";
import { Card } from "@tremor/react";

const Forecast = ({ weatherData }) => {
	if (
		!weatherData ||
		!weatherData.daily ||
		!Array.isArray(weatherData.daily.time)
	) {
		return null;
	}

	const dailyForecasts = weatherData.daily.time.map((timestamp, index) => {
		const day = new Date(timestamp).toLocaleDateString("en-US", {
			weekday: "long",
		});
		const weatherCode = weatherData.daily.weathercode?.[index] || "N/A";
		const apparentTemperatureMax =
			weatherData.daily.apparent_temperature_max?.[index] || "N/A";
		const apparentTemperatureMin =
			weatherData.daily.apparent_temperature_min?.[index] || "N/A";
		const weatherDescription = translateWeatherCode(weatherCode);
		const WeatherIcon = translateToIcon(weatherCode);

		return {
			day,
			weatherCode,
			apparentTemperatureMax,
			apparentTemperatureMin,
			weatherDescription,
			WeatherIcon,
		};
	});

	return (
		<div className="p-1">
			{dailyForecasts.slice(1).map((forecast, index) => (
				<div
					key={index}
					className="grid grid-cols-5 gap-4 px-2 justify-between items-center"
				>
					<div className="col-span-1">
						<forecast.WeatherIcon size={32} />
					</div>
					<div className="col-span-2">
						<h3 className="text-lg font-semibold">{forecast.day}</h3>
						<p className="text-gray-500">{forecast.weatherDescription}</p>
					</div>
					<div className="col-span-2 grid grid-cols-2 text-right justify-center items-center">
						<p className="text-lg font-semibold">
							{forecast.apparentTemperatureMax.toFixed(0)} °C
						</p>
						<p className="text-lg font-semibold">
							{forecast.apparentTemperatureMin.toFixed(0)} °C
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Forecast;
