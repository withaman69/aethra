const mongoose = require("mongoose");

const goalProgressSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      goal: {
        type: String,
        required: true,
      },

      progress: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "GoalProgress",
    goalProgressSchema
  );