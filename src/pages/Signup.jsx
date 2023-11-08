import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider"; // Import the AuthContext from your actual file path
import dfc_logo from "/dfc.png";

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
		this.navigate = this.props.navigate;
	}

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<AuthContext.Consumer>
				{(context) => (
					<div className="flex overflow-y-scroll p-4 flex-col items-center justify-center min-h-screen">
						{/* Text Logo */}
						<div className="flex space-x-2">
							<img
								src={dfc_logo}
								alt="Dyrane's Farm Cast Logo"
								className="w-10 p-1 h-10 mb-4 rounded-xl bg-slate-900"
							/>
							<h1 className="text-4xl font-bold text-black mb-4">Dfc</h1>
						</div>
						<div className="bg-gradient-to-br from-blue-200 to-purple-200 p-6 rounded-xl shadow-lg">
							<h2 className="text-3xl font-bold mb-4">Create an account</h2>
							<input
								type="text"
								placeholder="Email"
								value={email}
								onChange={this.handleEmailChange}
								className="w-full px-4 py-2.5 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-slate-500"
							/>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={this.handlePasswordChange}
								className="w-full px-4 py-2.5 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-slate-500"
							/>
							<button
								onClick={() => {
									context
										.handleSignup(email, password)
										.then(() => this.navigate("/"));
								}} // Use the handleSignup function from the context
								className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-xl hover:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-500"
							>
								Continue
							</button>
							{context.error && (
								<p className="text-red-500 mt-2">{context.error}</p>
							)}
							<p
								className={`mt-4 text-gray-500 text-sm font-semibold ${
									context.isRegistered ? "text-green-500" : ""
								}`}
							>
								{context.isRegistered
									? "Account registration successful, proceed to "
									: "Already have an account? "}
								<Link
									to={context.isRegistered || context.user ? "/" : "/login"}
									className="text-blue-400 hover:underline"
								>
									{context.isRegistered || context.user ? "Home" : "Login"}
								</Link>
							</p>
						</div>
					</div>
				)}
			</AuthContext.Consumer>
		);
	}
}

export default Signup;
