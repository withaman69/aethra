const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getCareerSummary,
} = require(
  "../controllers/dashboardController"
);

router.get(
  "/career-summary",
  protect,
  getCareerSummary
);

module.exports = router;