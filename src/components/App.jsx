import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import AppRoutes from "./AppRoutes"; // Import the AppRoutes component

class App extends Component {
	render() {
		return (
			<AuthContext.Consumer>
				{(context) => (
					<Router>
						<div className="min-h-screen flex flex-col">
            <AppRoutes user={context.user} isLogged={context.isLogged} />
						</div>
					</Router>
				)}
			</AuthContext.Consumer>
		);
	}
}

export default App;
