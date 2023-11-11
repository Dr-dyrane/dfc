import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext, AuthProvider } from "../hooks/AuthProvider";
import WeatherProvider from "../hooks/WeatherProvider";
import AppRoutes from "./AppRoutes"; // Import the AppRoutes component
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLocation: null,
		};
	}

	handleLocationSelect = (location) => {
		this.setState({ selectedLocation: location });
	};
	render() {
		const { selectedLocation } = this.state;
		return (
			<AuthContext.Consumer>
				{(context) => (
					<Router>
						<AuthProvider>
							<Navbar />
							<div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 to-purple-200 h-screen">
								<WeatherProvider
									latitude={selectedLocation?.latitude}
									longitude={selectedLocation?.longitude}
								>
									{(weatherData) => (
										<AppRoutes
											user={context.user}
											isLogged={context.isLogged}
											onLocationSelect={this.handleLocationSelect}
											weatherData={weatherData}
										/>
									)}
								</WeatherProvider>
							</div>
							<Footer />
						</AuthProvider>
					</Router>
				)}
			</AuthContext.Consumer>
		);
	}
}

export default App;
