const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  analyzeResumeController,
} = require(
  "../controllers/resumeAnalysisController"
);

router.post(
  "/",
  protect,
  analyzeResumeController
);

module.exports = router;