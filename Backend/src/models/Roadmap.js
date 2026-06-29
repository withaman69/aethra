const mongoose = require("mongoose");

const roadmapSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      careerPath: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        default: "",
      },

      difficulty: {
        type: String,
        enum: [
          "Beginner",
          "Intermediate",
          "Advanced",
        ],
        default: "Beginner",
      },

      estimatedDuration: {
        type: String,
        default: "",
      },
      skills: [
  {
    type: String,
  },
],

      steps: [
        {
          type: String,
        },
      ],
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Roadmap",
    roadmapSchema
  );