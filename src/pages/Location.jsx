import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import WeatherPictogram from "../widgets/Pictogram"; // Import the WeatherPictogram component
import { Card, Subtitle, Text, Title } from "@tremor/react";
import Pill from "../widgets/Pill";
import { AuthContext } from "../hooks/AuthProvider";
import { TiLocation } from "react-icons/ti";
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
				<div className="text-black m-4">
					<Card className="p-4 md:p-16 bd-dfc rounded-2xl max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
						<div className="md:py-16 md:space-y-4">
							<Text className="font-bold flex flex-row items-center justify-center text-3xl sm:text-4xl text-center">
								{name}
								<TiLocation className="text-3xl ml-2" />
							</Text>
							<Pill weatherData={weatherData} />
							<Subtitle className="text-xs mt-1 text-center font-bold">
								{formattedDate}
							</Subtitle>
						</div>
					</Card>
				</div>
				<div className="text-white m-4">
					<Card className="p-4 rounded-2xl bd-dfc max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
					<Title className="text-center mb-3 text-blue-500 text-lg font-bold">
							Current Weather
						</Title>
						{weatherData ? (
							<div>
								<WeatherPictogram weatherData={weatherData} />
							</div>
						) : (
							<div className="w-10 h-10 m-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
						)}
					</Card>
				</div>
				<div className="text-white m-4">
					<Card className="p-4 rounded-2xl bd-dfc max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
						<Title className="text-center text-blue-900 mb-3 text-lg font-bold">
							Hourly Forecaset
						</Title>
						{weatherData ? (
							<div>
								<HourlyForecast weatherData={weatherData} />
							</div>
						) : (
							<div className="w-10 h-10 m-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
						)}
					</Card>
				</div>
				<div className="text-white m-4">
					<Card className="p-4 rounded-2xl bg-dfc max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
						<Title className="text-center text-lg mb-3 font-bold text-blue-500">
							Next 6 Days Forecaset
						</Title>
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
