const Goal =
  require("../models/Goal");

const createGoal =
  async (req, res) => {
    try {
      const goal =
        await Goal.create({
          ...req.body,
          user: req.user.id,
        });

      res.status(201).json({
        success: true,
        data: goal,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const getGoals =
  async (req, res) => {
    try {
      const goals =
        await Goal.find({
          user: req.user.id,
        });

      res.status(200).json({
        success: true,
        count: goals.length,
        data: goals,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const getGoalById =
  async (req, res) => {
    try {
      const goal =
        await Goal.findOne({
          _id: req.params.id,
          user: req.user.id,
        });

      if (!goal) {
        return res.status(404).json({
          success: false,
          message:
            "Goal not found",
        });
      }

      res.status(200).json({
        success: true,
        data: goal,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const updateGoal =
  async (req, res) => {
    try {
      const goal =
        await Goal.findOneAndUpdate(
          {
            _id: req.params.id,
            user: req.user.id,
          },
          req.body,
          {
            new: true,
          }
        );

      if (!goal) {
        return res.status(404).json({
          success: false,
          message:
            "Goal not found",
        });
      }

      res.status(200).json({
        success: true,
        data: goal,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const deleteGoal =
  async (req, res) => {
    try {
      const goal =
        await Goal.findOneAndDelete({
          _id: req.params.id,
          user: req.user.id,
        });

      if (!goal) {
        return res.status(404).json({
          success: false,
          message:
            "Goal not found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Goal deleted successfully",
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
  createGoal,
  getGoals,
  getGoalById,
  updateGoal,
  deleteGoal,
};