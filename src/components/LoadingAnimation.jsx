import React, { Component } from "react";

class LoadingAnimation extends Component {
	render() {
		return <div className="flex justify-center items-center bg-gradient-to-br from-blue-700 to-purple-700 h-screen">
    <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
  </div>;
	}
}
export default LoadingAnimation;
