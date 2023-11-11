import React from "react";
import CityPicker from "../components/CityPicker";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { Card } from "@tremor/react";

function Sidebar({ name, latitude, longitude, WeatherData, onLocationSelect }) {
  const currentDate = new Date();
	const formattedDate = currentDate.toLocaleString('en-GB', {
    weekday: 'long',
    year: "numeric",
    month: "long",
    day: "numeric",
  });
	return (
		<div className="bg-slate-900 text-white p-10">
			<div className="pb-5">
				<h1 className="text-6xl font-bold">{decodeURI(name)}</h1>
				<p className="text-xs mt-2 text-gray-400">
					Lat/Long: {latitude}, {longitude}
				</p>
			</div>
      <Card className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg">
          <CityPicker onLocationSelect={onLocationSelect} />
        </Card>
			<hr className="my-10" />
			<div>
				<div>
					<p className="">{formattedDate}</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
