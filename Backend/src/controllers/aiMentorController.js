const User = require("../models/User");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Certification = require("../models/Certification");

const {
  askMentorAI,
} = require(
  "../services/aiMentorGroqService"
);

const askMentor =
  async (req, res) => {
    try {
      const { message } =
        req.body;

      if (!message) {
        return res.status(400).json({
          success: false,
          message:
            "Message is required",
        });
      }

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

      const response =
        await askMentorAI(
          profileData,
          message
        );

      return res.status(200).json({
        success: true,
        response,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

module.exports = {
  askMentor,
};