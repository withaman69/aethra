const express = require("express");
const validate = require("../middlewares/validate");

const router = express.Router();
const {
  registerSchema,
} = require("../validations/authValidation");

const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

router.post(
  "/register",
  validate(registerSchema),
  registerUser
);

router.post("/login", loginUser);

router.post("/forgot-password", forgotPassword);

router.put(
  "/reset-password/:token",
  resetPassword
);

module.exports = router;