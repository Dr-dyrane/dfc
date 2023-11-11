// Function to clean up weather data and extract relevant information
export function cleanWeatherData(weatherData, city) {
    if (!weatherData || !weatherData.current || !weatherData.hourly) {
        return null;
    }

    // Extract relevant information from the weather data
    const {
        current,
        timezone,
        hourly,
        hourly_units,
        timezone_abbreviation,
    } = weatherData;

    // Extract specific properties from the current weather data
    const {
        temperature_2m: currentTemperature,
        windspeed_10m: currentWindSpeed,
        winddirection_10m: currentWindDirection,
        weathercode: currentWeatherCode,
        time: time,
    } = current || {};

    // Extract specific properties from the hourly data
    let cleanedHourlyData = [];

    // Check if hourly is an array before mapping
    if (Array.isArray(hourly)) {
        cleanedHourlyData = hourly.map((hour) => ({
            temperature: hour.temperature_2m,
            snowfall: hour.snowfall,
            rain: hour.rain,
            relativehumidity_2m: hour.relativehumidity_2m,
            precipitation_probability: hour.precipitation_probability,
            uv_index: hour.uv_index,
        }));
    }

    // Create a cleaned data object
    const cleanedData = {
        city,
        currentWeather: {
            temperature: currentTemperature,
            windspeed: currentWindSpeed,
            winddirection: currentWindDirection,
            weathercode: currentWeatherCode,
            time: time,
        },
        timezone,
        hourly: cleanedHourlyData,
        hourlyUnits: hourly_units,
        timezoneAbbreviation: timezone_abbreviation,
    };

    return cleanedData;
}
