const User = require(
  "../models/User"
);

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

      const report =
        generateCareerReport(
          user
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