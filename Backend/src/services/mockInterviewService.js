const generateQuestions =
  (role) => {
    const targetRole =
      role.toLowerCase();

    if (
      targetRole.includes(
        "backend"
      )
    ) {
      return [
        "What is JWT?",
        "What is middleware in Express?",
        "Explain REST APIs.",
        "Difference between SQL and NoSQL?",
        "What is Event Loop in Node.js?",
      ];
    }

    if (
      targetRole.includes(
        "frontend"
      )
    ) {
      return [
        "What is React?",
        "What is Virtual DOM?",
        "Difference between State and Props?",
        "What are React Hooks?",
        "What is useEffect?",
      ];
    }

    if (
      targetRole.includes(
        "full stack"
      )
    ) {
      return [
        "Explain MERN Stack.",
        "What is JWT Authentication?",
        "Difference between SQL and NoSQL?",
        "What is React Router?",
        "How do you deploy a web app?",
      ];
    }

    return [
      "Tell me about yourself.",
      "What are your strengths?",
      "What are your weaknesses?",
      "Why should we hire you?",
      "Where do you see yourself in 5 years?",
    ];
  };

module.exports = {
  generateQuestions,
};