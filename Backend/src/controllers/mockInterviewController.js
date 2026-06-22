const {
  generateQuestions,
} = require(
  "../services/mockInterviewService"
);

const startInterview =
  async (req, res) => {
    try {
      const { role } =
        req.body;

      if (!role) {
        return res.status(400).json({
          success: false,
          message:
            "Role is required",
        });
      }

      const questions =
        generateQuestions(
          role
        );

      res.status(200).json({
        success: true,
        role,
        questions,
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
  startInterview,
};