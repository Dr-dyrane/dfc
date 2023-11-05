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
		<div className="">
			{dailyForecasts.slice(1).map((forecast, index) => (
				<div key={index} className="p-4 border-gray-200 flex justify-between">
                <div className="flex items-center">
                    <div className="mr-4">
                        <forecast.WeatherIcon size={38} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{forecast.day}</h3>
                        <p className="text-gray-500">{forecast.weatherDescription}</p>
                    </div>
                </div>
                <div className="text-right flex flex-row space-x-2 justify-center items-center">
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
