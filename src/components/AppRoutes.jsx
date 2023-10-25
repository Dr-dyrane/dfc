import React, { Component } from "react";
import { Route, Routes, unstable_HistoryRouter } from "react-router-dom";
import Landing from "../pages/Landing";

class AppRoutes extends Component {
	render() {
		const { user, isLogged } = this.props;

		return (
			<Routes>
				<Route path="/" element={<Landing user={user} isLogged={isLogged} />} />
			</Routes>
		);
	}
}

export default AppRoutes;
