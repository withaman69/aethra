const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  reviewResumeController,
} = require(
  "../controllers/aiResumeReviewController"
);

router.post(
  "/review",
  protect,
  reviewResumeController
);

module.exports = router;