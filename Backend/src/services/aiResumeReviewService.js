const reviewResume = (
  resumeText
) => {
  const strengths = [];
  const weaknesses = [];
  const suggestions = [];

  if (
    resumeText
      .toLowerCase()
      .includes("project")
  ) {
    strengths.push(
      "Projects section found"
    );
  } else {
    weaknesses.push(
      "Projects section missing"
    );

    suggestions.push(
      "Add projects section"
    );
  }

  if (
    resumeText
      .toLowerCase()
      .includes("experience")
  ) {
    strengths.push(
      "Experience section found"
    );
  } else {
    weaknesses.push(
      "Experience section missing"
    );

    suggestions.push(
      "Add work experience"
    );
  }

  if (
    resumeText.length < 300
  ) {
    weaknesses.push(
      "Resume content too short"
    );

    suggestions.push(
      "Add more details"
    );
  }

  const readiness =
    Math.max(
      0,
      100 -
        weaknesses.length *
          15
    );

  return {
    strengths,
    weaknesses,
    suggestions,
    readiness,
  };
};

module.exports = {
  reviewResume,
};