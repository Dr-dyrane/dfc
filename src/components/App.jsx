import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes"; // Import the AppRoutes component

class App extends Component {
  render() {
    return (
          <Router>
            <div className="min-h-screen flex flex-col">
            <AppRoutes />
            </div>
          </Router>
    );
  }
}

export default App;

