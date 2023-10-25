import React, { Component } from 'react';
import dfc_logo from '/dfc.png'; // Import your logo file
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

class Landing extends Component {
  render() {
    return (
      <div className="bg-purple-600  font-bold h-screen flex flex-col justify-center items-center p-4">
        <img src={dfc_logo} alt="Dyrane's Farm Cast Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-4xl text-white mb-4">Welcome to Dyrane's Farm Cast</h1>
        <p className="text-lg text-slate-200 mb-8">Your source for weather information and agricultural recommendations</p>
        <Link to="/signup">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700">Get Started</button>
        </Link>
        <p className="mt-4 text-white">Already have an account? <Link to="/login" className="text-green-500">Log In</Link></p>
      </div>
    );
  }
}

export default Landing;
