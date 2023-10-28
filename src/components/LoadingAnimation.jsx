import React, { Component } from "react";

class LoadingAnimation extends Component {
	render() {
		return <div className="flex justify-center items-center bg-modal h-screen">
    <div className="w-16 h-16 border-t-4 border-slate-700 border-solid rounded-full animate-spin"></div>
  </div>;
	}
}
export default LoadingAnimation;
