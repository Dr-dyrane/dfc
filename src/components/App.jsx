import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import AppRoutes from "./AppRoutes"; // Import the AppRoutes component
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

class App extends Component {
	render() {
		return (
			<AuthContext.Consumer>
				{(context) => (
					<Router>
						<Navbar />
						<div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 to-purple-200 h-screen">
							<AppRoutes user={context.user} isLogged={context.isLogged} />
						</div>
						<Footer />
					</Router>
				)}
			</AuthContext.Consumer>
		);
	}
}

export default App;
