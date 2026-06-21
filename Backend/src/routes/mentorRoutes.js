const express = require("express");

const router = express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getCareerAnalysis,
} = require(
  "../controllers/mentorController"
);

router.get(
  "/analyze",
  protect,
  getCareerAnalysis
);

module.exports = router;