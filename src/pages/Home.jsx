import React, { Component } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import your Firebase auth instance
import UserProfile from "../components/UserProfie";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			dfc: [],
		};
	}

	componentDidMount() {
		// Add an authentication listener to ensure Firebase is initialized
		this.auth = getAuth();
		onAuthStateChanged(this.auth, (user) => {
			if (user) {
				// User is authenticated, fetch doits from Firestore
				console.log(user);
			}
		});
	}

	render() {
		const { dfc } = this.state;

		return (
			<div className="flex flex-col items-center justify-center font-semibold p-4 h-screen bg-slate-200">
				<div>
					<UserProfile />
				</div>
				<div>
					<p className="text-slate-800">Welcome to Dyrane's farm cast</p>
				</div>
			</div>
		);
	}
}

export default Home;