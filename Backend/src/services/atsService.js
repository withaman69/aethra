const calculateATSScore = (
  resumeText
) => {
  const keywords = [
    "javascript",
    "react",
    "node",
    "mongodb",
    "express",
    "sql",
    "aws",
    "docker",
    "git",
    "api",
  ];

  const foundKeywords =
    keywords.filter(
      (keyword) =>
        resumeText
          .toLowerCase()
          .includes(
            keyword.toLowerCase()
          )
    );

  const missingKeywords =
    keywords.filter(
      (keyword) =>
        !resumeText
          .toLowerCase()
          .includes(
            keyword.toLowerCase()
          )
    );

  const score = Math.round(
    (foundKeywords.length /
      keywords.length) *
      100
  );

  return {
    score,
    foundKeywords,
    missingKeywords,
  };
};

module.exports = {
  calculateATSScore,
};