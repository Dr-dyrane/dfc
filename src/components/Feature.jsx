import React from "react";

const Feature = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* Current Weather Feature */}
      <div className="text-center md:p-8 border border-purple-200/10 bg-gradient-to-br from-blue-200 to-purple-200 mb-6 md:mb-12 rounded-3xl sm:shadow-lg shadow-blue-500/50 overflow-hidden">
        <div className="max-h-80 md:max-h-full overflow-y-auto rounded-2xl">
          <img src="/current_weather.jpg" alt="Current Weather" />
        </div>
        <h2 className="text-xl font-bold mt-14">Current Weather</h2>
        <p className="text-gray-600">Get real-time weather updates.</p>
      </div>

      {/* Hourly Weather Feature */}
      <div className="text-center md:p-8 border border-purple-200/10 bg-gradient-to-br from-blue-200 to-purple-200 mb-6 md:mb-12 rounded-3xl sm:shadow-lg shadow-blue-500/50 overflow-hidden">
        <div className="max-h-80 md:max-h-full overflow-y-auto rounded-2xl">
          <img src="/hourly_weather.jpg" alt="Hourly Weather" />
        </div>
        <h2 className="text-xl font-bold mt-4">Hourly Weather</h2>
        <p className="text-gray-600">Detailed hourly weather forecasts.</p>
      </div>

      {/* 7-Day Forecast Feature */}
      <div className="text-center md:p-8 border border-purple-200/10 bg-gradient-to-br from-blue-200 to-purple-200 mb-6 md:mb-12 rounded-3xl sm:shadow-lg shadow-blue-500/50 overflow-hidden">
        <div className="max-h-80 md:max-h-full overflow-y-auto rounded-2xl">
          <img src="/7_day_forecast.jpg" alt="7-Day Forecast" />
        </div>
        <h2 className="text-xl font-bold mt-4">7-Day Forecast</h2>
        <p className="text-gray-600">Plan ahead with a week-long forecast.</p>
      </div>

      {/* Agricultural Recommendations Feature */}
      <div className="text-center md:p-8 border border-purple-200/10 bg-gradient-to-br from-blue-200 to-purple-200 mb-6 md:mb-12 rounded-3xl sm:shadow-lg shadow-blue-500/50 overflow-hidden">
        <div className="max-h-80 md:max-h-full overflow-y-auto rounded-2xl">
          <img src="/agricultural_recommendations.jpg" alt="Agricultural Recommendations" />
        </div>
        <h2 className="text-xl font-bold mt-4">Agricultural Recommendations</h2>
        <p className="text-gray-600">Receive personalized guidance for farming.</p>
      </div>
    </div>
  );
};

export default Feature;
