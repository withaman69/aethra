const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const upload = require(
"../middlewares/cloudinaryUpload"
);

const {
uploadAvatar,
} = require("../controllers/uploadController");

router.post(
"/avatar",
protect,
upload.single("avatar"),
uploadAvatar
);

module.exports = router;
