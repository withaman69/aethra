const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getAdvancedResumeScore,
} = require(
  "../controllers/advancedResumeScoreController"
);

router.get(
  "/",
  protect,
  getAdvancedResumeScore
);

module.exports = router;