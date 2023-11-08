import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider"; // Import the AuthContext from your actual file path
import { FcGoogle } from "react-icons/fc";
import dfc_logo from "/dfc.png";

class Login extends Component {
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
					<div className="overflow-y-scroll flex flex-col items-center justify-center min-h-screen p-4">
						<div className="flex space-x-2">
							<img
								src={dfc_logo}
								alt="Dyrane's Farm Cast Logo"
								className="w-10 p-1 h-10 mb-4 rounded-xl bg-slate-900"
							/>
							<h1 className="text-4xl font-bold text-black mb-4">Dfc</h1>
						</div>
						<div className="bg-gradient-to-br from-blue-200 to-purple-200 p-6 rounded-xl shadow-lg">
							<h2 className="text-3xl font-bold mb-4">Sign in</h2>
							<input
								type="text"
								placeholder="Email"
								value={email}
								onChange={this.handleEmailChange}
								className="w-full px-4 py-2.5 mb-4 border rounded-xl focus:outline-none focus:ring focus:ring-slate-500"
							/>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={this.handlePasswordChange}
								className="w-full px-4 py-2.5 mb-4 border rounded-xl focus:outline-none focus:ring focus:ring-slate-500"
							/>
							<button
								onClick={() => {
									context
										.handleLogin(email, password)
										.then(() => this.navigate("/"));
								}} // Use the handleLogin function from the context
								className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-xl hover:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-500"
							>
								Continue
							</button>
							{context.error && (
								<p className="text-red-500 mt-2">{context.error}</p>
							)}

							{/* "Login with Google" button */}
							<button
								onClick={() => {
									context
										.handleGoogleLogin(email, password)
										.then(() => this.navigate("/"));
								}}
								className="w-full border border-slate-700 mt-3 flex justify-center bg-none text-black font-semibold py-2.5 rounded-xl hover:bg-blue-700 hover:text-white focus:outline-none focus:ring focus:ring-blue-500"
							>
								<span className="mr-2">
									<FcGoogle size={24} />
								</span>
								Login with Google
								{/* Include the FcGoogle icon */}
							</button>

							{/* Link to Sign Up page with pre-filled data */}
							<p className="mt-4 text-gray-500 text-sm font-semibold">
								New user?{" "}
								<Link
									to={{
										pathname: "/signup",
										state: { email, password }, // Pass the email and password as state
									}}
									className="text-blue-400 hover:underline"
								>
									Create an account
								</Link>
							</p>
						</div>
					</div>
				)}
			</AuthContext.Consumer>
		);
	}
}

export default Login;
