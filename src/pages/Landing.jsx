import React, { Component } from "react";
import dfc_logo from "/dfc.png"; // Import your logo file
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../hooks/AuthProvider";
import Feature from "../components/Feature";

class Landing extends Component {
	render() {
		return (
			<AuthContext.Consumer>
				{(context) => (
					<div className="bg-gradient-to-br from-blue-200 to-purple-200 bg-cover font-bold h-screen flex flex-col justify-center items-center p-8">
						<div className="flex flex-col">
							<div className="items-center justify-center">
								<div className="">
									<h1 className="font-extrabold text-start md:text-center text-5xl md:text-7xl lg:text-8xl text-black mb-4">
										Dyrane's Farm Cast
									</h1>
								</div>
							</div>

							<div className="text-start font-extrabold sm:text-center my-4 text-xl md:text-3xl lg:text-4xl text-slate-900">
								<p className="">Your Gateway to Weather Wisdom</p>
								<p className="">& Green Guidance</p>
							</div>
						</div>
						<div className="overflow-y-scroll">
							<Feature />
						</div>

						<div className="sm:pt-4 md:flex md:space-x-8 justify-items-center">
							<button
								onClick={() => context.handleGoogleLogin()}
								className="border border-slate-700 w-80 sm:w-96 md:w-52 my-3 md:my-auto flex justify-center bg-none text-slate-700 font-bold py-3 rounded-2xl md:rounded-3xl hover:border-blue-700 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-600 shadow-lg shadow-slate-500/50"
							>
								<span className="mr-2">
									<FcGoogle size={24} />
								</span>
								Log in with Google
								{/* Include the FcGoogle icon */}
							</button>
							<Link to="/signup">
								<button className="bg-slate-900 w-80 sm:w-96 md:w-52 md:my-auto text-white py-3 rounded-2xl md:rounded-3xl hover:bg-slate-200 hover:text-slate-700 shadow-sm shadow-slate-500/50">
									Sign up for free
								</button>
							</Link>
							<p className="text-black text-center mt-4 md:my-auto md:w-58">
								Already have an account?{" "}
								<Link to="/login" className="text-blue-700">
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
