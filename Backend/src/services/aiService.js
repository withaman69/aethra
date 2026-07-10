const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateAIResponse =
  async (prompt) => {
    try {
      const completion =
        await groq.chat.completions.create({
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],

          model:
            "llama-3.3-70b-versatile",

          temperature: 0.7,
        });

      return completion
        .choices[0]
        .message.content;
    } catch (error) {
      console.error(error);

      throw new Error(
        "AI generation failed"
      );
    }
  };

module.exports = {
  generateAIResponse,
};