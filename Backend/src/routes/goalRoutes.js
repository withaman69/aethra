const express = require("express");

const router = express.Router();

const protect =
  require("../middlewares/authMiddleware");

const validate =
  require("../middlewares/validate");

const {
  goalSchema,
} = require(
  "../validations/goalValidation"
);

const {
  createGoal,
  getGoals,
  getGoalById,
  updateGoal,
  deleteGoal,
} = require(
  "../controllers/goalController"
);

router.post(
  "/",
  protect,
  validate(goalSchema),
  createGoal
);

router.get(
  "/",
  protect,
  getGoals
);

router.get(
  "/:id",
  protect,
  getGoalById
);

router.put(
  "/:id",
  protect,
  validate(goalSchema),
  updateGoal
);

router.delete(
  "/:id",
  protect,
  deleteGoal
);

module.exports = router;