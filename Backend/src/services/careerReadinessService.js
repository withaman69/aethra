const calculateCareerReadiness =
  ({
    atsScore,
    careerLevel,
  }) => {
    let score = atsScore;

    if (
      careerLevel ===
      "student"
    ) {
      score -= 10;
    }

    if (
      careerLevel ===
      "fresher"
    ) {
      score += 0;
    }

    if (
      careerLevel ===
      "experienced"
    ) {
      score += 10;
    }

    if (score > 100)
      score = 100;

    if (score < 0)
      score = 0;

    let status =
      "Needs Work";

    if (score >= 80) {
      status =
        "Job Ready";
    } else if (
      score >= 60
    ) {
      status =
        "Almost Ready";
    } else if (
      score >= 40
    ) {
      status =
        "Developing";
    }

    return {
      readinessScore:
        score,
      status,
    };
  };

module.exports = {
  calculateCareerReadiness,
};