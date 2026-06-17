const sendEmail = require("../utils/sendEmail");
const asyncHandler = require("../middlewares/asyncHandler");

const sendTestEmail = asyncHandler(
  async (req, res) => {
    await sendEmail({
      email: "test@example.com",
      subject: "Welcome to Aethra",
     mailgenContent: {
  body: {
    name: "Aman",
    intro:
      "Welcome to Aethra! We're excited to have you onboard.",
    action: {
      instructions:
        "Get started by exploring your account:",
      button: {
        color: "#22BC66",
        text: "Open Aethra",
        link: "https://aethra.com",
      },
    },
    outro:
      "Need help? Just reply to this email.",
  },
},
    });

    res.status(200).json({
      success: true,
      message:
        "Welcome email sent successfully",
    });
  }
);

module.exports = { sendTestEmail };