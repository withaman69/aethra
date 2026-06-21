const generateCareerReport = (
  user
) => {
  const strengths = [];
  const weaknesses = [];
  const recommendations = [];

  const careerLevel =
    user.careerLevel ||
    "student";

  // Skills

  if (
    user.skills &&
    user.skills.length >= 3
  ) {
    strengths.push(
      "Strong technical skills"
    );
  } else {
    weaknesses.push(
      "Limited technical skills"
    );

    recommendations.push(
      "Learn more industry-relevant skills"
    );
  }

  // Projects

  if (
    user.projects &&
    user.projects.length > 0
  ) {
    strengths.push(
      "Projects available"
    );
  } else {
    recommendations.push(
      "Build portfolio projects"
    );
  }

  // Career Level Logic

  if (
    careerLevel ===
    "experienced"
  ) {
    if (
      !user.experience ||
      user.experience.length === 0
    ) {
      weaknesses.push(
        "No experience records found"
      );

      recommendations.push(
        "Add professional experience"
      );
    }
  }

  if (
    careerLevel ===
    "student"
  ) {
    recommendations.push(
      "Focus on projects and internships"
    );
  }

  if (
    careerLevel ===
    "fresher"
  ) {
    recommendations.push(
      "Prepare for interviews and improve portfolio"
    );
  }

  const readiness =
    Math.max(
      0,
      100 -
        weaknesses.length *
          10
    );

  return {
    careerLevel,
    strengths,
    weaknesses,
    recommendations,
    readiness,
  };
};

module.exports = {
  generateCareerReport,
};