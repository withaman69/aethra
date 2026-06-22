const {
  generateRoadmap,
} = require(
  "../services/aiRoadmapGeneratorService"
);

const generateCareerRoadmap =
  async (req, res) => {
    try {
      const {
        careerGoal,
        careerLevel,
      } = req.body;

      if (!careerGoal) {
        return res.status(400).json({
          success: false,
          message:
            "Career goal is required",
        });
      }

      const roadmap =
        generateRoadmap(
          careerGoal,
          careerLevel
        );

      res.status(200).json({
        success: true,
        roadmap,
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
  generateCareerRoadmap,
};