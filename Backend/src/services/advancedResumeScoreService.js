const calculateAdvancedScore =
  ({
    user,
    educationCount,
    experienceCount,
    projectCount,
    certificationCount,
  }) => {
    let score = 0;

    // Profile Basics
    if (
      user.bio &&
      user.bio.length > 10
    )
      score += 10;

    if (
      user.skills &&
      user.skills.length > 0
    )
      score += 15;

    if (
      user.goals &&
      user.goals.length > 0
    )
      score += 10;

    if (
      user.occupation
    )
      score += 5;

    if (
      user.avatar
    )
      score += 5;

    // Education
    if (
      educationCount > 0
    )
      score += 15;

    // Experience
    if (
      experienceCount > 0
    )
      score += 15;

    // Projects
    if (
      projectCount > 0
    )
      score += 15;

    // Certifications
    if (
      certificationCount > 0
    )
      score += 10;

    let status =
      "Needs Improvement";

    if (score >= 80)
      status =
        "Excellent";
    else if (
      score >= 60
    )
      status = "Good";
    else if (
      score >= 40
    )
      status = "Average";

    return {
      score,
      status,
    };
  };

module.exports = {
  calculateAdvancedScore,
};