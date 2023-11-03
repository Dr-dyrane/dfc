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
  
  export { translateWeatherCode };
  