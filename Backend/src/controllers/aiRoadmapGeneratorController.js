const {
  generateRoadmap,
} = require(
  "../services/aiRoadmapGeneratorService"
);

const generateRoadmapController =
  async (req, res) => {
    try {
      const {
        careerGoal,
        currentSkills,
      } = req.body;

      if (!careerGoal) {
        return res.status(400).json({
          success: false,
          message:
            "Career goal required",
        });
      }

      const roadmap =
        await generateRoadmap(
          careerGoal,
          currentSkills || []
        );

      res.status(200).json({
        success: true,
        data: roadmap,
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
  generateRoadmapController,
};