const User = require(
  "../models/User"
);

const Education = require(
  "../models/Education"
);

const Experience = require(
  "../models/Experience"
);

const Project = require(
  "../models/Project"
);

const Certification = require(
  "../models/Certification"
);

const {
  calculateAdvancedScore,
} = require(
  "../services/advancedResumeScoreService"
);

const {
  calculateCareerReadiness,
} = require(
  "../services/careerReadinessService"
);

const {
  generateSuggestions,
} = require(
  "../services/atsSuggestionService"
);

const {
  buildDashboardSummary,
} = require(
  "../services/dashboardService"
);

const getCareerSummary =
  async (req, res) => {
    try {
      const userId =
        req.user.id;

      const user =
        await User.findById(
          userId
        );

      if (!user) {
        return res.status(404).json({
          success: false,
          message:
            "User not found",
        });
      }

      const educationCount =
        await Education.countDocuments(
          {
            user: userId,
          }
        );

      const experienceCount =
        await Experience.countDocuments(
          {
            user: userId,
          }
        );

      const projectCount =
        await Project.countDocuments(
          {
            user: userId,
          }
        );

      const certificationCount =
        await Certification.countDocuments(
          {
            user: userId,
          }
        );

      const atsResult =
        calculateAdvancedScore(
          {
            user,
            educationCount,
            experienceCount,
            projectCount,
            certificationCount,
          }
        );

      const readiness =
        calculateCareerReadiness(
          {
            atsScore:
              atsResult.score,
            careerLevel:
              user.careerLevel,
          }
        );

      const suggestions =
        generateSuggestions(
          user
        );

      const summary =
        buildDashboardSummary(
          {
            atsScore:
              atsResult.score,
            readinessScore:
              readiness.readinessScore,
            careerLevel:
              user.careerLevel,
            suggestionCount:
              suggestions.length,
          }
        );

      res.status(200).json({
        success: true,
        data: summary,
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
  getCareerSummary,
};