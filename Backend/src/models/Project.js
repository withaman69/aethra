const mongoose = require("mongoose");

const projectSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      technologies: [
        {
          type: String,
        },
      ],

      githubLink: {
        type: String,
        default: "",
      },

      liveLink: {
        type: String,
        default: "",
      },

      startDate: {
        type: Date,
      },

      endDate: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Project",
    projectSchema
  );