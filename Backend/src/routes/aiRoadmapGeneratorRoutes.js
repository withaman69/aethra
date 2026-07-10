const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  generateRoadmapController,
} = require(
  "../controllers/aiRoadmapGeneratorController"
);

router.post(
  "/generate",
  protect,
  generateRoadmapController
);

module.exports = router;