import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Import the back arrow icon
import WeatherPictogram from "../components/WeatherPictogram"; // Import the WeatherPictogram component

function Location() {
	const { name, latitude, longitude } = useParams();
	const [weatherData, setWeatherData] = useState(null);

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
		<div className="text-slate-200 p-4 min-h-screen">
			<h1 className="text-2xl font-semibold mb-4">Location Details</h1>
			<div className="p-6 rounded shadow-md">
				<p className="text-lg">
					City: <span className="font-semibold">{name}</span>
				</p>
				<p className="text-lg">
					Latitude: <span className="font-semibold">{latitude}</span>
				</p>
				<p className="text-lg">
					Longitude: <span className="font-semibold">{longitude}</span>
				</p>

				{weatherData ? (
					<div>
						<WeatherPictogram weatherData={weatherData} />
					</div>
				) : (
					<p className="text-lg mt-4">Loading weather data...</p>
				)}

				<Link to="/" className="flex items-center mt-4">
					<FiArrowLeft className="mr-2" />
					Back to Home
				</Link>
			</div>
		</div>
	);
}

export default Location;
