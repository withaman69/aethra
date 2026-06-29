const express = require("express");

const router = express.Router();

const protect =
require("../middlewares/authMiddleware");

const {
saveProgress,
getProgress,
} = require(
"../controllers/roadmapProgressController"
);

router.post(
"/save",
protect,
saveProgress
);

router.get(
"/my-progress",
protect,
getProgress
);

module.exports = router;
