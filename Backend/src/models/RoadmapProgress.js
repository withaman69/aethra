const mongoose = require("mongoose");

const roadmapProgressSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      roadmapId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roadmap",
        required: true,
      },

      completedSteps: [
        {
          type: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "RoadmapProgress",
  roadmapProgressSchema
);