import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function AppRoutes(props) {
	const navigate = useNavigate();
	const { user, isLogged } = props;

	return (
		<Routes>
			{user || isLogged ? (
				<>
					<Route path="/" element={<Home />} />
				</>
			) : (
				<Route path="/" element={<Landing user={user} isLogged={isLogged} />} />
			)}
			<Route path="/login" element={<Login navigate={navigate} />} />
			<Route path="/signup" element={<Signup navigate={navigate} />} />
		</Routes>
	);
}

export default AppRoutes;
