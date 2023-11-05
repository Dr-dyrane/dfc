import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import WeatherPictogram from "../widgets/Pictogram"; // Import the WeatherPictogram component
import { Card, Subtitle, Text } from "@tremor/react";
import Pill from "../widgets/Pill";
import { AuthContext } from "../hooks/AuthProvider";
import { RiUserLocationFill } from "react-icons/ri";
import {
	fetchWeatherData,
	startFetchingWeatherPeriodically,
} from "../api/WeatherData";
import Forecast from "../widgets/Forecast";
import HourlyForecast from "../widgets/HourlyForecast";

function Location() {
	const { name, latitude, longitude } = useParams();
	const [weatherData, setWeatherData] = useState(null);
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleString();
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	// Fetch the initial weather data when the component mounts
	useEffect(() => {
		if (!context.user) {
			navigate("/");
		}

		// Fetch weather data from the API
		fetchWeatherData(latitude, longitude)
			.then((data) => {
				setWeatherData(data);
			})
			.catch((error) => {
				console.error("Error fetching weather data:", error);
			});

		// Start fetching weather data periodically
		const intervalId = startFetchingWeatherPeriodically(
			latitude,
			longitude,
			(data) => {
				setWeatherData(data);
			},
			1
		); // Set the interval time in minutes

		return () => {
			// Clean up the interval when the component unmounts
			clearInterval(intervalId);
		};
	}, [context.user, latitude, longitude]);

	return (
		<div className="min-h-screen overflow-y-auto flex-1 sm:flex flex-col items-center justify-center">
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
				<div className="text-white p-10">
					<Card className="md:p-16 rounded-3xl bg-slate-900 max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
						<div className="md:py-16 md:space-y-4">
							<Text className="font-semibold flex flex-row items-center justify-center text-3xl sm:text-4xl text-center">
								{name}
								<RiUserLocationFill />
							</Text>
							<Pill weatherData={weatherData} />
							<Subtitle className="text-xs mt-1 text-center">
								{formattedDate}
							</Subtitle>
						</div>
					</Card>
				</div>
				<div className="text-white p-10">
					<Card className="md:p-16 rounded-3xl bg-slate-900 max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
						{weatherData ? (
							<div>
								<WeatherPictogram weatherData={weatherData} />
							</div>
						) : (
							<div className="w-10 h-10 m-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
						)}
					</Card>
				</div>
				<div className="text-white p-10">
					<Card className="rounded-3xl bg-slate-900 max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
						{weatherData ? (
							<div>
								<HourlyForecast weatherData={weatherData} />
							</div>
						) : (
							<div className="w-10 h-10 m-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
						)}
					</Card>
				</div>
				<div className="text-white p-10">
					<Card className="rounded-3xl bg-slate-900 max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
						{weatherData ? (
							<div>
								<Forecast weatherData={weatherData} />
							</div>
						) : (
							<div className="w-10 h-10 m-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
						)}
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Location;
