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
		<Text className="p-4 text-gray-600 italic rounded-2xl shadow-md text-center justify-center text-sm font-semibold">
			{recommendation}
		</Text>
	);
};

export default Recommendation;
