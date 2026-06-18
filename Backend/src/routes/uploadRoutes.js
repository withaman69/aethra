const express = require("express");
const router = express.Router();

const {
  uploadAvatar,
} = require("../controllers/uploadController");

const upload = require(
  "../middlewares/uploadMiddleware"
);

const protect = require(
  "../middlewares/authMiddleware"
);

router.post(
  "/avatar",
  protect,
  upload.single("avatar"),
  uploadAvatar
);

module.exports = router;