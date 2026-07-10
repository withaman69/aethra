const Interview = require("../models/Interview");

const {
  generateQuestions,
  evaluateAnswers,
} = require("../services/interviewService");

const startInterview = async (req, res) => {
  try {
    console.log("BODY:", req.body);
const {
  role,
  level,
} = req.body;
console.log("ROLE:", role);
console.log("LEVEL:", level);

const questions =
  await generateQuestions(
    role,
    level
  );

    const interview = await Interview.create({
      user: req.user.id,
      role,
      questions,
    });

    res.status(201).json({
      success: true,
      data: interview,
    });
  } catch (error) {
  console.error(
    "INTERVIEW ERROR:",
    error
  );

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

const submitInterview = async (req, res) => {
  try {
    const { interviewId, answers } = req.body;

    console.log("INTERVIEW ID RECEIVED:", interviewId);

    const interview = await Interview.findById(interviewId);

    console.log("INTERVIEW FOUND:", interview);

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    const result = evaluateAnswers(answers);

    interview.answers = answers;
    interview.score = result.score;
    interview.feedback = result.feedback;

    await interview.save();

    res.status(200).json({
      success: true,
      score: result.score,
      feedback: result.feedback,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const {
  evaluateInterviewAI,
} = require(
  "../services/interviewEvaluationAI"
);
const getInterviewHistory = async (req, res) => {
  try {
    const interviews = await Interview.find({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      count: interviews.length,
      data: interviews,
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
  startInterview,
  submitInterview,
  getInterviewHistory,
  evaluateInterviewAI,
};
