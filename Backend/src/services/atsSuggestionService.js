const generateSuggestions =
  (profile) => {
    const suggestions =
      [];

    if (
      !profile.bio ||
      profile.bio.trim()
        .length < 10
    ) {
      suggestions.push(
        "Add a professional bio"
      );
    }

    if (
      !profile.occupation
    ) {
      suggestions.push(
        "Add your occupation"
      );
    }

    if (
      profile.skillsCount ===
      0
    ) {
      suggestions.push(
        "Add technical skills"
      );
    }

    if (
      profile.goalsCount ===
      0
    ) {
      suggestions.push(
        "Add career goals"
      );
    }

    if (
      !profile.avatar
    ) {
      suggestions.push(
        "Upload a profile picture"
      );
    }

    return suggestions;
  };

module.exports = {
  generateSuggestions,
};