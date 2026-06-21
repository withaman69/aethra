const express = require("express");

const router = express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getCareerAnalysis,
} = require("../controllers/mentorController");

const {
  sendMentorRequest,
  getMyRequests,
} = require("../controllers/mentorRequestController");

router.get(
  "/analyze",
  protect,
  getCareerAnalysis
);

router.post(
  "/request",
  protect,
  sendMentorRequest
);

router.get(
  "/requests",
  protect,
  getMyRequests
);

module.exports = router;