const {
  evaluateAnswer,
} = require(
  "../services/interviewEvaluationService"
);

const evaluateInterview =
  async (req, res) => {
    try {
      const {
        question,
        answer,
      } = req.body;

      if (
        !question ||
        !answer
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Question and answer are required",
        });
      }

      const result =
        evaluateAnswer(
          question,
          answer
        );

      res.status(200).json({
        success: true,
        ...result,
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
  evaluateInterview,
};