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
  buildJobReadinessReport,
} = require(
  "../services/jobReadinessReportService"
);

const {
  generateCareerReport,
} = require(
  "../services/pdfReportService"
);

const exportCareerReport =
  async (req, res) => {
    try {
      const userId =
        req.user.id;

      const user =
        await User.findById(
          userId
        );

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

      const report =
        buildJobReadinessReport(
          {
            atsScore:
              atsResult.score,
            careerReadiness:
              readiness.readinessScore,
            suggestionCount:
              suggestions.length,
          }
        );

      generateCareerReport(
        res,
        report
      );
    } catch (error) {
      console.error(
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

module.exports = {
  exportCareerReport,
};