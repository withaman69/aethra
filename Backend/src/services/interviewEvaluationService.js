const evaluateAnswer = (
  question,
  answer
) => {
  let score = 5;
  let feedback =
    "Average answer.";

  const text =
    answer.toLowerCase();

  if (
    text.length > 50
  ) {
    score += 2;
  }

  if (
    text.includes(
      "authentication"
    )
  ) {
    score += 1;
  }

  if (
    text.includes(
      "token"
    )
  ) {
    score += 1;
  }

  if (
    text.includes(
      "security"
    )
  ) {
    score += 1;
  }

  if (score > 10)
    score = 10;

  if (score >= 9) {
    feedback =
      "Excellent answer.";
  } else if (
    score >= 7
  ) {
    feedback =
      "Good answer. Add more technical details.";
  } else if (
    score >= 5
  ) {
    feedback =
      "Average answer. Expand your explanation.";
  } else {
    feedback =
      "Needs improvement.";
  }

  return {
    score,
    feedback,
  };
};

module.exports = {
  evaluateAnswer,
};