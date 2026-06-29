const Goal = require("../models/Goal");

const {
  buildGoalAnalytics,
} = require(
  "../services/goalAnalyticsService"
);

const getGoalAnalytics =
  async (req, res) => {
    try {
      const goals =
        await Goal.find({
          user: req.user.id,
        });

      const analytics =
        buildGoalAnalytics(
          goals
        );

      res.status(200).json({
        success: true,
        data: analytics,
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
  getGoalAnalytics,
};