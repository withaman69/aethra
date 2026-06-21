const mongoose = require("mongoose");

const experienceSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      company: {
        type: String,
        required: true,
      },

      position: {
        type: String,
        required: true,
      },

      employmentType: {
        type: String,
        default: "",
      },

      location: {
        type: String,
        default: "",
      },

      startDate: {
        type: Date,
        required: true,
      },

      endDate: {
        type: Date,
      },

      current: {
        type: Boolean,
        default: false,
      },

      description: {
        type: String,
        default: "",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Experience",
    experienceSchema
  );