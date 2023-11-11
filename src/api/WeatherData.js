// api/WeatherData.js

export async function fetchWeatherData(latitude, longitude) {
	const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,visibility,is_day,precipitation,rain,showers,snowfall,weathercode,cloudcover,windspeed_10m,winddirection_10m,windgusts_10m&minutely_15=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,snowfall,weathercode,windspeed_10m,windspeed_80m,winddirection_10m,winddirection_80m,windgusts_10m,lightning_potential,direct_radiation,diffuse_radiation,direct_normal_irradiance,terrestrial_radiation,shortwave_radiation_instant,diffuse_radiation_instant,direct_normal_irradiance_instant,terrestrial_radiation_instant&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,visibility,windspeed_10m,windspeed_80m,windspeed_120m,winddirection_80m,winddirection_180m,windgusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,uv_index,uv_index_clear_sky,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=Europe%2FLondon&forecast_days=7`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		//console.log(data);
		return data;
	} catch (error) {
		throw new Error("Error fetching weather data: " + error.message);
	}
}

export function startFetchingWeatherPeriodically(
	latitude,
	longitude,
	callback,
	intervalInMinutes
) {
	const fetchWeather = () => {
		fetchWeatherData(latitude, longitude)
			.then((data) => {
				callback(data);
			})
			.catch((error) => {
				console.error("Error fetching weather data:", error);
			});
	};

	// Initial fetch
	fetchWeather();

	// Set up an interval for periodic updates
	const intervalId = setInterval(fetchWeather, intervalInMinutes * 60 * 1000);

	return intervalId;
}
