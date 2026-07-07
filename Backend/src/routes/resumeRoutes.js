const express = require("express");

const router = express.Router();

const protect =
  require("../middlewares/authMiddleware");

const upload =
  require("../middlewares/resumeUpload");

const {
  uploadResume,
  getResume,
  deleteResume
} = require(
  "../controllers/resumeController"
);

router.post(
  "/upload",
  protect,
  upload.single("resume"),
  uploadResume
);

router.get(
  "/",
  protect,
  getResume
);
router.delete(
  "/",
  protect,
  deleteResume
);
module.exports = router;