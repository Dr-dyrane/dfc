import React from "react";
import { Card, Text } from "@tremor/react"; // Import Card and Text components from Tremor
import { translateRecommendation } from "../utils/weatherCodeTranslator";

const Recommendation = ({ weatherData }) => {
	if (!weatherData) {
		return null;
	}

	const weatherCode = weatherData.current.weathercode;
	const recommendation = translateRecommendation(weatherCode);
	return (
		<Text className="py-4 px-1 sm:px-2 text-gray-400 rounded-2xl shadow-md text-start text-md font-semibold">
			{recommendation}
		</Text>
	);
};

export default Recommendation;
