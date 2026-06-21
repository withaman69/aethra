const express = require("express");

const router = express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getSkillGap,
} = require(
  "../controllers/skillGapController"
);

router.get(
  "/:roadmapId",
  protect,
  getSkillGap
);

module.exports = router;