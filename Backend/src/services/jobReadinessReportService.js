const buildJobReadinessReport =
  ({
    atsScore,
    careerReadiness,
    suggestionCount,
  }) => {
    let overallStatus =
      "Needs Work";

    if (
      careerReadiness >=
      80
    ) {
      overallStatus =
        "Job Ready";
    } else if (
      careerReadiness >=
      60
    ) {
      overallStatus =
        "Almost Ready";
    } else if (
      careerReadiness >=
      40
    ) {
      overallStatus =
        "Developing";
    }

    return {
      atsScore,
      careerReadiness,
      suggestionCount,
      overallStatus,
    };
  };

module.exports = {
  buildJobReadinessReport,
};