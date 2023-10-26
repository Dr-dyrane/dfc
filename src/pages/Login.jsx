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
					<div className="flex flex-col items-center justify-center min-h-screen bg-slate-300 p-4">
						{/* Close button */}
						<Link to="/" className="p-4 absolute top-2 left-2 text-slate-700 font-bold">
							Close
						</Link>
						{/* Text Logo */}
						<div className="flex space-x-2">
							<img
								src={dfc_logo}
								alt="Dyrane's Farm Cast Logo"
								className="w-10 p-2 h-10 mb-4 rounded-lg bg-slate-900"
							/>
							<h1 className="text-4xl font-bold text-slate-900 mb-4">Dfc</h1>
						</div>
						<div className="bg-slate-200 p-6 rounded-lg shadow-lg">
							<h2 className="text-3xl font-bold mb-4">Sign in</h2>
							<input
								type="text"
								placeholder="Email"
								value={email}
								onChange={this.handleEmailChange}
								className="w-full px-4 py-2.5 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-slate-500"
							/>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={this.handlePasswordChange}
								className="w-full px-4 py-2.5 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-slate-500"
							/>
							<button
								onClick={() => context.handleLogin(email, password)} // Use the handleLogin function from the context
								className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-500"
							>
								Continue
							</button>
							{context.error && (
								<p className="text-red-500 mt-2">{context.error}</p>
							)}

							{/* "Login with Google" button */}
							<button
								onClick={() => context.handleGoogleLogin()}
								className="w-full mt-3 flex justify-center bg-slate-300 text-black font-semibold py-2.5 rounded-lg hover:bg-blue-700 hover:text-white focus:outline-none focus:ring focus:ring-blue-500"
							>
								<span className="mr-2">
									<FcGoogle size={24} />
								</span>
								Login with Google
								{/* Include the FcGoogle icon */}
							</button>

							{/* Link to Sign Up page with pre-filled data */}
							<p className="mt-4 text-gray-500 text-sm">
								New user?{" "}
								<Link
									to={{
										pathname: "/signup",
										state: { email, password }, // Pass the email and password as state
									}}
									className="text-blue-500 hover:underline"
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
