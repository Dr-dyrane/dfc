import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Import the back arrow icon
import WeatherPictogram from "../components/Pictogram"; // Import the WeatherPictogram component
import { Card, Subtitle, Text } from "@tremor/react";
import Pill from "../components/Pill";
import { AuthContext } from "../hooks/AuthProvider";

function Location() {
	const { name, latitude, longitude } = useParams();
	const [weatherData, setWeatherData] = useState(null);
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleString();
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	const fetchWeatherData = () => {
		const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,precipitation,rain,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,uv_index,uv_index_clear_sky,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&timezone=Europe%2FLondon`;

		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				setWeatherData(data);
			})
			.catch((error) => {
				console.error("Error fetching weather data:", error);
			});
	};

	// Fetch the initial weather data when the component mounts
	useEffect(() => {
		if (!context.user) {
			navigate('/');
		}
		fetchWeatherData();
	}, [latitude, longitude]);

	// Fetch updated weather data every 30 minutes (you can adjust the interval)
	useEffect(() => {
		const intervalId = setInterval(fetchWeatherData, 1 * 60 * 1000);

		return () => {
			// Clean up the interval when the component unmounts
			clearInterval(intervalId);
		};
	}, [latitude, longitude]);

	return (
		<div className="text-white p-10 min-h-screen flex flex-1 items-center justify-center">
			<Card className="rounded-3xl bg-slate-900 max-w-3xl shadow-md">
				<div className="">
					<Text className="font-semibold text-4xl text-center">{name}</Text>
					<Pill weatherData={weatherData} />
					<Subtitle className="text-xs mt-1 text-center">
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
			</Card>
		</div>
	);
}

export default Location;
