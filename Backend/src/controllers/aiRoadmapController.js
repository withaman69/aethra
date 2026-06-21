const {
  generateRoadmap,
} = require(
  "../services/aiRoadmapService"
);

const generateCareerRoadmap =
  async (req, res) => {
    try {
      const {
        targetRole,
        currentSkills,
      } = req.body;

      if (!targetRole) {
        return res.status(400).json({
          success: false,
          message:
            "Target role required",
        });
      }

      const roadmap =
        generateRoadmap(
          targetRole,
          currentSkills
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