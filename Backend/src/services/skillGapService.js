const User =
  require("../models/User");

const Roadmap =
  require("../models/Roadmap");

const analyzeSkillGap =
  async (
    userId,
    roadmapId
  ) => {
    const user =
      await User.findById(
        userId
      );

    const roadmap =
      await Roadmap.findById(
        roadmapId
      );

    if (!user || !roadmap) {
      throw new Error(
        "User or roadmap not found"
      );
    }

    const userSkills =
      user.skills || [];

    const roadmapSkills =
      roadmap.steps || [];

    const missingSkills =
      roadmapSkills.filter(
        (skill) =>
          !userSkills.includes(
            skill
          )
      );

    const completion =
      roadmapSkills.length === 0
        ? 0
        : Math.round(
            ((roadmapSkills.length -
              missingSkills.length) /
              roadmapSkills.length) *
              100
          );

    return {
      roadmap:
        roadmap.title,

      userSkills,

      roadmapSkills,

      missingSkills,

      completion,
    };
  };

module.exports = {
  analyzeSkillGap,
};