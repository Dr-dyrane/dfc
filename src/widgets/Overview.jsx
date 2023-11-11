import React from "react";
import { Callout, Subtitle, Text } from "@tremor/react";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import WeatherStat from "./WeatherStat";

const Overview = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const weatherDate = new Date(weatherData.current.time);
	const formattedDate = weatherDate.toLocaleString();
	const timezone = weatherData.timezone_abbreviation;
	const MaxTemp = `${weatherData.daily.temperature_2m_max[0].toFixed(1)}°C`;
	const MinTemp = `${weatherData.daily.temperature_2m_min[0].toFixed(1)}°C`;
	const UVIndex = `${weatherData.daily.uv_index_max[0].toFixed(1)}`;
	const windspeed = `${weatherData.current.windspeed_10m.toFixed(1)} m/s`;
	const winddirection = `${weatherData.current.winddirection_10m.toFixed(1)}°`;

	return (
		<div className="p-5">
			<div className="pb-5 text-center">
				<Text className="text-2xl sm:text-3xl font-black sm:mb-21">
					Today's Overview
				</Text>
				<Subtitle className="text-sm text-gray-600">
					Last updated at: {formattedDate} ({timezone})
				</Subtitle>
			</div>
			<div className=" rounded-xl">
				<Callout
					className="mt-4 text-green-700 border-l-4 border-green-700 bg-green-700/10 rounded-xl"
					title="Agricultural Recommendation"
					icon={CheckCircleIcon}
				>
					All systems are currently within their default operating ranges.
				</Callout>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 m-2">
				<WeatherStat
					title="Maximum Temperature"
					metric={MaxTemp}
					color="yellow"
				/>
				<WeatherStat
					title="Minimum Temperature"
					metric={MinTemp}
					color="green"
				/>
				<div>
					<WeatherStat title="UV Index" metric={UVIndex} color="rose" />
					{Number(UVIndex) > 5 && (
						<Callout
							className="mt-4 text-rose-700 border-l-4 border-rose-700 bg-rose-700/10 rounded-xl"
							title="The UV is high todsy, be sure to wear SPF!"
							icon={ExclamationIcon}
						/>
					)}
				</div>
				<div className="flex space-x-3">
					<WeatherStat title="Wind Speed" metric={windspeed} color="blue" />
					<WeatherStat
						title="Wind Direction"
						metric={winddirection}
						color="slate"
					/>
				</div>
			</div>
		</div>
	);
};

export default Overview;
