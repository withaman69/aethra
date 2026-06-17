const asyncHandler = require("../middlewares/asyncHandler");

const uploadAvatar = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  res.status(200).json({
    success: true,
    message: "Avatar uploaded successfully",
    file: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
});

module.exports = {
  uploadAvatar,
};