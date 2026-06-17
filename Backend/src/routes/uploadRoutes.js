const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload");
const {
  uploadAvatar,
} = require("../controllers/uploadController");

router.post(
  "/avatar",
  upload.single("avatar"),
  uploadAvatar
);

module.exports = router;