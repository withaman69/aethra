const {
  analyzeSkillGap,
} = require(
  "../services/skillGapService"
);

const getSkillGap =
  async (req, res) => {
    try {
      const result =
        await analyzeSkillGap(
          req.user.id,
          req.params.roadmapId
        );

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

module.exports = {
  getSkillGap,
};