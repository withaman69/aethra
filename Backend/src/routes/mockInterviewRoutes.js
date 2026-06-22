const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  startInterview,
} = require(
  "../controllers/mockInterviewController"
);

router.post(
  "/start",
  protect,
  startInterview
);

module.exports = router;