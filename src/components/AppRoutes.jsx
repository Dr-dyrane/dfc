import React, { Component } from "react";
import { Route, Routes, unstable_HistoryRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

class AppRoutes extends Component {
	render() {
		const { user, isLogged } = this.props;

		return (
			<Routes>
				{user || isLogged ? (
					<>
						<Route path="/" element={<Home />} />
					</>
				) : (
					<Route
						path="/"
						element={<Landing user={user} isLogged={isLogged} />}
					/>
				)}
				<Route path="/login" element={<Login onLogin={this.handleLogin} />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		);
	}
}

export default AppRoutes;
