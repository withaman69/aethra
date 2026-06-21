const analyzeResume = (
  resumeText
) => {
  const skillsDatabase = [
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "React",
    "Docker",
    "Redis",
    "AWS",
    "Git",
    "System Design",
  ];

  const foundSkills = [];

  skillsDatabase.forEach((skill) => {
    if (
      resumeText
        .toLowerCase()
        .includes(
          skill.toLowerCase()
        )
    ) {
      foundSkills.push(skill);
    }
  });

  const missingSkills =
    skillsDatabase.filter(
      (skill) =>
        !foundSkills.includes(
          skill
        )
    );

  const atsScore =
    Math.round(
      (foundSkills.length /
        skillsDatabase.length) *
        100
    );

  const suggestions = [];

  if (atsScore < 50) {
    suggestions.push(
      "Add more technical skills"
    );
  }

  if (
    !resumeText
      .toLowerCase()
      .includes("project")
  ) {
    suggestions.push(
      "Add projects section"
    );
  }

  if (
    !resumeText
      .toLowerCase()
      .includes("experience")
  ) {
    suggestions.push(
      "Add experience section"
    );
  }

  return {
    atsScore,
    foundSkills,
    missingSkills,
    suggestions,
  };
};

module.exports = {
  analyzeResume,
};