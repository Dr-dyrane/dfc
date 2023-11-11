import { openai } from "./openai";
import { cleanWeatherData } from "../utils/cleanData";

// Function to generate a summary using OpenAI GPT-3 with retry logic
export async function POST(weatherData, city, maxRetries = 3) {
  const cleanedData = cleanWeatherData(weatherData, city);

  for (let retry = 0; retry < maxRetries; retry++) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
          {
            role: "system",
            content: `Pretend you're a weather news presenter presenting LIVE on television. Be energetic and full of charisma. Introduce yourself as Dyrane and say you are LIVE from ALX Africa. State the city you are providing a summary for. Then give a summary of today's weather only. The summary should also include detailed and useful agricultural recommendations for farming. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if the UV is high, Plant a certain crop today, etc. use the uv_index data provided to provide UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user.`,
          },
          {
            role: "user",
            content: `Hi there, can I get a summary of today's weather, use the following information to get the weather data: ${JSON.stringify(
              cleanedData
            )}`,
          },
        ],
      });

      const { data } = response;
      return data.choices[0].content;
    } catch (error) {
      console.error(`Error generating summary (attempt ${retry + 1}):`, error);

      // Check if it's the last attempt
      if (retry === maxRetries - 1) {
        // If so, propagate the error for further handling
        throw error;
      }

      // If not, wait for a moment before retrying (adjust the delay as needed)
      await new Promise(resolve => setTimeout(resolve, 1000 * (retry + 1)));
    }
  }
}
