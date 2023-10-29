import React, { Component } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import your Firebase auth instance
import UserProfile from "../components/UserProfie";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

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
				//console.log(user);
			}
		});
	}

	render() {
		const { dfc } = this.state;

		return (
			<div className="flex flex-col items-center justify-center font-semibold p-10 min-h-screen bg-gradient-to-br from-slate-200 to-slate-100">
				<div>
					<UserProfile />
				</div>
				<Card className="rounded-3xl bg-gradient-to-br text-slate-100 from-black to-slate-700 max-w-3xl">
					<Text className="text-6xl font-bold text-center mb-10">
						Dyrane's Farm Cast
					</Text>
					<Subtitle className="text-xl text-center">
						Powered by OpenAI, Next.js, Tailwind CSS, Tremor
					</Subtitle>
					<Divider className="my-10"></Divider>
					<Card className="bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl">
					</Card>
				</Card>
			</div>
		);
	}
}

export default Home;
