const {
  analyzeCareer,
} = require(
  "../services/careerAnalysisService"
);

const getCareerAnalysis =
  async (req, res) => {
    try {
      const analysis =
        await analyzeCareer(
          req.user.id
        );

      res.status(200).json({
        success: true,
        data: analysis,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

module.exports = {
  getCareerAnalysis,
};