import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Import the back arrow icon
import { FaMapMarkedAlt, FaGlobeAmericas } from "react-icons/fa"; // Import the back arrow icon
import WeatherPictogram from "../components/Pictogram"; // Import the WeatherPictogram component
import { Card, Subtitle, Text } from "@tremor/react";

function Location() {
	const { name, latitude, longitude } = useParams();
	const [weatherData, setWeatherData] = useState(null);
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleString();

	useEffect(() => {
		// Construct the API URL using the latitude and longitude parameters
		const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,precipitation,rain,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,uv_index,uv_index_clear_sky,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&timezone=Europe%2FLondon`;

		// Fetch the weather data when the component mounts
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				// Store the weather data in the state
				setWeatherData(data);
			})
			.catch((error) => {
				console.error("Error fetching weather data:", error);
			});
	}, [latitude, longitude]);

	return (
		<div className="text-cyan-200 p-4 min-h-screen flex flex-1 items-center justify-center">
			<Card className="rounded-3xl bg-gradient-to-br text-cyan-300 from-black to-blue-800 max-w-3xl shadow-md">
				<div className="">
					<Text className="font-semibold text-xl text-center">{name}</Text>
					<Subtitle className="text-sm text-center text-cyan-200">
						{formattedDate}
					</Subtitle>
				</div>

				{weatherData ? (
					<div>
						<WeatherPictogram weatherData={weatherData} />
					</div>
				) : (
					<div className="w-10 h-10 m-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
				)}

				<Link
					to="/"
					className="flex items-center mt-4 font-bold justify-center"
				>
					<FiArrowLeft className="mr-2 text-2xl p-1 bg-cyan-300 text-black rounded-full" />
					Back to Home
				</Link>
			</Card>
		</div>
	);
}

export default Location;
