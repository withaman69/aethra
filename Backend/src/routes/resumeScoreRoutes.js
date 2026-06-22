const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getResumeScore,
} = require(
  "../controllers/resumeScoreController"
);

router.get(
  "/",
  protect,
  getResumeScore
);

module.exports = router;