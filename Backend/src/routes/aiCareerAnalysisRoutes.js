const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  analyzeCareer,
} = require(
  "../controllers/aiCareerAnalysisController"
);

router.get(
  "/report",
  protect,
  analyzeCareer
);

module.exports = router;