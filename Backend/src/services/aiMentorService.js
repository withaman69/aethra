const generateCareerAdvice = (message) => {
  const text = message.toLowerCase();

  if (text.includes("backend")) {
    return `
Learn:
1. JavaScript
2. Node.js
3. Express.js
4. MongoDB
5. Docker
6. AWS
7. System Design

Build projects and prepare for interviews.
`;
  }

  if (text.includes("frontend")) {
    return `
Learn:
1. HTML
2. CSS
3. JavaScript
4. React
5. Next.js
6. TypeScript

Build responsive projects.
`;
  }

  if (text.includes("resume")) {
    return `
Focus on:
- Projects
- Achievements
- Technical Skills
- ATS Keywords
`;
  }

  return `
Tell me your target role and current skills. I'll help create a roadmap.
`;
};

module.exports = {
  generateCareerAdvice,
};
