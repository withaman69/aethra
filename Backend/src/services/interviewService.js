const groq = require("./groqClient");

//
// FALLBACK QUESTIONS
//
const fallbackQuestions = (
  role,
  level
) => {
  const normalizedRole =
    role?.toLowerCase();

  const questionBank = {
    "backend developer": {
      Beginner: [
        "What is Node.js?",
        "What is Express.js?",
        "What is MongoDB?",
        "What is REST API?",
        "What is JWT?",
      ],

      Intermediate: [
        "Explain middleware in Express.",
        "Difference between SQL and NoSQL?",
        "How does authentication work?",
        "Explain Mongoose Schema.",
        "What is API rate limiting?",
      ],

      Advanced: [
        "How would you design a scalable backend?",
        "Explain horizontal vs vertical scaling.",
        "How would you handle 1 million users?",
        "Explain Redis caching strategy.",
        "How would you secure a production API?",
      ],
    },

    "frontend developer": {
      Beginner: [
        "What is React?",
        "What is JSX?",
        "What is Virtual DOM?",
        "What are React Hooks?",
        "Difference between let and var?",
      ],

      Intermediate: [
        "Explain useEffect lifecycle.",
        "What is Context API?",
        "How does React rendering work?",
        "What is state management?",
        "How would you optimize a React app?",
      ],

      Advanced: [
        "Explain React reconciliation.",
        "How does code splitting work?",
        "SSR vs CSR?",
        "How would you architect a large React application?",
        "Explain React performance optimization techniques.",
      ],
    },

    "full stack developer": {
      Beginner: [
        "What is MERN Stack?",
        "How does frontend communicate with backend?",
        "What is an API?",
        "What is MongoDB?",
        "What is React?",
      ],

      Intermediate: [
        "Explain authentication flow.",
        "How would you deploy a MERN application?",
        "Explain CRUD architecture.",
        "How does JWT authentication work?",
        "Explain MVC pattern.",
      ],

      Advanced: [
        "Design a scalable MERN application.",
        "How would you implement microservices?",
        "How would you optimize database performance?",
        "Explain distributed systems basics.",
        "How would you handle system failures?",
      ],
    },
  };

  return (
    questionBank?.[
      normalizedRole
    ]?.[level] || [
      "Tell me about yourself.",
      "What are your strengths?",
      "Why should we hire you?",
    ]
  );
};

//
// AI QUESTION GENERATION
//
const generateQuestions =
  async (role, level) => {
    try {
     const prompt = `
Generate 10 interview questions.

Role: ${role}
Level: ${level}

Mix:
- Technical
- HR
- Project Based
- Scenario Based

Return ONLY valid JSON.

Example:

[
 {
   "question":"What is React?",
   "type":"Technical"
 },
 {
   "question":"Tell me about yourself",
   "type":"HR"
 }
]
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

      const content =
        completion.choices[0]
          .message.content;

      const parsed =
        JSON.parse(content);

      if (
        Array.isArray(parsed)
      ) {
        return parsed.map(
          (item) =>
            typeof item ===
            "string"
              ? item
              : item.question
        );
      }

      return fallbackQuestions(
        role,
        level
      );
    } catch (error) {
      console.error(
        "AI Question Generation Failed:",
        error.message
      );

      return fallbackQuestions(
        role,
        level
      );
    }
  };

//
// BASIC FALLBACK EVALUATION
//
const evaluateAnswers = (
  answers
) => {
  let score = 0;

  answers.forEach(
    (item) => {
      if (
        item.answer &&
        item.answer.trim()
          .length > 20
      ) {
        score += 20;
      }
    }
  );

  if (score > 100) {
    score = 100;
  }

  const feedback = [];

  if (score >= 80) {
    feedback.push(
      "Excellent performance"
    );
  } else if (
    score >= 60
  ) {
    feedback.push(
      "Good performance"
    );
  } else {
    feedback.push(
      "Needs improvement"
    );
  }

  return {
    score,
    feedback,
  };
};

module.exports = {
  generateQuestions,
  evaluateAnswers,
};