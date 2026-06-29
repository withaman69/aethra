const mongoose =
  require("mongoose");

const resumeAnalysisSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "User",
      },

      score: Number,

      foundKeywords: [
        String,
      ],

      missingKeywords: [
        String,
      ],

      suggestions: [
        String,
      ],
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "ResumeAnalysis",
    resumeAnalysisSchema
  );