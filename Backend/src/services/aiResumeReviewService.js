const {
  generateAIResponse,
} = require("./aiService");

const reviewResume =
  async (resumeText) => {

    const prompt = `
You are an expert ATS Resume Reviewer.

Analyze this resume:

${resumeText}

Return:

1. Strengths
2. Weaknesses
3. ATS Score out of 100
4. Suggestions
5. Final Verdict

`;

    return await generateAIResponse(
      prompt
    );
};

module.exports = {
  reviewResume,
};