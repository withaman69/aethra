const express = require("express");
const protect = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validate");

const {
  updateProfileSchema,
} = require("../validations/userValidation");

const {
  getProfile,
  updateProfile,
} = require("../controllers/userController");

const router = express.Router();

router.get("/profile", protect, getProfile);

router.put(
  "/profile",
  protect,
  validate(updateProfileSchema),
  updateProfile
);

module.exports = router;