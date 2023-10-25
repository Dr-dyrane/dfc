import React, { Component } from "react";
import dfc_logo from "/dfc.png"; // Import your logo file
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { FcGoogle } from "react-icons/fc";

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
				<button
					onClick={() => context.handleGoogleLogin()}
					className="w-96 my-3 flex justify-center bg-slate-200 text-slate-700 font-bold py-3 rounded-2xl hover:bg-blue-700 hover:text-white focus:outline-none focus:ring focus:ring-blue-500"
				>
					<span className="mr-2">
						<FcGoogle size={24} />
					</span>
					Log in with Google
					{/* Include the FcGoogle icon */}
				</button>
				<Link to="/signup">
					<button className="border bg-purple-600 w-96 text-white py-3 rounded-2xl hover:bg-purple-500">
						Sign up for free
					</button>
				</Link>
				<p className="text-white my-4">
					Already have an account?{" "}
					<Link to="/login" className="">
						Log In
					</Link>
				</p>
			</div>
		);
	}
}

export default Landing;
