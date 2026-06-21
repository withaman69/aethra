const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  generateCareerRoadmap,
} = require(
  "../controllers/aiRoadmapController"
);

router.post(
  "/generate",
  protect,
  generateCareerRoadmap
);

module.exports = router;