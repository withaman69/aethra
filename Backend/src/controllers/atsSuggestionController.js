const User = require("../models/User");
const Skill = require("../models/Skill");
const Goal = require("../models/Goal");

const {
  generateSuggestions,
} = require(
  "../services/atsSuggestionService"
);

const getSuggestions =
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

      const skillsCount =
        await Skill.countDocuments({
          user: req.user.id,
        });

      const goalsCount =
        await Goal.countDocuments({
          user: req.user.id,
        });

      const suggestions =
        generateSuggestions({
          ...user.toObject(),
          skillsCount,
          goalsCount,
        });

      res.status(200).json({
        success: true,
        count:
          suggestions.length,
        suggestions,
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
  getSuggestions,
};