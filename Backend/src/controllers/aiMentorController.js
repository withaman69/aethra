const {
  askGemini,
} = require(
  "../services/geminiService"
);

const askMentor = async (
  req,
  res
) => {
  try {
    const { message } =
      req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message:
          "Message is required",
      });
    }

    const prompt = `
You are Aethra AI Career Mentor.

Your role:
- Help students, freshers, and experienced professionals.
- Give career guidance.
- Suggest learning roadmaps.
- Recommend projects.
- Suggest skills to learn.
- Provide interview preparation tips.
- Keep answers practical and structured.

User Question:
${message}
`;

    const response =
      await askGemini(
        prompt
      );

    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.error(
      "AI Mentor Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Server Error",
      stack:
        process.env
          .NODE_ENV ===
        "development"
          ? error.stack
          : undefined,
    });
  }
};

module.exports = {
  askMentor,
};