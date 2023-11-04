import React from "react";
import { Link } from "react-router-dom";
import dfc_logo from "/dfc.png";
import { Text } from "@tremor/react";
import { AuthContext } from "../hooks/AuthProvider";

const Navbar = (props) => {
	return (
		<AuthContext.Consumer>
			{(context) => (
				<nav className="bg-slate-900">
					<div className="container px-2 mx-auto flex justify-between items-center w-screen font-bold">
						<Link to="/" className="flex text-white text-2xl p-2">
							<img
								src={dfc_logo}
								alt="Dyrane's Farm Cast Logo"
								className="w-10 p-2 h-10"
							/>{" "}
							<Text className="p-1">Dfc</Text>
						</Link>
						<ul className="flex space-x-4">
							<li>
								<Link to="/" className="text-white p-2">
									Home
								</Link>
							</li>
							<li>
								{!context.user ? (
									<Link to="/login" className="text-white p-2">
										Login
									</Link>
								) : (
									<button
										className="text-white"
										onClick={() => {
											const shouldLogout = window.confirm(
												"Are you sure you want to log out?"
											);
											if (shouldLogout) {
												context.handleLogout();
											}
											// Handle the click event to open the user profile modal or page
											// Example: You can set a state to control the modal visibility
											// this.setState({ isUserProfileModalOpen: true });
										}}
									>
										Logout
									</button>
								)}
							</li>
							<li>
								<Link to="/signup" className="text-white p-2">
									Sign up
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</AuthContext.Consumer>
	);
};

export default Navbar;
