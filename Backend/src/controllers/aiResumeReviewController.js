const {
  reviewResume,
} = require(
  "../services/aiResumeReviewService"
);

const reviewResumeController =
  async (req, res) => {
    try {
      const {
        resumeText,
      } = req.body;

      if (!resumeText) {
        return res.status(400).json({
          success: false,
          message:
            "Resume text required",
        });
      }

      const result =
       await reviewResume(
          resumeText
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
  reviewResumeController,
};