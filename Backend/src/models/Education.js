const mongoose = require("mongoose");

const educationSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      institution: {
        type: String,
        required: true,
      },

      degree: {
        type: String,
        required: true,
      },

      fieldOfStudy: {
        type: String,
        required: true,
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
    "Education",
    educationSchema
  );