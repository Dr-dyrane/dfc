import React, { useContext } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import { MdMoreVert } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import the Link component

function UserProfile() {
	const context = useContext(AuthContext);

	const defaultUserImage =
		"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg";

	const handleLogoutClick = () => {
		const shouldLogout = window.confirm("Are you sure you want to log out?");
		if (shouldLogout) {
			context.handleLogout();
		}
		// Handle the click event to open the user profile modal or page
		// Example: You can set a state to control the modal visibility
		// this.setState({ isUserProfileModalOpen: true });
	};

	return (
		<AuthContext.Consumer>
			{(context) => (
				<div className="flex items-center mb-4 justify-center rounded-lg">
					{/* Left: User Profile Picture */}
					<div
						className="w-24 h-24 bg-slate-200 border hover:opacity-60 border-slate-500 rounded-full overflow-hidden cursor-pointer"
						onClick={handleLogoutClick}
					>
						<img
							src={
								context.user
									? context.user.photoURL || defaultUserImage
									: defaultUserImage
							}
							alt="User"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			)}
		</AuthContext.Consumer>
	);
}

export default UserProfile;
