const Interview = require(
  "../models/Interview"
);

const {
  evaluateInterviewAI,
} = require(
  "../services/interviewEvaluationAI"
);

const evaluateInterview =
  async (req, res) => {
    try {
      const {
        interviewId,
      } = req.body;

      if (!interviewId) {
        return res.status(400).json({
          success: false,
          message:
            "Interview ID is required",
        });
      }

      const interview =
        await Interview.findById(
          interviewId
        );

      if (!interview) {
        return res.status(404).json({
          success: false,
          message:
            "Interview not found",
        });
      }

      const result =
        await evaluateInterviewAI(
          interview.role,
          interview.questions,
          interview.answers
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
  evaluateInterview,
};