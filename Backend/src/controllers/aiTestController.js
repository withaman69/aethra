const {
  generateAIResponse,
} = require(
  "../services/aiService"
);

const testAI =
  async (req, res) => {
    try {
      const response =
        await generateAIResponse(
          "Say hello from Aethra AI"
        );

      res.status(200).json({
        success: true,
        response,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "AI Error",
      });
    }
  };

module.exports = {
  testAI,
};