const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getCareerReadiness,
} = require(
  "../controllers/careerReadinessController"
);

router.get(
  "/",
  protect,
  getCareerReadiness
);

module.exports = router;