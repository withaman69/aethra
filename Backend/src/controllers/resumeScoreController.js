const User = require(
  "../models/User"
);

const {
  calculateResumeScore,
} = require(
  "../services/resumeScoreService"
);

const getResumeScore =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user.id
        );

      if (!user) {
        return res.status(404).json({
          success: false,
          message:
            "User not found",
        });
      }

      const result =
        calculateResumeScore(
          user
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
          "Server Error",
      });
    }
  };

module.exports = {
  getResumeScore,
};