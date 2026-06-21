const mongoose = require("mongoose");

const certificationSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      name: {
        type: String,
        required: true,
      },

      organization: {
        type: String,
        required: true,
      },

      issueDate: {
        type: Date,
        required: true,
      },

      expiryDate: {
        type: Date,
      },

      credentialId: {
        type: String,
        default: "",
      },

      credentialUrl: {
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
    "Certification",
    certificationSchema
  );