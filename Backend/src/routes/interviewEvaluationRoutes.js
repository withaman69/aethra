const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  evaluateInterview,
} = require(
  "../controllers/interviewEvaluationController"
);

router.post(
  "/evaluate",
  protect,
  evaluateInterview
);

module.exports = router;