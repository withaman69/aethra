const groq = require("./groqClient");

const generateCareerReport = async (
  profileData
) => {
  try {
    const prompt = `
You are an expert career coach, recruiter and placement mentor.

Analyze the following candidate profile.

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

Focus heavily on:

- Full Stack Development
- Software Engineering
- Career Readiness
- Internship Opportunities
- Remote Opportunities
- Research Opportunities
- Student Career Growth

Provide recommendations specific to the candidate profile.

Candidate is building a career platform named Aethra.

Aethra includes:
- AI Career Analysis
- AI Mentor
- Resume Review
- Skill Gap Analysis
- Roadmaps
- Mock Interviews

Treat this as a significant software project and evaluate accordingly.

Generate a detailed report containing:

1. Career Readiness Score (out of 100)
2. Strengths
3. Weaknesses
4. Missing Skills
5. Recommended Career Paths
6. Internship Recommendations
7. Placement Readiness Analysis
8. Personalized Improvement Plan
9. Final Verdict

Make the response professional and personalized.
`;

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content:
              "You are an expert career advisor.",
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

    return "Failed to generate career report.";
  }
};

module.exports = {
  generateCareerReport,
};