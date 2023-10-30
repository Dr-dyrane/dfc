import React, { Component } from "react";
import dfc_logo from "/dfc.png"; // Import your logo file
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../hooks/AuthProvider";
import { BsCloudSun } from "react-icons/bs";
import { GiFarmer } from "react-icons/gi";

class Landing extends Component {
	render() {
		return (
			<AuthContext.Consumer>
				{(context) => (
					<div className="bg-gradient-to-br overflow-hidde from-blue-700 to-purple-700 bg-cover font-bold h-screen flex flex-col lg:flex-row lg:space-x-10 justify-center items-center p-8">
						<div className="flex flex-col">
							<div className="flex flex-row items-center space-x-4">
								<img
									src={dfc_logo}
									alt="Dyrane's Farm Cast Logo"
									className="w-24 p-2 h-24 mb-4 rounded-lg bg-slate-900 shadow-lg shadow-blue-500/50"
								/>
								<div className="">
									<h1 className="text-4xl text-white mb-4">Dyrane's Farm</h1>
									<h1 className="text-4xl text-white mb-4">Cast</h1>
								</div>
							</div>

							<div className="text-start my-4 text-2xl text-slate-100">
								<p className="text-cyan-300">Your Gateway to Weather Wisdom</p>
								<p className="text-green-300">& Green Guidance</p>
							</div>
						</div>
						<div className="text-clip overflow-hidden text-lg max-w-md upper p-8 text-start h-1/3 my-5 text-white border border-purple-700/10 bg-gradient-to-br from-purple-600 to-blue-600 mb-24 rounded-3xl shadow-lg shadow-blue-500/50 ">
							<p className="flex flex-row">	<span className="mr-2">
									<BsCloudSun size={24} color="cyan"/>
								</span> designed to provide essential weather information</p>
							<p className="flex flex-row mt-4">	<span className="mr-2">
									<GiFarmer size={24} color="cyan"/>
								</span>
							 tailored agricultural recommendations to empower farmers and
								agriculture enthusiasts in making informed decisions
							</p>
						</div>

						<div>
							<button
								onClick={() => context.handleGoogleLogin()}
								className="w-96 my-3 flex justify-center bg-slate-200 text-slate-700 font-bold py-3 rounded-2xl hover:bg-green-600 hover:text-white focus:outline-none focus:ring focus:ring-green-600 shadow-lg shadow-blue-500/50"
							>
								<span className="mr-2">
									<FcGoogle size={24} />
								</span>
								Log in with Google
								{/* Include the FcGoogle icon */}
							</button>
							<Link to="/signup">
								<button className="border w-96 text-white py-3 rounded-2xl hover:bg-slate-200 hover:text-slate-600 shadow-lg shadow-blue-500/50">
									Sign up for free
								</button>
							</Link>
							<p className="text-white text-center my-4">
								Already have an account?{" "}
								<Link to="/login" className="text-cyan-300">
									Log In
								</Link>
							</p>
						</div>

					</div>
				)}
			</AuthContext.Consumer>
		);
	}
}

export default Landing;
