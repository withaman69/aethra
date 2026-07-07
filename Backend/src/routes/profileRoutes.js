const express = require("express");

const router = express.Router();

const protect = require(
  "../middlewares/authMiddleware"
);

const {
  getProfile,
  updateProfile,
  updateAvatar,
} = require(
  "../controllers/profileController"
);
const upload = require(
  "../middlewares/upload"
);

router.get(
  "/",
  protect,
  getProfile
);

router.put(
  "/",
  protect,
  updateProfile
);
router.put(
  "/avatar",
  protect,
  upload.single("avatar"),
  updateAvatar
);
module.exports = router;