import React from "react";
import { Link } from "react-router-dom";
import dfc_logo from "/dfc.png";
import { Text } from "@tremor/react";

const Navbar = () => {
	return (
		<nav className="bg-slate-900">
			<div className="container px-2 mx-auto flex justify-between items-center w-screen font-bold">
				<Link to="/" className="flex text-white text-2xl p-2">
					<img
						src={dfc_logo}
						alt="Dyrane's Farm Cast Logo"
						className="w-10 p-2 h-10"
					/>{" "}
					<Text className="p-1">Dfc</Text>
				</Link>
				<ul className="flex space-x-4">
					<li>
						<Link to="/" className="text-white p-2">
							Home
						</Link>
					</li>
					<li>
						<Link to="/login" className="text-white p-2">
							Login
						</Link>
					</li>
					<li>
						<Link to="/signup" className="text-white p-2">
							Signup
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
