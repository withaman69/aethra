const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getGoalProgress,
  updateGoalProgress,
} = require(
  "../controllers/goalProgressController"
);

router.get(
  "/",
  protect,
  getGoalProgress
);

router.post(
  "/",
  protect,
  updateGoalProgress
);

module.exports = router;