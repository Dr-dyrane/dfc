import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, //Store this in your .env file
  dangerouslyAllowBrowser: true,
});

export { openai };
