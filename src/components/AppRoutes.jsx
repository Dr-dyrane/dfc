import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Location from "../pages/Location";
import Signup from "../pages/Signup";

// AppRoutes component manages the routing for different pages
function AppRoutes(props) {
	const navigate = useNavigate();
	const { user, isLogged, weatherData, onLocationSelect } = props;

	return (
		<Routes>
			{/* Landing Page */}
			<Route
				path="/"
				element={
					<Landing user={user} isLogged={isLogged} navigate={navigate} />
				}
			/>

			{/* Home Page */}
			<Route
				path="/home"
				element={
					<Home navigate={navigate} onLocationSelect={onLocationSelect} />
				}
			/>

			{/* Login Page */}
			<Route path="/login" element={<Login navigate={navigate} />} />

			{/* Location Page with dynamic parameters */}
			<Route
				path="/location/:name/:latitude/:longitude"
				element={<Location weatherData={weatherData} />}
			/>

			{/* Signup Page */}
			<Route path="/signup" element={<Signup navigate={navigate} />} />
		</Routes>
	);
}

export default AppRoutes;
