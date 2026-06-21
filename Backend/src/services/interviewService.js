const generateQuestions = (
  role
) => {
  const questionBank = {
    "Backend Developer": [
      "What is Node.js?",
      "Explain JWT.",
      "What is middleware?",
      "Difference between SQL and NoSQL?",
      "What is REST API?",
    ],

    "Frontend Developer": [
      "What is React?",
      "What is Virtual DOM?",
      "What are React Hooks?",
      "Difference between let and var?",
      "What is state management?",
    ],
  };

  return (
    questionBank[role] || [
      "Tell me about yourself.",
      "What are your strengths?",
      "Why should we hire you?",
    ]
  );
};

const evaluateAnswers = (
  answers
) => {
  let score = 0;

  answers.forEach((item) => {
    if (
      item.answer &&
      item.answer.length > 20
    ) {
      score += 20;
    }
  });

  if (score > 100) {
    score = 100;
  }

  const feedback = [];

  if (score >= 80) {
    feedback.push(
      "Excellent performance"
    );
  } else if (score >= 60) {
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