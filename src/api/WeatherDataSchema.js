const weatherDataSchema = {
	latitude: Number,
	longitude: Number,
	elevation: Number,
	generationtime_ms: Number,
	utc_offset_seconds: Number,
	timezone: String,
	timezone_abbreviation: String,
	current: {
		temperature_2m: Number, // °C (°F)
		relativehumidity_2m: Number, // %
		apparent_temperature: Number, // °C (°F)
		visibility: Number, // meters
		is_day: Boolean,
		precipitation: Number, // mm (inch)
		rain: Number, // mm (inch)
		showers: Number, // mm (inch)
		snowfall: Number, // cm (inch)
		weathercode: Number, // WMO code
		cloudcover: Number, // %
		windspeed_10m: Number, // km/h (mph, m/s, knots)
		winddirection_10m: Number, // °
		windgusts_10m: Number, // km/h (mph, m/s, knots)
	},
	minutely_15: {
		temperature_2m: [Number], // °C (°F)
		relativehumidity_2m: [Number], // %
		dewpoint_2m: [Number], // °C (°F)
		apparent_temperature: [Number], // °C (°F)
		snowfall: [Number], // cm (inch)
		weathercode: [Number], // WMO code
		windspeed_10m: [Number], // km/h (mph, m/s, knots)
		windspeed_80m: [Number], // km/h (mph, m/s, knots)
		winddirection_10m: [Number], // °
		winddirection_80m: [Number], // °
		windgusts_10m: [Number], // km/h (mph, m/s, knots)
		lightning_potential: [Number], // J/kg
		direct_radiation: [Number], // W/m²
		diffuse_radiation: [Number], // W/m²
		direct_normal_irradiance: [Number], // W/m²
		terrestrial_radiation: [Number], // W/m²
		shortwave_radiation_instant: [Number], // W/m²
		diffuse_radiation_instant: [Number], // W/m²
		direct_normal_irradiance_instant: [Number], // W/m²
		terrestrial_radiation_instant: [Number], // W/m²
	},
	hourly: {
		temperature_2m: [Number], // °C (°F)
		relativehumidity_2m: [Number], // %
		dewpoint_2m: [Number], // °C (°F)
		apparent_temperature: [Number], // °C (°F)
		precipitation_probability: [Number], // %
		precipitation: [Number], // mm (inch)
		rain: [Number], // mm (inch)
		showers: [Number], // mm (inch)
		snowfall: [Number], // cm (inch)
		snow_depth: [Number], // meters
		weathercode: [Number], // WMO code
		visibility: [Number], // meters
		windspeed_10m: [Number], // km/h (mph, m/s, knots)
		windspeed_80m: [Number], // km/h (mph, m/s, knots)
		windspeed_120m: [Number], // km/h (mph, m/s, knots)
		winddirection_80m: [Number], // °
		winddirection_180m: [Number], // °
		windgusts_10m: [Number], // km/h (mph, m/s, knots)
		temperature_80m: [Number], // °C (°F)
		temperature_120m: [Number], // °C (°F)
		temperature_180m: [Number], // °C (°F)
		soil_temperature_0cm: [Number], // °C (°F)
		soil_temperature_6cm: [Number], // °C (°F)
		soil_temperature_18cm: [Number], // °C (°F)
		soil_moisture_0_to_1cm: [Number], // m³/m³
		soil_moisture_1_to_3cm: [Number], // m³/m³
		soil_moisture_3_to_9cm: [Number], // m³/m³
		uv_index: [Number], // Index
		uv_index_clear_sky: [Number], // Index
		is_day: [Number], // Dimensionless (1 if the current time step has daylight, 0 at night)
	},
	daily: {
		time: [String], // ISO8601 timestamp
		weathercode: [Number], // WMO code
		temperature_2m_max: [Number], // °C (°F)
		temperature_2m_min: [Number], // °C (°F)
		apparent_temperature_max: [Number], // °C (°F)
		apparent_temperature_min: [Number], // °C (°F)
		sunrise: [String], // ISO8601 timestamp
		sunset: [String], // ISO8601 timestamp
		uv_index_max: [Number], // Index
		uv_index_clear_sky_max: [Number], // Index
		precipitation_sum: [Number], // mm (inch)
		rain_sum: [Number], // mm (inch)
		showers_sum: [Number], // mm (inch)
		snowfall_sum: [Number], // cm (inch)
		precipitation_hours: [Number], // hours
		precipitation_probability_max: [Number], // %
		windspeed_10m_max: [Number], // km/h (mph, m/s, knots)
		windgusts_10m_max: [Number], // km/h (mph, m/s, knots)
		winddirection_10m_dominant: [Number], // °
		shortwave_radiation_sum: [Number], // MJ/m²
		et0_fao_evapotranspiration: [Number], // mm (inch)
	},
};
