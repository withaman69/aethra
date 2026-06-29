const mongoose = require("mongoose");

const skillGapSchema = new mongoose.Schema(
{
  role: {
    type: String,
    required: true,
  },

  requiredSkills: [
    {
      type: String,
    },
  ],
},
{
  timestamps: true,
}
);

module.exports = mongoose.model(
  "SkillGap",
  skillGapSchema
);