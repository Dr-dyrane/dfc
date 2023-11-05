import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Import the back arrow icon
import WeatherPictogram from "../widgets/Pictogram"; // Import the WeatherPictogram component
import { Card, Subtitle, Text } from "@tremor/react";
import Pill from "../widgets/Pill";
import { AuthContext } from "../hooks/AuthProvider";
import { RiUserLocationFill } from "react-icons/ri";

function Location() {
	const { name, latitude, longitude } = useParams();
	const [weatherData, setWeatherData] = useState(null);
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleString();
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	const fetchWeatherData = () => {
		const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weathercode,cloudcover,windspeed_10m,winddirection_10m,windgusts_10m&minutely_15=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,snowfall,weathercode,windspeed_10m,windspeed_80m,winddirection_10m,winddirection_80m,windgusts_10m,lightning_potential,direct_radiation,diffuse_radiation,direct_normal_irradiance,terrestrial_radiation,shortwave_radiation_instant,diffuse_radiation_instant,direct_normal_irradiance_instant,terrestrial_radiation_instant&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,visibility,windspeed_10m,windspeed_80m,windspeed_120m,winddirection_80m,winddirection_180m,windgusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,uv_index,uv_index_clear_sky,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=Europe%2FLondon`;

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
			navigate("/");
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
		<div className="min-h-screen overflow-y-auto flex-1 md:flex flex-col md:flex-row items-center justify-center">
			<div className="text-white p-10">
				<Card className="rounded-3xl bg-slate-900 max-w-3xl shadow-md md:w-[19.75rem] md:h-[19.75rem]">
					<div className="md:py-16 md:space-y-4">
						<Text className="font-semibold flex flex-row items-center justify-center text-4xl text-center">
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
			<div className="text-white px-10">
				<Card className="rounded-3xl bg-slate-900 max-w-3xl shadow-md">
					{weatherData ? (
						<div>
							<WeatherPictogram weatherData={weatherData} />
						</div>
					) : (
						<div className="w-10 h-10 m-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
					)}
				</Card>
			</div>
		</div>
	);
}

export default Location;
