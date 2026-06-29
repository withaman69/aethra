const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const upload = require(
"../middlewares/cloudinaryUpload"
);
const resumeUpload =
  require(
    "../middlewares/cloudinaryResumeUpload"
  );
const {
uploadAvatar,uploadResume
} = require("../controllers/uploadController");

router.post(
"/avatar",
protect,
upload.single("avatar"),
uploadAvatar
);
router.post(
  "/resume",
  protect,
  resumeUpload.single(
    "resume"
  ),
  uploadResume
);
module.exports = router;
