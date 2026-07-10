const User = require("../models/User");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Certification = require("../models/Certification");

const {
  generateCareerReport,
} = require(
  "../services/aiCareerAnalysisService"
);

const analyzeCareer =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user.id
        );

      const educations =
        await Education.find({
          user: req.user.id,
        });

      const experiences =
        await Experience.find({
          user: req.user.id,
        });

      const projects =
        await Project.find({
          user: req.user.id,
        });

      const skills =
        await Skill.find({
          user: req.user.id,
        });

      const certifications =
        await Certification.find({
          user: req.user.id,
        });

      const profileData = {
        user,
        educations,
        experiences,
        projects,
        skills,
        certifications,
      };

      const report =
        await generateCareerReport(
          profileData
        );

      res.status(200).json({
        success: true,
        data: report,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

module.exports = {
  analyzeCareer,
};