const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getGoalAnalytics,
} = require(
  "../controllers/goalAnalyticsController"
);

router.get(
  "/",
  protect,
  getGoalAnalytics
);

module.exports =
  router;