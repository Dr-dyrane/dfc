import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, Subtitle, Text, Title } from "@tremor/react";
import { AuthContext } from "../hooks/AuthProvider";
import Forecast from "../widgets/Forecast";
import HourlyForecast from "../widgets/HourlyForecast";
import Current from "../widgets/Current";
import Overview from "../widgets/Overview";
import Charts from "../widgets/Charts";
import Sidebar from "./Sidebar";

export const revalidate = 60;

function Location({ weatherData, onLocationSelect }) {
	const { name, latitude, longitude } = useParams();
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!context.user) {
			navigate("/login");
		}
	}, [context.user]);

	return (
		<div className="flex flex-col min-h-screen md:flex-row">
			<Sidebar
				name={name}
				latitude={latitude}
				longitude={longitude}
				weatherData={weatherData}
				onLocationSelect={onLocationSelect}
			/>
			<div className="min-h-screen overflow-y-scroll xl:overflow-x-scroll flex-1 sm:flex flex-col items-center justify-center">
				<Overview weatherData={weatherData} city={name}/>
				<hr className="mb-5" />
				<Charts weatherData={weatherData} />
				<div className="grid grid-cols-1  xl:grid-cols-3 xl:gap-4">
					<div className="text-white m-4">
						<Card className="p-4 rounded-2xl bd-dfc max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
							<Title className="text-center mb-3 text-blue-500 text-lg font-bold">
								Current Weather
							</Title>
							{weatherData ? (
								<div>
									<Current weatherData={weatherData} />
								</div>
							) : (
								<div className="w-10 h-10 m-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
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
								<div className="w-10 h-10 m-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
							)}
						</Card>
					</div>
					<div className="text-white m-4">
						<Card className="p-4 bd-dfc rounded-2xl max-w-3xl shadow-md md:w-[25rem] md:h-[25rem]">
							<Title className="text-center text-lg mb-3 font-bold text-blue-500">
								Next 6 Days Forecaset
							</Title>
							{weatherData ? (
								<div>
									<Forecast weatherData={weatherData} />
								</div>
							) : (
								<div className="w-10 h-10 m-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
							)}
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Location;
