const calculateResumeScore =
  (profile) => {
    let score = 0;

    if (
      profile.skills &&
      profile.skills.length > 0
    ) {
      score += 20;
    }

    if (
      profile.bio &&
      profile.bio.trim()
        .length > 10
    ) {
      score += 15;
    }

    if (
      profile.occupation
    ) {
      score += 10;
    }

    if (
      profile.goals &&
      profile.goals.length > 0
    ) {
      score += 10;
    }

    if (
      profile.avatar
    ) {
      score += 5;
    }

    return {
      score,
      status:
        score >= 70
          ? "Excellent"
          : score >= 40
          ? "Good"
          : "Needs Improvement",
    };
  };

module.exports = {
  calculateResumeScore,
};