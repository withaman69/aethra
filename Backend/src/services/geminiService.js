const genAI = require("../config/gemini");

const askGemini = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result =
      await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error(
      "Gemini Service Error:",
      error
    );

    throw error;
  }
};

module.exports = {
  askGemini,
};