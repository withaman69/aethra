const groq = require("./groqClient");

const askMentorAI = async (
  profileData,
  message
) => {
  try {
    const prompt = `
You are Aethra AI Mentor.

Candidate Profile:

USER:
${JSON.stringify(profileData.user, null, 2)}

EDUCATION:
${JSON.stringify(profileData.educations, null, 2)}

EXPERIENCE:
${JSON.stringify(profileData.experiences, null, 2)}

PROJECTS:
${JSON.stringify(profileData.projects, null, 2)}

SKILLS:
${JSON.stringify(profileData.skills, null, 2)}

CERTIFICATIONS:
${JSON.stringify(profileData.certifications, null, 2)}

Candidate is building a software platform called Aethra.

Aethra includes:
- AI Career Analysis
- AI Mentor
- Resume Review
- Skill Gap Analysis
- Roadmaps
- Mock Interviews

Provide personalized advice.

User Question:
${message}

Rules:
- Be practical.
- Give step-by-step guidance.
- Suggest projects.
- Suggest internships.
- Suggest skills.
- Give career advice.
`;

    const completion =
      await groq.chat.completions.create({
        model:
          "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content:
              "You are an expert career mentor.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],

        temperature: 0.7,
      });

    return completion.choices[0]
      .message.content;
  } catch (error) {
    console.error(error);

    return "Unable to generate mentor response.";
  }
};

module.exports = {
  askMentorAI,
};