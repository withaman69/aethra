const groq = require("./groqClient");

const evaluateInterviewAI = async (
  role,
  questions,
  answers
) => {
  try {
    const prompt = `
You are a Senior Technical Interviewer.

Role:
${role}

Questions:
${JSON.stringify(questions)}

Candidate Answers:
${JSON.stringify(answers)}

Evaluate the candidate.

Return ONLY valid JSON.

{
  "overallScore": 85,
  "strengths": [
    "Strong problem solving"
  ],
  "weaknesses": [
    "Needs better communication"
  ],
  "suggestions": [
    "Practice system design"
  ],
  "verdict": "Selected"
}
`;

    const completion =
      await groq.chat.completions.create({
        model:
          "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
      });

    const content =
      completion.choices[0]
        .message.content;

    console.log(
      "RAW AI RESPONSE:\n",
      content
    );

    const cleaned =
      content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error(
      "INTERVIEW AI ERROR:",
      error.message
    );

    if (error.response) {
      console.error(
        error.response.data
      );
    }

    return {
      overallScore: 50,
      strengths: [
        "Attempted all questions",
      ],
      weaknesses: [
        "AI evaluation failed",
      ],
      suggestions: [
        "Try again",
      ],
      verdict:
        "Needs Improvement",
    };
  }
};

module.exports = {
  evaluateInterviewAI,
};