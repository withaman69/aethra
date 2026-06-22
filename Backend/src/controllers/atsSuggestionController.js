const User = require(
  "../models/User"
);

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

      const suggestions =
        generateSuggestions(
          user
        );

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