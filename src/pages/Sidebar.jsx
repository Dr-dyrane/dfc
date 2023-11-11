import React from "react";
import CityPicker from "../components/CityPicker";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { Card } from "@tremor/react";
import UserProfile from "../components/UserProfie";
import { translateWeatherCode } from "../utils/weatherCodeTranslator";
import { translateToIcon } from "../utils/WeatherCodeToIcon";
import Recommendation from "../widgets/Recommendation";

function Sidebar({ name, latitude, longitude, weatherData, onLocationSelect }) {
	if (!weatherData) {
		return null;
	}

	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleString("en-GB", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const currentTime = currentDate.toLocaleString("en-GB", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
	const temperature = weatherData.current.apparent_temperature.toFixed(1);
	const weatherCode = weatherData.current.weathercode;
	const weatherDescription = translateWeatherCode(weatherCode);
	const WeatherIcon = translateToIcon(weatherCode);
  const sunrise = new Date(weatherData.daily.sunrise[0]).toLocaleString("en-GB", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
  const sunset = new Date(weatherData.daily.sunset[0]).toLocaleString("en-GB", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
	return (
		<div className="bg-slate-900 text-white p-10">
			<div className="pb-5">
				<UserProfile />
				<h1 className="text-6xl font-bold">{decodeURI(name)}</h1>
				<p className="text-xs mt-2 text-gray-400">
					Lat/Long: {latitude}, {longitude}
				</p>
			</div>
			<Card className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg">
				<CityPicker onLocationSelect={onLocationSelect} />
			</Card>
			<hr className="my-10" />
			<div className="mt-5 flex items-center justify-between space-x-10 mb-5">
				<div>
					<p className="sm:text-xl">{formattedDate}</p>
					<p className="sm:text-xl font-extralight">{timezone}</p>
				</div>
				<p className="sm:text-xl font-bold uppercase">{currentTime}</p>
			</div>
			<hr className="mt-10 mb-5" />
			<div className="flex items-center justify-between">
				<div>
					<WeatherIcon size={36} />
					<div className="flex items-center justify-between space-x-10">
						<p className="text-6xl font-semibold">{temperature} °C</p>
						<p className="text-right font-extralight text-lg italic">
							{weatherDescription}
						</p>
					</div>
          <Recommendation weatherData={weatherData} />
				</div>
			</div>
			<div className="space-y-2 py-5">
				<div className="flex items-center space-x-2 px-4 py-3 border border-slate-500 rounded-xl bg-slate-500/30">
					<SunIcon className="h-10 w-10 text-yellow-400" />
					<div className="flex-1 flex justify-between items-center">
						<p className="font-extralight">Sunrise</p>
						<p className="uppercase text-xl">{sunrise}</p>
					</div>
				</div>
        <div className="flex items-center space-x-2 px-4 py-3 border border-slate-500 rounded-xl bg-slate-500/30">
					<MoonIcon className="h-10 w-10 text-gray-500" />
					<div className="flex-1 flex justify-between items-center">
						<p className="font-extralight">Sunset</p>
						<p className="uppercase text-xl">{sunset}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
