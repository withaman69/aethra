const User =
  require("../models/User");

const uploadResume =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user.id
        );

      if (!user) {
        return res.status(404).json({
          success: false,
          message:
            "User not found",
        });
      }

      user.resume =
        req.file.path;

      await user.save();

      res.status(200).json({
        success: true,
        message:
          "Resume uploaded successfully",
        resume:
          user.resume,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

const getResume =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user.id
        );

      res.status(200).json({
        success: true,
        resume:
          user.resume,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

module.exports = {
  uploadResume,
  getResume,
};