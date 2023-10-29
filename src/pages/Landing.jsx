import React, { Component } from "react";
import dfc_logo from "/dfc.png"; // Import your logo file
import dfc_feat from "/dfc_feat.png"; // Import your logo file
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../hooks/AuthProvider";

class Landing extends Component {
	render() {
		return (
			<AuthContext.Consumer>
				{(context) => (
					<div className="bg-gradient-to-br from-blue-700 to-purple-700 bg-cover font-bold h-screen flex flex-col justify-center items-center p-8">
						<img
							src={dfc_logo}
							alt="Dyrane's Farm Cast Logo"
							className="w-20 p-2 h-20 mb-4 rounded-lg bg-slate-900"
						/>
						<h1 className="text-3xl text-white mb-4">Dyrane's Farm Cast</h1>
						<div className="text-center mb-4 text-sm text-slate-100">
							<p className="">Your Gateway to Weather Wisdom</p>
							<p className="">and Green Guidance</p>
						</div>
						<div className="h-1/2">
						<img
							src={dfc_feat}
							alt="Dfc features"
							className="w-80 p-2 h-80 my-4 rounded-3xl bg-gradient-to-b from-black to-blue-900"
						/>
						</div>
						<button
							onClick={() => context.handleGoogleLogin()}
							className="w-96 my-3 flex justify-center bg-slate-200 text-slate-700 font-bold py-3 rounded-2xl hover:bg-green-600 hover:text-white focus:outline-none focus:ring focus:ring-green-600"
						>
							<span className="mr-2">
								<FcGoogle size={24} />
							</span>
							Log in with Google
							{/* Include the FcGoogle icon */}
						</button>
						<Link to="/signup">
							<button className="border w-96 text-white py-3 rounded-2xl hover:bg-slate-200 hover:text-slate-600">
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
				)}
			</AuthContext.Consumer>
		);
	}
}

export default Landing;
