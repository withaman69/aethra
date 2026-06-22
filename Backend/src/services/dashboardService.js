const buildDashboardSummary =
  ({
    atsScore,
    readinessScore,
    careerLevel,
    suggestionCount,
  }) => {
    return {
      atsScore,
      readinessScore,
      careerLevel,
      suggestionCount,
      profileCompletion:
        Math.min(
          atsScore,
          100
        ),
    };
  };

module.exports = {
  buildDashboardSummary,
};