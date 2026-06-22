const generateRoadmap = (
  careerGoal,
  careerLevel
) => {
  const goal =
    careerGoal.toLowerCase();

  if (
    goal.includes("backend")
  ) {
    return [
      {
        month: 1,
        topics: [
          "JavaScript",
          "ES6",
          "Git",
        ],
      },
      {
        month: 2,
        topics: [
          "Node.js",
          "NPM",
          "Express.js",
        ],
      },
      {
        month: 3,
        topics: [
          "MongoDB",
          "Mongoose",
        ],
      },
      {
        month: 4,
        topics: [
          "Authentication",
          "JWT",
          "Security",
        ],
      },
      {
        month: 5,
        topics: [
          "Docker",
          "Deployment",
          "AWS Basics",
        ],
      },
      {
        month: 6,
        topics: [
          "System Design",
          "Interview Prep",
          "Projects",
        ],
      },
    ];
  }

  if (
    goal.includes("frontend")
  ) {
    return [
      {
        month: 1,
        topics: [
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
      {
        month: 2,
        topics: [
          "React",
          "Components",
        ],
      },
      {
        month: 3,
        topics: [
          "State Management",
          "Redux",
        ],
      },
      {
        month: 4,
        topics: [
          "Next.js",
          "SSR",
        ],
      },
    ];
  }

  return [
    {
      month: 1,
      topics: [
        "Choose a Career Path",
      ],
    },
  ];
};

module.exports = {
  generateRoadmap,
};