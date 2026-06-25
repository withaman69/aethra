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

// Normalize skills for comparison
const normalizedUserSkills =
  userSkills.map(
    (skill) =>
      skill
        .trim()
        .toLowerCase()
  );

const missingSkills =
  roadmapSkills.filter(
    (skill) =>
      !normalizedUserSkills.includes(
        skill
          .trim()
          .toLowerCase()
      )
  );

const matchedSkills =
  roadmapSkills.filter(
    (skill) =>
      normalizedUserSkills.includes(
        skill
          .trim()
          .toLowerCase()
      )
  );

const completion =
  roadmapSkills.length === 0
    ? 0
    : Math.round(
        (matchedSkills.length /
          roadmapSkills.length) *
          100
      );

return {
  roadmap:
    roadmap.title,

  userSkills,

  roadmapSkills,

  matchedSkills,

  missingSkills,

  completion,
};


};

module.exports = {
analyzeSkillGap,
};
