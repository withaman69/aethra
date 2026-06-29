const GoalProgress =
  require("../models/GoalProgress");

const getGoalProgress =
  async (req, res) => {
    try {
      const progress =
        await GoalProgress.find({
          user: req.user.id,
        });

      res.status(200).json({
        success: true,
        data: progress,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

const updateGoalProgress =
  async (req, res) => {
    try {
      const {
        goal,
        progress,
      } = req.body;

      let record =
        await GoalProgress.findOne({
          user: req.user.id,
          goal,
        });

      if (!record) {
        record =
          await GoalProgress.create({
            user: req.user.id,
            goal,
            progress,
          });
      } else {
        record.progress =
          progress;

        await record.save();
      }

      res.status(200).json({
        success: true,
        data: record,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

module.exports = {
  getGoalProgress,
  updateGoalProgress,
};