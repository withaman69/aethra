const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
  avatar: {
    type: String,
    default: "",
  },

  resume: {
    type: String,
    default: "",
  },
  resumeText: {
  type: String,
  default: "",
},

  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  careerLevel: {
    type: String,
    enum: [
      "student",
      "fresher",
      "experienced",
    ],
    default: "student",
  },

  // PROFILE SECTION
  headline: {
    type: String,
    default: "",
  },

  location: {
    type: String,
    default: "",
  },

  about: {
    type: String,
    default: "",
  },

  linkedin: {
    type: String,
    default: "",
  },

  github: {
    type: String,
    default: "",
  },

  portfolio: {
    type: String,
    default: "",
  },

  phone: {
    type: String,
    default: "",
  },

  // EXISTING
  bio: {
    type: String,
    default: "",
  },

  occupation: {
    type: String,
    default: "",
  },

  skills: {
    type: [String],
    default: [],
  },

  goals: {
    type: [String],
    default: [],
  },

  // DASHBOARD STATS
  profileCompletion: {
    type: Number,
    default: 0,
  },

  atsScore: {
    type: Number,
    default: 0,
  },

  readinessScore: {
    type: Number,
    default: 0,
  },

  // RESET PASSWORD
  resetPasswordToken: {
    type: String,
  },

  resetPasswordExpire: {
    type: Date,
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);
