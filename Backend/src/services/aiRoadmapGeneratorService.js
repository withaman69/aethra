const groq = require("./groqClient");

const generateRoadmap = async (
  careerGoal,
  currentSkills = []
) => {
  const prompt = `
You are Aethra AI Career Roadmap Generator.

Create a detailed roadmap.

Career Goal:
${careerGoal}

Current Skills:
${currentSkills.join(", ")}

Requirements:
1. Beginner friendly
2. Month wise roadmap
3. Skills to learn
4. Projects to build
5. Free resources
6. Certifications if needed
7. Final job readiness plan

Return in markdown format.
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
      temperature: 0.7,
    });

  return completion.choices[0]
    .message.content;
};

module.exports = {
  generateRoadmap,
};