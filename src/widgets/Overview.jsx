import React from "react";
import { Subtitle, Text } from "@tremor/react";

const Overview = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const weatherDate = new Date(weatherData.current.time);
	const formattedDate = weatherDate.toLocaleString();
	const timezone = weatherData.timezone_abbreviation;

	return (
		<div className="p-5">
			<div className="pb-5 text-center">
				<Text className="text-xl font-black">Today's Overview</Text>
				<Subtitle className="text-sm text-gray-600">Last updated at: {formattedDate} ({timezone})</Subtitle>
			</div>
		</div>
	);
};

export default Overview;
