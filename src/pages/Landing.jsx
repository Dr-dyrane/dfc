import React, { Component } from "react";
import dfc_logo from "/dfc.png"; // Import your logo file
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

class Landing extends Component {
	render() {
		return (
			<div className="bg-purple-600  font-bold h-screen flex flex-col justify-center items-center p-4">
				<img
					src={dfc_logo}
					alt="Dyrane's Farm Cast Logo"
					className="w-24 p-2 h-24 mb-4 rounded-lg bg-slate-800"
				/>
				<h1 className="text-4xl text-white mb-4">Dyrane's Farm Cast</h1>
				<div className="text-center mb-4">
					<p className="text-lg text-slate-200">
						Your Gateway to Weather Wisdom
					</p>
					<p className="text-lg text-slate-200">and Green Guidance</p>
				</div>
        <div className="h-1/3"></div>
				<Link to="/signup">
					<button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700">
						Get Started
					</button>
				</Link>
				<p className="text-white my-4">
					Already have an account?{" "}
					<Link to="/login" className="text-green-500">
						Log In
					</Link>
				</p>
			</div>
		);
	}
}

export default Landing;
