const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const CustomError = require("../utils/customError");
const asyncHandler = require("../middlewares/asyncHandler");



// REGISTER USER
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check Existing User
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new CustomError(
      "User already exists",
      400
    );
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Send Welcome Email
  await sendEmail({
    email: user.email,
    subject: "Welcome to Aethra",
    mailgenContent: {
      body: {
        name: user.name,
        intro:
          "Welcome to Aethra! Your account has been created successfully.",
        outro:
          "We're excited to have you with us.",
      },
    },
  });

  // Response
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});
// LOGIN USER
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    throw new CustomError(
      "Email and password are required",
      400
    );
  }

  // Find User
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new CustomError(
      "Invalid credentials",
      401
    );
  }

  // Compare Password
  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new CustomError(
      "Invalid credentials",
      401
    );
  }

  // Generate JWT
  const token = generateToken(user._id);

  // Response
  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});


const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError(
      "User not found",
      404
    );
  }

  const resetToken = crypto
    .randomBytes(20)
    .toString("hex");

 console.log("GENERATED TOKEN:", resetToken);

user.resetPasswordToken = resetToken;

user.resetPasswordExpire =
  Date.now() + 15 * 60 * 1000;

await user.save();

console.log(
  "SAVED TOKEN:",
  user.resetPasswordToken
);

  const resetUrl =
    `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  await sendEmail({
    email: user.email,
    subject: "Aethra Password Reset",
    mailgenContent: {
      body: {
        name: user.name || "User",
        intro:
          "You requested a password reset.",
        action: {
          instructions:
            "Click the button below to reset your password:",
          button: {
            color: "#22BC66",
            text: "Reset Password",
            link: resetUrl,
          },
        },
        outro:
          "If you did not request this, ignore this email.",
      },
    },
  });

  res.status(200).json({
    success: true,
    message: "Password reset email sent",
  });
});

const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

console.log("TOKEN FROM URL:", token);

const user = await User.findOne({
  resetPasswordToken: token,
});

console.log("FOUND USER:", user);
  if (!user) {
    throw new CustomError(
      "Invalid or expired token",
      400
    );
  }

  user.password = await bcrypt.hash(
    password,
    10
  );

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password reset successful",
  });
});
module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword
};