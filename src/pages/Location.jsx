import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; // Import the back arrow icon

function Location() {
  const { latitude, longitude } = useParams();

  return (
    <div className="text-slate-200 p-4 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Location Details</h1>
      <div className="p-6 rounded shadow-md">
        <p className="text-lg">
          Latitude: <span className="font-semibold">{latitude}</span>
        </p>
        <p className="text-lg">
          Longitude: <span className="font-semibold">{longitude}</span>
        </p>
        <Link to="/" className="flex items-center mt-4">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Location;
