// weatherCodeTranslator.js

const weatherCodeMap = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle (Light)',
    53: 'Drizzle (Moderate)',
    55: 'Drizzle (Heavy)',
    56: 'Freezing Drizzle (Light)',
    57: 'Freezing Drizzle (Heavy)',
    61: 'Rain (Slight)',
    63: 'Rain (Moderate)',
    65: 'Rain (Heavy)',
    66: 'Freezing Rain (Light)',
    67: 'Freezing Rain (Heavy)',
    71: 'Snow fall (Slight)',
    73: 'Snow fall (Moderate)',
    75: 'Snow fall (Heavy)',
    77: 'Snow grains',
    80: 'Rain showers (Slight)',
    81: 'Rain showers (Moderate)',
    82: 'Rain showers (Violent)',
    85: 'Snow showers (Slight)',
    86: 'Snow showers (Heavy)',
    95: 'Thunderstorm (Slight)',
    96: 'Thunderstorm with hail (Slight)',
    99: 'Thunderstorm with hail (Heavy)'
  };
  
  function translateWeatherCode(code) {
    if (weatherCodeMap.hasOwnProperty(code)) {
      return weatherCodeMap[code];
    }
    return 'Unknown';
  }
  
  function translateRecommendation(code) {
    // Define agricultural recommendations based on weather codes.
    const recommendationMap = {
      0: 'Perfect weather for outdoor activities.',
      1: 'Great conditions for farming tasks.',
      2: 'Suitable for most outdoor work.',
      3: 'Indoor tasks might be preferable.',
      45: 'Be cautious while driving in foggy conditions.',
      48: 'Be cautious while driving in depositing rime fog.',
      51: 'Light drizzle: Continue your tasks with care.',
      53: 'Moderate drizzle: Some tasks may be affected.',
      55: 'Heavy drizzle: Consider postponing outdoor work.',
      56: 'Light freezing drizzle: Be cautious on icy roads.',
      57: 'Heavy freezing drizzle: Avoid travel if possible.',
      61: 'Light rain: Plan indoor activities.',
      63: 'Moderate rain: Outdoor tasks may be impacted.',
      65: 'Heavy rain: Avoid outdoor work.',
      66: 'Light freezing rain: Stay indoors for safety.',
      67: 'Heavy freezing rain: Travel may be dangerous.',
      71: 'Slight snowfall: Be cautious on the roads.',
      73: 'Moderate snowfall: Travel may be affected.',
      75: 'Heavy snowfall: Stay safe and indoors.',
      77: 'Snow grains: Take precautions if going outside.',
      80: 'Light rain showers: Some tasks may continue.',
      81: 'Moderate rain showers: Plan indoor activities.',
      82: 'Violent rain showers: Stay indoors and be safe.',
      85: 'Light snow showers: Use caution on the roads.',
      86: 'Heavy snow showers: Avoid travel if possible.',
      95: 'Slight thunderstorm: Seek shelter indoors.',
      96: 'Slight thunderstorm with hail: Stay safe indoors.',
      99: 'Heavy thunderstorm with hail: Avoid outdoor activities.',
    };
  
    if (recommendationMap.hasOwnProperty(code)) {
      return recommendationMap[code];
    }
  
    return 'No specific recommendation for this weather code.';
  }
  
  export { translateWeatherCode, translateRecommendation };
  