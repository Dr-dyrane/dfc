import React from "react";
import CityPicker from "../components/CityPicker";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { Card } from "@tremor/react";
import UserProfile from "../components/UserProfie";

function Sidebar({ name, latitude, longitude, WeatherData, onLocationSelect }) {
  const currentDate = new Date();
	const formattedDate = currentDate.toLocaleString('en-GB', {
    weekday: 'long',
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentTime = currentDate.toLocaleString('en-GB', {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
	return (
		<div className="bg-slate-900 text-white p-10">
			<div className="pb-5">
        <UserProfile/>
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
					<p className="xl:text-xl">{formattedDate}</p>
					<p className="xl:text-xl font-extralight">{timezone}</p>
				</div>
        <p className="xl:text-xl font-bold uppercase">{currentTime}</p>
			</div>
		</div>
	);
}

export default Sidebar;
