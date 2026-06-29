const User =
  require("../models/User");

const ResumeAnalysis =
  require(
    "../models/ResumeAnalysis"
  );

const {
  calculateATSScore,
} = require(
  "../services/atsService"
);

const analyzeResume =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user.id
        );

      if (!user.resume) {
        return res
          .status(400)
          .json({
            success:
              false,
            message:
              "Upload resume first",
          });
      }

      const resumeText = `
      ${user.skills.join(
        " "
      )}
      ${user.bio}
      ${user.occupation}
      `;

      const result =
        calculateATSScore(
          resumeText
        );

      const suggestions =
        result.missingKeywords.map(
          (
            skill
          ) =>
            `Add ${skill} to your resume`
        );

      const analysis =
        await ResumeAnalysis.create(
          {
            user:
              req.user.id,

            score:
              result.score,

            foundKeywords:
              result.foundKeywords,

            missingKeywords:
              result.missingKeywords,

            suggestions,
          }
        );

      res.status(200).json({
        success: true,
        data: analysis,
      });
    } catch (error) {
      console.error(
        error
      );

      res.status(500).json({
        success:
          false,
      });
    }
  };

const getLatestAnalysis =
  async (req, res) => {
    const analysis =
      await ResumeAnalysis.findOne(
        {
          user:
            req.user.id,
        }
      ).sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      data: analysis,
    });
  };

module.exports = {
  analyzeResume,
  getLatestAnalysis,
};