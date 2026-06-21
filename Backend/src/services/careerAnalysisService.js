const User =
  require("../models/User");

const Goal =
  require("../models/Goal");

const Education =
  require("../models/Education");

const Project =
  require("../models/Project");

const Certification =
  require("../models/Certification");

const analyzeCareer =
  async (userId) => {
    const user =
      await User.findById(
        userId
      );

    const goals =
      await Goal.find({
        user: userId,
      });

    const education =
      await Education.find({
        user: userId,
      });

    const projects =
      await Project.find({
        user: userId,
      });

    const certifications =
      await Certification.find({
        user: userId,
      });

    return {
      profile: {
        name: user.name,
        occupation:
          user.occupation,
        skills:
          user.skills,
      },

      stats: {
        education:
          education.length,

        projects:
          projects.length,

        certifications:
          certifications.length,

        goals:
          goals.length,
      },

      recommendations: [
        "Keep your profile updated",

        "Complete active goals",

        "Build more projects",

        "Add industry certifications",
      ],
    };
  };

module.exports = {
  analyzeCareer,
};